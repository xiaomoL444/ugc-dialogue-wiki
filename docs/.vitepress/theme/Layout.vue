<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, provide, watch } from 'vue'
import { useData, useRouter } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'

const router = useRouter()
const { isDark } = useData()
const pageVisible = { opacity: 1, transform: 'translateY(0)' }
const pageHidden = { opacity: 0, transform: 'translateY(-10px)' }
const groupAnimations = new Map<HTMLElement, () => void>()
let leaving: Animation | undefined
let entering: Animation | undefined
let sidebarObserver: MutationObserver | undefined
let outlineScrollFrame = 0
let reduceMotion: MediaQueryList
let previousPageLoad: typeof router.onAfterPageLoad
let imageZoom: ReturnType<typeof mediumZoom> | undefined
let appearanceTransition: ViewTransition | undefined

function toggleAppearance() {
  appearanceTransition?.skipTransition()

  if (typeof document.startViewTransition !== 'function' || reduceMotion?.matches) {
    isDark.value = !isDark.value
    return
  }

  const root = document.documentElement
  root.classList.add('theme-transition')
  const transition = document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  })
  appearanceTransition = transition
  // A second click can skip the transition before the browser captures it.
  transition.ready.catch(() => {})

  const cleanup = () => {
    if (appearanceTransition !== transition) return
    appearanceTransition = undefined
    root.classList.remove('theme-transition')
  }
  transition.finished.then(cleanup, cleanup)
}

provide('toggle-appearance', toggleAppearance)

function refreshImageZoom() {
  if (!imageZoom) return
  const images = [...document.querySelectorAll<HTMLImageElement>('#VPContent .vp-doc img')]
    .filter((image) => !image.closest('a, button, [hidden], [data-no-zoom]'))
  imageZoom.detach().attach(...images)
}

watch(() => router.route.path, refreshImageZoom, { flush: 'post' })

function clearLeave(animation: Animation) {
  if (leaving === animation) {
    animation.cancel()
    leaving = undefined
  }
}

async function leavePage(href: string) {
  await previousPageLoad?.(href)

  if (!leaving) {
    const content = document.getElementById('VPContent')
    if (reduceMotion.matches || !content?.animate || new URL(href, location.href).pathname === router.route.path) return

    const current = getComputedStyle(content)
    const from = { opacity: current.opacity, transform: current.transform }
    entering?.cancel()
    leaving = content.animate([from, pageHidden], {
      duration: 200,
      easing: 'cubic-bezier(1, 0.5, 0.8, 1)',
      fill: 'forwards'
    })
  }

  const animation = leaving
  await animation.finished.catch(() => {})
  // Also release the exit if a second navigation returns to the same page.
  requestAnimationFrame(() => clearLeave(animation))
}

watch(() => router.route.path, async () => {
  const animation = leaving
  if (!animation) return

  // Let VitePress measure and restore scroll before translating the new page.
  await nextTick()
  if (leaving !== animation) return
  clearLeave(animation)
  const content = document.getElementById('VPContent')
  if (content?.animate && !reduceMotion.matches) {
    entering = content.animate([pageHidden, pageVisible], { duration: 200, easing: 'ease' })
  }
}, { flush: 'post' })

function animateGroup(group: HTMLElement, collapsed: boolean) {
  const items = group.querySelector<HTMLElement>(':scope > .items')
  if (!items?.animate || group.parentElement?.closest('.VPSidebarItem.collapsed')) return

  // Keep the default theme's hidden list visible just long enough to animate it.
  items.setAttribute('data-animating', '')
  const previous = groupAnimations.get(items)
  const height = previous ? items.getBoundingClientRect().height : undefined
  const opacity = previous ? getComputedStyle(items).opacity : undefined
  if (previous) {
    previous()
    items.setAttribute('data-animating', '')
  }
  const fullHeight = items.getBoundingClientRect().height
  const wasInert = items.inert
  if (collapsed) items.inert = true

  const heightAnimation = items.animate([
    { height: `${height ?? (collapsed ? fullHeight : 0)}px`, overflow: 'hidden' },
    { height: `${collapsed ? 0 : fullHeight}px`, overflow: 'hidden' }
  ], {
    duration: collapsed ? 100 : 300,
    easing: collapsed ? 'ease-out' : 'ease-in-out',
    fill: collapsed ? 'forwards' : 'none'
  })
  const opacityAnimation = items.animate([
    { opacity: opacity ?? (collapsed ? 1 : 0) },
    { opacity: collapsed ? 0 : 1 }
  ], {
    duration: collapsed ? 100 : 600,
    easing: 'ease-out',
    fill: collapsed ? 'forwards' : 'none'
  })

  const cleanup = () => {
    if (groupAnimations.get(items) !== cleanup) return
    items.removeAttribute('data-animating')
    items.inert = wasInert
    heightAnimation.cancel()
    opacityAnimation.cancel()
    groupAnimations.delete(items)
  }
  groupAnimations.set(items, cleanup)
  Promise.all([heightAnimation.finished, opacityAnimation.finished]).then(cleanup, () => {})
}

function smoothOutlineScroll(event: MouseEvent) {
  if (reduceMotion.matches || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return
  if (!(event.target instanceof Element) || !event.target.closest('.VPDocAsideOutline a.outline-link[href^="#"]')) return

  const root = document.documentElement
  root.classList.add('smooth-outline-scroll')
  cancelAnimationFrame(outlineScrollFrame)
  // VitePress scrolls on the next frame and handles the URL and focus itself.
  outlineScrollFrame = requestAnimationFrame(() => {
    outlineScrollFrame = requestAnimationFrame(() => root.classList.remove('smooth-outline-scroll'))
  })
}

onMounted(() => {
  reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  imageZoom = mediumZoom({ margin: 24, background: 'var(--vp-c-bg)' })
  refreshImageZoom()
  previousPageLoad = router.onAfterPageLoad
  router.onAfterPageLoad = leavePage
  window.addEventListener('click', smoothOutlineScroll, true)

  const app = document.getElementById('app')
  if (!app) return
  sidebarObserver = new MutationObserver((mutations) => {
    if (reduceMotion.matches) return
    for (const { target, oldValue } of mutations) {
      if (!(target instanceof HTMLElement) || !target.matches('.VPSidebar .VPSidebarItem.collapsible')) continue
      const collapsed = target.classList.contains('collapsed')
      const wasCollapsed = oldValue?.split(/\s+/).includes('collapsed') ?? false
      if (collapsed !== wasCollapsed) animateGroup(target, collapsed)
    }
  })
  sidebarObserver.observe(app, { subtree: true, attributeFilter: ['class'], attributeOldValue: true })
})

onBeforeUnmount(() => {
  appearanceTransition?.skipTransition()
  imageZoom?.detach()
  if (router.onAfterPageLoad === leavePage) router.onAfterPageLoad = previousPageLoad
  if (leaving) clearLeave(leaving)
  entering?.cancel()
  sidebarObserver?.disconnect()
  for (const cleanup of groupAnimations.values()) cleanup()
  window.removeEventListener('click', smoothOutlineScroll, true)
  cancelAnimationFrame(outlineScrollFrame)
  document.documentElement.classList.remove('smooth-outline-scroll')
})
</script>

<template>
  <DefaultTheme.Layout />
</template>

<style>
html.theme-transition::view-transition-group(root) {
  animation-duration: 0.3s;
  animation-timing-function: ease;
}

html.smooth-outline-scroll {
  scroll-behavior: smooth;
}

.VPSidebar .VPSidebarItem.collapsed > .items[data-animating] {
  display: block;
}

@media (width < 60rem) {
  .Layout .VPSidebar {
    opacity: 1;
    visibility: hidden;
    transition: transform 0.3s ease, visibility 0s 0.3s;
  }

  .Layout .VPSidebar.open {
    visibility: visible;
    transition: transform 0.3s ease, visibility 0s;
  }

  @media (prefers-reduced-motion: reduce) {
    .Layout .VPSidebar,
    .Layout .VPSidebar.open {
      transition: none;
    }
  }
}
</style>

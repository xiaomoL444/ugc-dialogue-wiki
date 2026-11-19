import { existsSync, readdirSync } from 'node:fs'
import type { DefaultTheme, UserConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'

const guidePaths = { root: 'guide', en: 'en/guide' }

function scanGuideVersions(guidePath: string) {
  const directory = new URL(`../${guidePath}/`, import.meta.url)
  if (!existsSync(directory)) return []

  return readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map(({ name }) => ({
      name,
      path: `${guidePath}/${name}`,
      directory: new URL(`${encodeURIComponent(name)}/`, directory)
    }))
    .sort((a, b) => {
      if (a.name === 'latest') return -1
      if (b.name === 'latest') return 1
      return b.name.localeCompare(a.name, 'en', { numeric: true })
    })
}

const guideVersions = {
  root: scanGuideVersions(guidePaths.root),
  en: scanGuideVersions(guidePaths.en)
}

const sidebarOptions = {
  documentRootPath: 'docs',
  includeRootIndexFile: false,
  useTitleFromFileHeading: true,
  useFolderLinkFromSameNameSubFile: true,
  collapsed: false,
  sortMenusByFrontmatterOrder: true,
  frontmatterOrderDefaultValue: 9999
}

const versionSidebars = [...guideVersions.root, ...guideVersions.en].map(({ path }) => ({
  ...sidebarOptions,
  scanStartPath: path,
  resolvePath: `/${path}/`,
  manualSortFileNameByPriority: ['get-started.md', 'get-started']
}))

const navLabels = {
  root: { home: '首页', guide: '快速开始', latest: '最新版', examples: '示例', credits: '鸣谢', changelog: '更新日志' ,numlimit:'千星沙箱各种数量上限（截止月之二 2025.12.16）'},
  en: { home: 'Home', guide: 'Getting Started', latest: 'Latest', examples: 'Examples', credits: 'Credits', changelog: 'Changelog',numlimit:'千星沙箱各种数量上限（截止月之二 2025.12.16）' }
}

function createNav(locale: keyof typeof guideVersions): DefaultTheme.NavItem[] {
  const labels = navLabels[locale]
  const items = guideVersions[locale].flatMap(({ name, path, directory }) => {
    const versionRoot = `/${path}/`
    const label = name === 'latest' ? labels.latest : name

    const getStarted = ['get-started/get-started.md', 'get-started.md']
      .find((file) => existsSync(new URL(file, directory)))
    if (getStarted) return [{ text: label, link: `${versionRoot}${getStarted.slice(0, -3)}` }]
    if (existsSync(new URL('index.md', directory))) return [{ text: label, link: versionRoot }]

    return []
  })

  return [
    { text: labels.home, link: locale === 'root' ? '/' : `/${locale}/` },
    ...(items.length ? [{ text: labels.guide, items, activeMatch: `^/${guidePaths[locale]}/` }] : []),
        { text: labels.changelog, link: locale === 'root' ? '/changelog' : `/${locale}/changelog` },
    { text: labels.credits, link: locale === 'root' ? '/credits' : `/${locale}/credits` },
    {text:labels.numlimit,link: locale === 'root'? '/千星沙箱各种数量上限' :`/${locale}/千星沙箱各种数量上限` },

  ]
}

function createFooter(qqNote: string): DefaultTheme.Footer {
  return {
    message: `
      <a class="footer-badge qq" href="https://qun.qq.com/universal-share/share?ac=1&amp;authKey=GjcTdNr41Zecn%2BNpA2gInbCmwuBbC7sumF8y88pf8/BB1tJXrz53dxwWmuRtUeVj&amp;busi_data=eyJncm91cENvZGUiOiI4NjMxODQ3ODAiLCJ0b2tlbiI6IlZaSHZhakx4TkVueFdRdUdheE94L1lFc1JvTk1SNHFpa3M2ZVpGbXVMQ21TYWd3cVE0OCtYd2M0d2tZU29RRzIiLCJ1aW4iOiIzMjk4MTk2NDAwIn0=&amp;data=wnakUzST3wl5KMAmIQst4KlE_diytV5hsK9ESGbDwnRcFMy38bpShZE4Dw1e0wPAqFtHUaafA67h-KNSoUwhJ2IhKsoYJCZ6QCVN7hlut5Y&amp;svctype=5&amp;tempid=h5_group_info" target="_blank" rel="noopener noreferrer">
        <span>QQ</span><span>曉末L444（${qqNote}）</span>
      </a>
      <a class="footer-badge bilibili" href="https://space.bilibili.com/609872107" target="_blank" rel="noopener noreferrer">
        <span>Bilibili</span><span>戀祈</span>
      </a>
      <a class="footer-badge discord" href="https://discord.com/users/437418965531099136" target="_blank" rel="noopener noreferrer">
        <span>Discord</span><span>xiaomoL444 · Replies may be slow</span>
      </a>
    `
  }
}

// https://vitepress.dev/reference/site-config
export default withSidebar({
  title: "千星奇域演出模版wiki",
  description: "千星奇域演出模版wiki",
  themeConfig: {
    nav: createNav('root'),
    socialLinks: [
      {
        icon: {
          svg: `<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <style>
              html:not(.dark) .asset-store-icon-dark,
              html.dark .asset-store-icon-light { display: none; }
            </style>
            <image class="asset-store-icon-light" href="/asset-store-light.ico" width="24" height="24" />
            <image class="asset-store-icon-dark" href="/asset-store-dark.png" width="24" height="24" />
          </svg>`
        },
        link: 'https://act.mihoyo.com/ys/prod/ugc/component-store/index.html#/item/1992801772275511296',
        ariaLabel: '千星奇域资产中心'
      }
    ],
    
    search: {
      provider: 'local'
    },
    
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    footer: createFooter('推荐的联系方式')
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh'
    },
    en: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: createNav('en'),
        footer: createFooter('Recommended contact method')
      }
    }
  }
} satisfies UserConfig<DefaultTheme.Config>, versionSidebars)

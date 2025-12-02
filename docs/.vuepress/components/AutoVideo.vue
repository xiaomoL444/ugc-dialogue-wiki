<!-- docs/.vuepress/components/AutoVideo.vue -->
<template>
  <video
    :src="src"
    autoplay
    muted
    loop
    playsinline
    style="width: 100%; border-radius: 8px;"
    controls
  ></video>
</template>

<script setup>
defineProps({ src: String })
</script>

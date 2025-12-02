<!-- .vuepress/components/MyComponent.vue -->
<template>
  <div class="my-component">
    这是我的组件
  </div>
</template>

<script setup>
defineProps({
  msg: {
    type: String,
    default: '默认消息'
  }
})
</script>

<style scoped>
.my-component {
  color: red;
}
</style>

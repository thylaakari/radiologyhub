<template>
  <!-- <nuxt-loading-indicator></nuxt-loading-indicator> -->
  <nuxt-layout>
    <nuxt-page></nuxt-page>
  </nuxt-layout>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      textContent: './node_modules/preline/dist/preline.js',
      tagPosition: 'bodyClose',
    },
  ],
})
</script>

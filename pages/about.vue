<template>
  <main class="container lg:w-2/3 mx-auto px-4 py-16">
    <content-doc class="prose mx-auto"></content-doc>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'main',
})

useHead({
  title: 'О нас',
})
</script>

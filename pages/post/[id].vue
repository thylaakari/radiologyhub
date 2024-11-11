<template>
  <main class="container lg:w-2/3 mx-auto px-4 py-16">
    <content-doc class="prose mx-auto" :path="'/about'"></content-doc>
    <!-- <ContentRenderer :value="data" /> -->
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'main',
})
// const { data } = await useAsyncData('post', () =>
//   queryContent('/about').findOne()
// )
// console.log(data)
</script>

<script setup>
const title = ref('Интерактивный портал по классической рентгенологии')
const description = ref(
  'Русский интернет-портал для рентгенологов, где собраны различные статьи, кейсы, разборы случаев, а также интерактивные курсы'
)

useHead({
  titleTemplate: (titleChunk) =>
    titleChunk ? `${titleChunk} - ${title.value}` : title.value,
  meta: [
    {
      name: 'description',
      content: description,
    },
  ],
})

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: '/public/blacklogo.svg',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <nuxt-loading-indicator></nuxt-loading-indicator>
  <nuxt-layout>
    <nuxt-page></nuxt-page>
  </nuxt-layout>
</template>

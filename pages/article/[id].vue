<template>
  <main class="container lg:w-2/3 mx-auto px-4 py-16">
    <h2 class="text-4xl font-extrabold mb-10">{{ data[0].title }}</h2>
    <MDC :value="data[0].text" tag="article" class="prose mx-auto" />
  </main>
</template>

<script setup>
const route = useRoute()
definePageMeta({
  layout: 'main',
})

useHead({
  title: route.path,
})

const supabase = useSupabaseClient()
const { data } = await supabase
  .from('articles')
  .select()
  .eq('id', route.params.id)
</script>

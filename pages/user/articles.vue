<script setup>
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})

const supabase = useSupabaseClient()
const {
  data: { user },
} = await supabase.auth.getUser()
</script>

<template>
  <div class="prose inline-flex gap-4">
    <h2>Статьи</h2>
    <nuxt-link
      to="/user/create"
      type="button"
      class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-teal-500 text-teal-500 hover:border-teal-400 hover:text-teal-400 focus:outline-none focus:border-teal-400 focus:text-teal-400 disabled:opacity-50 disabled:pointer-events-none no-underline"
    >
      Написать статью
    </nuxt-link>
  </div>
  <div class="w-full lg:w-1/2 grid gap-6">
    <div>
      <app-articles-filter></app-articles-filter>
    </div>
    <app-article-card></app-article-card>
    <app-article-card></app-article-card>
    <app-article-card></app-article-card>
    <app-article-card></app-article-card>
    <app-article-card></app-article-card>
    <app-article-card></app-article-card>
  </div>
</template>

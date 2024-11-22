<script setup lang="ts">
definePageMeta({
  layout: 'main',
})

useHead({
  title: 'Статьи',
})

const supabase = useSupabaseClient()
const { data, error } = await supabase
  .from('articles')
  .select()
  .range(0, 10)
  .order('id', { ascending: false })
console.log(data)
</script>

<template>
  <app-articles-filter></app-articles-filter>
  <section class="container lg:w-2/3 xl:w-1/2 mx-auto grid gap-8 pb-10 px-4">
    <app-article-card v-for="article in data" :article="article" />
  </section>
  <section class="container mx-auto pb-10">
    <nav
      class="flex justify-between items-center gap-x-1"
      aria-label="Pagination"
    >
      <button
        type="button"
        class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        aria-label="Previous"
      >
        <svg
          class="shrink-0 size-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m15 18-6-6 6-6"></path>
        </svg>
        <span aria-hidden="true" class="hidden sm:block">Previous</span>
      </button>
      <div class="flex items-center gap-x-1">
        <button
          type="button"
          class="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 py-2 px-3 rounded-lg focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:focus:bg-white/10"
          aria-current="page"
        >
          1
        </button>
        <button
          type="button"
          class="min-h-[38px] min-w-[38px] flex justify-center items-center border border-transparent text-gray-800 hover:bg-gray-100 py-2 px-3 rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          2
        </button>
        <button
          type="button"
          class="min-h-[38px] min-w-[38px] flex justify-center items-center border border-transparent text-gray-800 hover:bg-gray-100 py-2 px-3 rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          3
        </button>
      </div>
      <button
        type="button"
        class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
      >
        <span aria-hidden="true" class="hidden sm:block">Next</span>
        <svg
          class="shrink-0 size-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </button>
    </nav>
  </section>
</template>

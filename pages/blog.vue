<script setup>
definePageMeta({
  layout: 'main',
})

useHead({
  title: 'Новости',
})

const supabase = useSupabaseClient()
const { data, error } = await supabase
  .from('blog')
  .select()
  .order('id', { ascending: false })
</script>

<template>
  <section class="container mx-auto px-4 py-10 lg:w-1/2">
    <h2 class="text-4xl font-extrabold mb-10">Блог</h2>
    <nuxt-link v-for="post in data" :to="`/post/${post.id}`">
      <div class="flex gap-x-3 hover:bg-sky-100 cursor-pointer rounded-lg">
        <div
          class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200"
        >
          <div class="relative z-10 size-7 flex justify-center items-center">
            <div class="size-2 rounded-full bg-gray-400"></div>
          </div>
        </div>

        <div class="grow pt-0.5 pb-8">
          <h3 class="flex gap-x-1.5 font-semibold text-gray-800">
            <svg
              class="shrink-0 size-4 mt-1"
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
              <path
                d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
              ></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" x2="8" y1="13" y2="13"></line>
              <line x1="16" x2="8" y1="17" y2="17"></line>
              <line x1="10" x2="8" y1="9" y2="9"></line>
            </svg>
            {{ post.title }}
          </h3>
          <p class="mt-1 text-sm text-gray-600">
            {{ post.description }}
          </p>
          <button
            type="button"
            class="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
          >
            <img
              class="shrink-0 size-4 rounded-full"
              :src="post.author_avatar"
              alt="Avatar"
            />
            {{ post.author }}
          </button>
        </div>
      </div>
    </nuxt-link>
  </section>
</template>

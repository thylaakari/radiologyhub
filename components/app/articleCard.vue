<script setup lang="ts">
defineProps<{
  article: any
}>()
</script>

<template>
  <nuxt-link :to="`/article/${article.id}`" class="cursor-pointer">
    <article
      class="rounded-xl bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 p-0.5 shadow-md hover:shadow-lg transition"
    >
      <div class="rounded-[10px] bg-white p-4 sm:p-6">
        <div class="flex items-center">
          <span class="text-xs text-gray-500">{{
            new Date(article.created_at).toLocaleDateString()
          }}</span>
        </div>
        <nuxt-link to=""
          ><h3 class="mt-0.5 text-lg font-medium text-gray-900">
            {{ article.title }}
            &rarr;
          </h3></nuxt-link
        >
        <div class="my-4 flex flex-wrap gap-1">
          <span
            class="whitespace-nowrap rounded-full bg-sky-500 px-2.5 py-0.5 text-xs text-white"
            >{{ article.tags }}</span
          >
        </div>
        <div class="shrink-0 group block">
          <div class="flex items-center">
            <img
              class="inline-block shrink-0 size-8 rounded-full"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Avatar"
            />
            <div class="ms-3">
              <h3 class="font-medium text-md text-gray-800">
                {{ article.author }}
              </h3>
              <p class="text-sm font-light text-gray-400 dark:text-neutral-500">
                {{ article.author_email }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  </nuxt-link>
</template>

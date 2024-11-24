<script setup lang="ts">
defineProps<{
  post: any
}>()
</script>

<template>
  <div>
    <p class="mb-2 text-xs text-gray-500">{{ post.created_at }}</p>
    <h3 class="font-bold text-sky-500">{{ post.title }}</h3>
    <p class="mt-1 text-sm text-gray-500">{{ post.description }}</p>
    <p class="mt-1">
      <nuxt-link
        class="text-sm text-gray-500 underline hover:text-gray-800 hover:decoration-2 hover:decoration-sky-500 focus:outline-none focus:decoration-2"
        :to="`/post/${post.id}`"
      >
        Читать &rarr;
      </nuxt-link>
    </p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})

const user = useSupabaseUser()
const supabase = useSupabaseClient()

async function publishPost() {
  try {
    const { data, error } = await supabase.from('blog').insert({
      text: article.value,
      title: title.value,
      description: desc.value,
      author: user.value?.user_metadata.name || 'Нет автора',
      author_avatar: user.value?.user_metadata.picture || 'Нет email',
    })
  } catch (error) {
    console.error('Failed to publish post:', error)
  }
}

const tags = ref([])
const title = ref('Заголовок')
const desc = ref('Описание')
const article = ref(`## Пост...`)
</script>

<template>
  <div class="w-full grid lg:grid-cols-2 gap-20">
    <section>
      <div class="prose mb-8">
        <h2>Новый пост</h2>
      </div>
      <div class="space-y-3 mb-4">
        <input
          type="text"
          class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="Заголовок"
          v-model="title"
        />
      </div>

      <div class="space-y-3 mb-4">
        <input
          type="text"
          class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="Краткое описание"
          v-model="desc"
        />
      </div>

      <div class="h-96">
        <textarea
          class="py-3 px-4 block h-full w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          rows="3"
          placeholder="This is a textarea placeholder"
          v-model="article"
        ></textarea>
      </div>
    </section>
    <div class="prose">
      <div class="prose-h1">
        <h1>{{ title }}</h1>
      </div>
      <div class="prose">
        <p>{{ desc }}</p>
      </div>
      <MDC :value="article" tag="article" />
      <hr class="border-b-2 border-red-500" />
      <button
        type="button"
        class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 focus:outline-none focus:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none"
        @click="publishPost"
      >
        Опубликовать
      </button>
    </div>
  </div>
</template>

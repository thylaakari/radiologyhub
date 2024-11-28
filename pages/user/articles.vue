<script setup>
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})

const supabase = useSupabaseClient()
const articles = await supabase
  .from('articles')
  .select()
  .range(0, 10)
  .order('id', { ascending: false })
  .eq('published', false)

const article = ref('')
async function openArticle(id) {
  const { data, error } = await supabase.from('articles').select().eq('id', id)
  article.value = data[0]
}

async function publishArticle(id) {
  const { data, error } = await supabase
    .from('articles')
    .update({ published: true })
    .eq('id', id)
  window.location.reload(true)
}
</script>

<template>
  <div class="prose">
    <h2>Статьи на проверку</h2>
  </div>
  <div class="grid lg:grid-cols-2 gap-8">
    <div class="grid gap-4">
      <app-article-card
        :article="article"
        v-for="article in articles.data"
        :key="article.id"
        :checked="false"
        @click="openArticle(article.id)"
      />
    </div>
    <div v-if="article !== ''" class="prose">
      <h2>{{ article.title }}</h2>
      <MDC :value="article.text" tag="article" />
      <button
        type="button"
        class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 focus:outline-none focus:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none"
        @click="publishArticle(article.id)"
      >
        Опубликовать
      </button>
    </div>
  </div>
</template>

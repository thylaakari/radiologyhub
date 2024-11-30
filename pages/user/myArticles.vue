<script setup>
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})
const user = useSupabaseUser()
const supabase = useSupabaseClient()

const articles = ref([])

onMounted(async () => {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select()
      .order('id', { ascending: false })
      .eq('author_email', user.value.email)
    articles.value = data
  } catch (error) {
    console.error(error)
  }
})
const article = ref('')
async function openArticle(id) {
  const { data, error } = await supabase.from('articles').select().eq('id', id)
  article.value = data[0]
}
</script>

<template>
  <div class="prose">
    <h2>Мои статьи</h2>
  </div>
  <div class="grid lg:grid-cols-2 gap-8">
    <div class="grid gap-4">
      <app-article-card
        :article="articles"
        v-for="articles in articles"
        :key="articles.id"
        :all="true"
        @click="openArticle(articles.id)"
      />
    </div>
    <div v-if="article !== ''" class="prose">
      <h2>{{ article.title }}</h2>
      <MDC :value="article.text" tag="article" />
    </div>
  </div>
</template>

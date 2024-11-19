<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})

const file = ref<File | null>(null)
const link = ref<string | null>(null)
function onFileChanged(event: Event): void {
  const target = event.target as HTMLInputElement
  if (target && target.files && target.files[0]) {
    file.value = target.files[0]
  }
}
const supabase = useSupabaseClient()
async function uploadFile(file: File | null) {
  try {
    if (!file) {
      console.error('Файл не выбран')
      return
    }

    const fileName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`

    const { data, error } = await supabase.storage
      .from('articleimages')
      .upload(fileName, file)
    link.value =
      'https://pkcsfruhvmsbpzbobeog.supabase.co/storage/v1/object/public/' +
      data?.fullPath
    if (error) throw error

    return data
  } catch (error) {
    console.error('Failed to upload file:', error)
  }
}

const article = ref(`# wqr`)
</script>

<template>
  <div class="w-full grid lg:grid-cols-2 gap-20">
    <section>
      <div class="mb-8">
        <h2>Вставьте статью</h2>
        <p>в формате .md</p>
      </div>
      <form class="mb-8">
        <div>
          <label for="file-input">Загрузить изображение</label>
          <input
            type="file"
            name="file-input"
            id="file-input"
            class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4"
            @change="onFileChanged($event)"
          />
        </div>
        <button
          type="button"
          class="h-10 mt-2 px-2 items-center text-sm rounded-lg border border-transparent bg-sky-500 text-white hover:bg-sky-600 focus:outline-none focus:bg-sky-600 disabled:opacity-50 disabled:pointer-events-none"
          @click="uploadFile(file)"
        >
          Получить ссылку
        </button>
        <p class="bg-gray-200 p-2 border rounded-lg mt-2 text-gray-700">
          {{ link }}
        </p>
      </form>
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
      <MDC :value="article" tag="article" />
      <hr class="border-b-2 border-red-500" />
      <button
        type="button"
        class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 focus:outline-none focus:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none"
      >
        Опубликовать
      </button>
    </div>
  </div>
</template>

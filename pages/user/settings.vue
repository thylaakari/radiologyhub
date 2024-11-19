<script setup>
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})

const custom_name = ref('')
const supabase = useSupabaseClient()
const {
  data: { user },
} = await supabase.auth.getUser()

const isChangeNameSuccess = ref(false)
async function changeName() {
  try {
    const { data, error } = await supabase.auth.updateUser({
      data: {
        custom_name: document.getElementById('name').value,
      },
    })
    user.user_metadata.custom_name = document.getElementById('name').value
    isChangeNameSuccess.value = true
    setTimeout(() => {
      isChangeNameSuccess.value = false
    }, 4000)
    if (error) {
      throw error
    }
  } catch (error) {
    console.error('Failed to update name:', error)
  }
}

async function changeEmail() {
  try {
    const { data, error } = await supabase.auth.updateUser({
      data: {
        name: document.getElementById('email').value,
      },
    })
    if (error) {
      throw error
    }
  } catch (error) {
    console.error('Failed to update email:', error)
  }
}
</script>

<template>
  <div class="prose">
    <h2>Настройки</h2>
  </div>
  <div>
    <img
      class="inline-block size-[62px] rounded-full"
      :src="user.user_metadata.avatar_url"
      alt="Avatar"
    />
  </div>
  <div class="w-full lg:w-1/2">
    <div class="flex rounded-lg shadow-sm">
      <input
        type="email"
        id="email"
        name="email"
        class="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-0 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
        placeholder="e-mail"
        :value="user.email"
        disabled
      />
    </div>
  </div>

  <div class="w-full lg:w-1/2">
    <div
      class="mb-2 bg-teal-500 text-sm text-white rounded-lg p-4 transition duration-300"
      role="alert"
      tabindex="-1"
      v-if="isChangeNameSuccess"
    >
      <span id="hs-solid-color-success-label" class="font-bold">Отлично!</span>
      Имя изменено
    </div>
    <div class="flex rounded-lg shadow-sm">
      <input
        type="text"
        id="name"
        name="name"
        class="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-0 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
        placeholder="Имя"
        :value="user.user_metadata.custom_name"
      />
      <button
        type="button"
        class="px-4 h-[2.875rem] shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        @click="changeName"
      >
        Изменить
      </button>
    </div>
  </div>
</template>

<script setup>
const isOpen = ref(false)

const client = useSupabaseClient()
const user = ref(null)
try {
  const response = await client.auth.getUser()
  user.value = response.data.user
} catch (error) {
  console.error('Failed to fetch user:', error)
}
</script>

<template>
  <nav
    class="w-full mx-auto py-6 px-4 flex flex-wrap items-center justify-between container"
  >
    <nuxt-link to="/">
      <app-logo
        class="h-12 fill-white hover:fill-blue-400 transition-colors duration-900"
      ></app-logo>
    </nuxt-link>
    <div class="md:order-3 flex items-center gap-x-2">
      <button
        class="md:hidden relative size-10 flex justify-center items-center gap-x-2 rounded-lg text-white shadow-sm"
        @click="isOpen = !isOpen"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 transition-opacity"
          v-if="!isOpen"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 transition-opacity"
          v-if="isOpen"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <div
      class="basis-full grow md:grow-0 md:basis-auto md:block md:order-2"
      :class="{ hidden: !isOpen }"
      @click="isOpen = !isOpen"
    >
      <div
        class="flex flex-col gap-x-16 gap-y-6 mt-5 md:flex-row md:items-center md:mt-0 md:ps-5"
      >
        <nuxt-link
          to="/articles"
          class="text-gray-200 hover:text-blue-400 transition-colors duration-900"
          >Статьи</nuxt-link
        >
        <!-- <nuxt-link
          to="/"
          class="text-gray-200 hover:text-blue-400 transition-colors duration-900"
          >Курсы</nuxt-link
        > -->
        <nuxt-link
          to="/blog"
          class="text-gray-200 hover:text-blue-400 transition-colors duration-900"
          >Блог</nuxt-link
        >
        <nuxt-link
          to="/feedback"
          class="text-gray-200 hover:text-blue-400 transition-colors duration-900"
          >Связаться с нами</nuxt-link
        >

        <!-- <nuxt-link
          :to="user ? '/dashboard' : '/signin'"
          class="text-gray-200 hover:text-blue-400 transition-colors duration-900 block"
          >{{ user ? user.email : 'Личный кабинет' }} &rarr;</nuxt-link
        > -->
      </div>
    </div>
  </nav>
</template>

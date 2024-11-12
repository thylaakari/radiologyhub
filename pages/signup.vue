<template>
  <main
    class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5"
  >
    <div class="w-full">
      <h1 class="text-2xl font-semibold text-gray-800">
        Зарегистрируйтесь сейчас
      </h1>

      <p class="mt-4 text-gray-500 dark:text-gray-400">
        Получите доступ к бесплатным статьям, курсам, а также достижениям!
      </p>

      <form class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
        <div>
          <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
            >Имя</label
          >
          <input
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div>
          <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
            >Email</label
          >
          <input
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div>
          <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
            >Пароль</label
          >
          <input
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div>
          <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
            >Подтвердите пароль</label
          >
          <input
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <button
          class="p-3 md:py-2 md:px-4 my-4 w-full lg:text-lg font-light rounded-lg bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 hover:bg-gradient-to-r hover:from-blue-600 hover:via-pink-600 hover:to-red-600 focus:outline-none focus:ring focus:ring-sky-500 text-white flex items-center justify-between"
        >
          <span class="text-md">Создать аккаунт</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 rtl:-scale-x-100"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </form>
      <hr class="border-1 my-4 border-gray-200" />
      <router-link
        to="/"
        class="flex items-center justify-between w-full px-6 py-3 text-sm text-gray-600 rounded-lg"
      >
        <span>Вернуться на главную</span>
      </router-link>
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'sign',
})
</script>

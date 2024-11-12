<template>
  <main
    class="w-full max-w-sm p-6 m-auto mx-auto bg-white h-screen content-center"
  >
    <div class="flex justify-center mx-auto">
      <app-logo></app-logo>
    </div>

    <form class="mt-6">
      <div>
        <label for="username" class="block text-sm text-gray-800">Логин</label>
        <input
          type="text"
          class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>

      <div class="mt-4">
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm text-gray-800"
            >Пароль</label
          >
          <a
            href="#"
            class="text-xs text-gray-600 dark:text-gray-400 hover:underline"
            >Забыли пароль?</a
          >
        </div>

        <input
          type="password"
          class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>

      <div class="mt-6">
        <button
          class="p-3 md:py-2 md:px-4 my-4 w-full text-md lg:text-lg font-light rounded-lg bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 hover:bg-gradient-to-r hover:from-blue-600 hover:via-pink-600 hover:to-red-600 focus:outline-none focus:ring focus:ring-sky-500 text-white"
        >
          Войти
        </button>
      </div>
    </form>

    <div class="flex items-center justify-between mt-4"></div>
    <div
      class="flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600"
    >
      или
    </div>
    <div class="flex items-center mt-6 -mx-2">
      <button
        type="button"
        class="py-2.5 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
      >
        <svg
          class="shrink-0 size-4"
          width="33"
          height="32"
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_4132_5805adfqfqdq121)">
            <path
              d="M32.2566 16.36C32.2566 15.04 32.1567 14.08 31.9171 13.08H16.9166V19.02H25.7251C25.5454 20.5 24.5866 22.72 22.4494 24.22L22.4294 24.42L27.1633 28.1L27.4828 28.14C30.5189 25.34 32.2566 21.22 32.2566 16.36Z"
              fill="#4285F4"
            ></path>
            <path
              d="M16.9166 32C21.231 32 24.8463 30.58 27.5028 28.12L22.4694 24.2C21.1111 25.14 19.3135 25.8 16.9366 25.8C12.7021 25.8 9.12677 23 7.84844 19.16L7.66867 19.18L2.71513 23L2.65521 23.18C5.2718 28.4 10.6648 32 16.9166 32Z"
              fill="#34A853"
            ></path>
            <path
              d="M7.82845 19.16C7.48889 18.16 7.28915 17.1 7.28915 16C7.28915 14.9 7.48889 13.84 7.80848 12.84V12.62L2.81499 8.73999L2.6552 8.81999C1.55663 10.98 0.937439 13.42 0.937439 16C0.937439 18.58 1.55663 21.02 2.63522 23.18L7.82845 19.16Z"
              fill="#FBBC05"
            ></path>
            <path
              d="M16.9166 6.18C19.9127 6.18 21.9501 7.48 23.0886 8.56L27.6027 4.16C24.8263 1.58 21.231 0 16.9166 0C10.6648 0 5.27181 3.6 2.63525 8.82L7.80851 12.84C9.10681 8.98 12.6821 6.18 16.9166 6.18Z"
              fill="#EB4335"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_4132_5805adfqfqdq121">
              <rect
                width="32"
                height="32"
                fill="white"
                transform="translate(0.937439)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
        Войти с Google
      </button>
    </div>

    <p class="mt-8 text-xs font-light text-center text-gray-400">
      Нет аккаунта?
      <router-link
        to="/signup"
        class="font-medium text-gray-700 hover:underline"
        >Создать</router-link
      >
    </p>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'sign',
})
</script>

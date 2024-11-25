<script setup>
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})
</script>

<template>
  <!-- Card Section -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Grid -->
    <div
      class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6"
    >
      <!-- Card -->
      <nuxt-link
        class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
        to="/user/create"
      >
        <div class="p-4 md:p-5">
          <div class="flex justify-between items-center gap-x-3">
            <div class="grow">
              <h3
                class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200"
              >
                Статьи
              </h3>
              <p class="text-sm text-gray-500 dark:text-neutral-500">
                Написать статью
              </p>
            </div>
            <div>
              <svg
                class="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </div>
        </div>
      </nuxt-link>
      <!-- End Card -->

      <!-- Card -->
      <nuxt-link
        class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
        to="/user/createPost"
      >
        <div class="p-4 md:p-5">
          <div class="flex justify-between items-center gap-x-3">
            <div class="grow">
              <h3
                class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200"
              >
                Блог
              </h3>
              <p class="text-sm text-gray-500 dark:text-neutral-500">
                Добавить пост
              </p>
            </div>
            <div>
              <svg
                class="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </div>
        </div>
      </nuxt-link>
      <!-- End Card -->
    </div>
    <!-- End Grid -->
  </div>
  <!-- End Card Section -->
</template>

<template>
  <section class="container mx-auto px-4 py-10 lg:w-1/2">
    <h2 class="text-4xl font-extrabold mb-10">Блог</h2>
    <div class="ps-2 my-2 first:mt-0">
      <h3 class="text-xs font-medium uppercase text-gray-500">1 Aug, 2023</h3>
    </div>
    <nuxt-link to="/post/1488">
      <div class="flex gap-x-3 hover:bg-sky-100 cursor-pointer rounded-lg">
        <div
          class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200"
        >
          <div class="relative z-10 size-7 flex justify-center items-center">
            <div class="size-2 rounded-full bg-gray-400"></div>
          </div>
        </div>

        <div class="grow pt-0.5 pb-8">
          <h3 class="flex gap-x-1.5 font-semibold text-gray-800">
            <svg
              class="shrink-0 size-4 mt-1"
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
              <path
                d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
              ></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" x2="8" y1="13" y2="13"></line>
              <line x1="16" x2="8" y1="17" y2="17"></line>
              <line x1="10" x2="8" y1="9" y2="9"></line>
            </svg>
            Created "Preline in React" task
          </h3>
          <p class="mt-1 text-sm text-gray-600">
            Find more detailed insctructions here.
          </p>
          <button
            type="button"
            class="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
          >
            <img
              class="shrink-0 size-4 rounded-full"
              src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
              alt="Avatar"
            />
            James Collins
          </button>
        </div>
      </div>
    </nuxt-link>
    <div class="flex gap-x-3">
      <div
        class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200"
      >
        <div class="relative z-10 size-7 flex justify-center items-center">
          <div class="size-2 rounded-full bg-gray-400"></div>
        </div>
      </div>
      <div class="grow pt-0.5 pb-8">
        <h3 class="flex gap-x-1.5 font-semibold text-gray-800">
          Release v5.2.0 quick bug fix 🐞
        </h3>
        <button
          type="button"
          class="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-10"
        >
          <span
            class="flex shrink-0 justify-center items-center size-4 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full"
          >
            A
          </span>
          Alex Gregarov
        </button>
      </div>
    </div>

    <div class="flex gap-x-3">
      <div
        class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200"
      >
        <div class="relative z-10 size-7 flex justify-center items-center">
          <div class="size-2 rounded-full bg-gray-400"></div>
        </div>
      </div>

      <div class="grow pt-0.5 pb-8">
        <h3 class="flex gap-x-1.5 font-semibold text-gray-800">
          Marked "Install Charts" completed
        </h3>
        <p class="mt-1 text-sm text-gray-600">
          Finally! You can check it out here.
        </p>
        <button
          type="button"
          class="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
        >
          <img
            class="shrink-0 size-4 rounded-full"
            src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
            alt="Avatar"
          />
          James Collins
        </button>
      </div>
    </div>

    <div class="ps-2 my-2 first:mt-0">
      <h3 class="text-xs font-medium uppercase text-gray-500">31 Jul, 2023</h3>
    </div>

    <div class="flex gap-x-3">
      <div
        class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200"
      >
        <div class="relative z-10 size-7 flex justify-center items-center">
          <div class="size-2 rounded-full bg-gray-400"></div>
        </div>
      </div>

      <div class="grow pt-0.5 pb-8">
        <h3 class="flex gap-x-1.5 font-semibold text-gray-800">
          Take a break ⛳️
        </h3>
        <p class="mt-1 text-sm text-gray-600">Just chill for now... 😉</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'main',
})

useHead({
  title: 'Новости проекта',
})
</script>

<template>
  <section
    class="container mx-auto py-10 flex justify-between flex-wrap gap-4 px-4"
  >
    <!-- Name -->
    <input
      type="text"
      class="py-3 px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
      placeholder="Название"
    />

    <!-- Select tags -->
    <select
      class="py-3 px-4 pe-9 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
    >
      <option selected="">Тэги</option>
      <option>Рентген</option>
      <option>Искусственный интеллект</option>
      <option>Скопия</option>
    </select>

    <!-- Select author -->
    <select
      class="py-3 px-4 pe-9 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
    >
      <option selected="">Аффтор</option>
      <option>Нахой Ненуджон</option>
      <option>Перевод</option>
      <option>Жэкич Федорыч</option>
    </select>

    <!-- Filter btn -->
    <button
      type="button"
      class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-blue-500 text-white shadow-sm hover:bg-blue-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
        />
      </svg>

      Найти
    </button>
  </section>
</template>

<template>
  <!-- First screen -->
  <header
    class="bg-gradient-to-br from-stone-700 to-black text-white lg:h-screen w-full flex flex-col"
  >
    <app-navbar></app-navbar>
    <main
      class="h-full container my-10 mx-auto lg:grid lg:grid-cols-3 content-center gap-10"
    >
      <!-- Интро -->
      <div class="lg:grid lg:grid-col lg:gap-6 lg:col-span-2">
        <h1
          class="text-3xl text-center lg:text-left md:text-6xl lg:text-7xl font-black drop-shadow-lg mb-10"
        >
          Интерактивный портал по
          <span
            class="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 underline decoration-solid decoration-sky-500"
            >классической</span
          >
          рентгенологии
        </h1>
        <h2
          class="md:text-xl lg:text-2xl text-center lg:text-left mb-10 font-light text-slate-200"
        >
          Курсы, статьи, разборы случаев, понятные видеуроки для начинающих
          рентгенологов
        </h2>
      </div>

      <!-- Форма на главной -->
      <div
        class="flex flex-col bg-white rounded-xl bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 p-0.5 mx-2 sm:mx-0"
      >
        <div class="bg-white rounded-t-[10px] p-3 mb-0">
          <h2 class="mt-1 md:text-xl lg:text-2xl text-center text-gray-500">
            Зарегистрируйтесь, чтобы комментировать статьи, участвовать в
            разборе кейсов, просматривать видеокурсы
          </h2>
        </div>
        <div class="p-3 pt-0 md:pt-4 mt-0 bg-white h-full rounded-b-[10px]">
          <div class="relative">
            <input
              type="text"
              placeholder="email@yandex.ru"
              class="py-3 px-4 ps-14 block w-full border-gray-200 shadow-sm rounded-lg text-md md:text-lg focus:z-10 focus:border-sky-500 focus:ring-sky-500 disabled:opacity-50 disabled:pointer-events-none placeholder:text-gray-400 font-extralight text-gray-900"
            />
            <div
              class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                class="h-6 stroke-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </div>
          </div>
          <button
            class="p-3 md:py-3 md:px-4 my-4 w-full text-md lg:text-lg font-light rounded-lg bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 hover:bg-gradient-to-r hover:from-blue-600 hover:via-pink-600 hover:to-red-600 focus:outline-none focus:ring focus:ring-sky-500 text-white"
          >
            Зарегистрироваться
          </button>
          <span class="text-sm text-gray-500 dark:text-neutral-400"
            >Нажимая кнопку, я даю свое согласие на
            <nuxt-link class="text-sky-500 hover:underline cursor-pointer"
              >обработку персональных данных</nuxt-link
            ></span
          >
        </div>
      </div>
    </main>
  </header>

  <!-- Last articles -->
  <section class="container mx-auto pt-10 pb-20">
    <h2 class="text-center text-3xl font-bold pb-10">
      Последние статьи &mdash;
      <nuxt-link
        to="/articles"
        class="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 hover:underline cursor-pointer decoration-solid decoration-sky-500"
        >Все статьи &rarr;</nuxt-link
      >
    </h2>
    <section
      class="grid grid-col md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2 sm:mx-0"
    >
      <app-article-card></app-article-card>
      <app-article-card></app-article-card>
      <app-article-card></app-article-card>
    </section>
  </section>

  <!-- Last courses -->
  <!-- <section class="bg-sky-100 pt-10 pb-20">
    <section class="container mx-auto">
      <h2 class="text-center text-3xl font-bold pb-10">
        Популярные курсы &mdash;
        <nuxt-link
          to=""
          class="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 hover:underline cursor-pointer decoration-solid decoration-sky-500"
          >Все курсы &rarr;</nuxt-link
        >
      </h2>
      <section class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2 sm:mx-0">
        <nuxt-link to="" class="cursor-pointer">
          <app-course-card></app-course-card>
        </nuxt-link>
        <nuxt-link to="" class="cursor-pointer">
          <app-course-card></app-course-card>
        </nuxt-link>
        <nuxt-link to="" class="cursor-pointer">
          <app-course-card></app-course-card>
        </nuxt-link>
      </section>
    </section>
  </section> -->

  <hr class="border-blue-500 border-2 shadow-sm" />

  <!-- Features -->
  <section class="px-4 py-10">
    <div
      class="container mx-auto grid gap-4 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8"
    >
      <!-- Stats -->
      <div class="text-center">
        <h4 class="text-lg font-semibold text-gray-800">Статей</h4>
        <p class="mt-2 sm:mt-3 text-6xl font-bold text-blue-500">1488</p>
        <p class="mt-1 text-gray-500 hidden sm:block">в бесплатном доступе</p>
      </div>

      <!-- Stats -->
      <div class="text-center">
        <h4 class="text-lg font-semibold text-gray-800">Пользователей</h4>
        <p class="mt-2 sm:mt-3 text-6xl font-bold text-pink-500">322</p>
        <p class="mt-1 text-gray-500 hidden sm:block">прошли наши курсы</p>
      </div>

      <!-- Stats -->
      <div class="text-center">
        <h4 class="text-lg font-semibold text-gray-800">
          Средняя оценка курсов
        </h4>
        <p class="mt-2 sm:mt-3 text-6xl font-bold text-red-500">9,7</p>
        <p class="mt-1 text-gray-500 hidden sm:block">из 10</p>
      </div>
    </div>
  </section>

  <hr class="border-blue-500 border-2 shadow-sm" />

  <!-- Blog -->
  <section class="container mx-auto px-4 py-10">
    <h2 class="text-center text-3xl font-bold pb-10">
      Новости &mdash;
      <nuxt-link
        to="/blog"
        class="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 hover:underline cursor-pointer decoration-solid decoration-sky-500"
        >Все новости &rarr;</nuxt-link
      >
    </h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <app-news-card></app-news-card>
      <app-news-card></app-news-card>
      <app-news-card></app-news-card>
      <app-news-card></app-news-card>
      <app-news-card></app-news-card>
      <app-news-card></app-news-card>
    </div>
  </section>

  <app-footer></app-footer>
</template>

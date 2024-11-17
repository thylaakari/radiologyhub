<script setup>
definePageMeta({
  layout: 'main',
})

const isLoading = ref(false)
</script>

<template>
  <section
    class="container mx-auto py-10 grid lg:grid-cols-2 justify-between gap-8 px-4"
  >
    <div class="prose">
      <h2>Связаться с нами</h2>
      <form>
        <div class="flex items-center">
          <input
            type="email"
            name="email"
            placeholder="Email"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div class="flex items-center mt-4">
          <textarea
            class="block w-full py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Жалоба, пожелание, предложение"
          ></textarea>
        </div>

        <div class="md:flex md:items-center">
          <button
            class="flex items-center justify-center p-3 md:py-3 md:px-4 my-4 w-full text-md lg:text-lg font-light rounded-lg bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 hover:bg-gradient-to-r hover:from-blue-600 hover:via-pink-600 hover:to-red-600 focus:outline-none focus:ring focus:ring-sky-500 text-white disabled:opacity-50 disabled:pointer-events-none"
            :disabled="isLoading"
          >
            <span
              class="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full mr-4"
            ></span>
            Отправить
          </button>
        </div>
      </form>
      <section class="prose mt-10">
        <h2>Наши контакты</h2>

        <p class="italic flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-mail"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
            />
            <path d="M3 7l9 6l9 -6" />
          </svg>
          <a
            href="mailto: radiologyhub@yandex.ru"
            class="hover:text-sky-500 transition-colors duration-200"
            >radiologyhub@yandex.ru</a
          >
        </p>
        <p class="italic flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-brand-vk"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M14 19h-4a8 8 0 0 1 -8 -8v-5h4v5a4 4 0 0 0 4 4h0v-9h4v4.5l.03 0a4.531 4.531 0 0 0 3.97 -4.496h4l-.342 1.711a6.858 6.858 0 0 1 -3.658 4.789h0a5.34 5.34 0 0 1 3.566 4.111l.434 2.389h0h-4a4.531 4.531 0 0 0 -3.97 -4.496v4.5z"
            />
          </svg>
          <a href="#" class="hover:text-sky-500 transition-colors duration-200"
            >radiologyhub</a
          >
        </p>
        <p class="italic flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
          </svg>
          <a href="#" class="hover:text-sky-500 transition-colors duration-200"
            >radiologyhub</a
          >
        </p>
      </section>
    </div>

    <section class="prose">
      <h2>О нас</h2>
      <p>
        Мы – команда рентгенологов с многолетним опытом и искренней любовью к
        своей профессии. Наша цель – делиться знаниями и вдохновлять новое
        поколение специалистов в области классической рентгенологии.
      </p>

      <p>
        Мы верим, что точность диагностики – это искусство, основанное на
        глубоких знаниях и внимательном взгляде. И именно поэтому мы стремимся
        создать доступные и понятные образовательные материалы для
        студентов-медиков, ординаторов и начинающих врачей.
      </p>

      <p>
        Наши курсы и материалы построены на принципах практичности и научной
        обоснованности. Мы делаем акцент на интерпретации рентгенологических
        данных, чтобы вы могли уверенно применять свои навыки в реальной
        клинической практике.
      </p>

      <p>
        Присоединяйтесь к нашему сообществу, где опыт встречается с энтузиазмом,
        а знания становятся вашим инструментом для спасения жизней. Вместе мы
        сделаем первый шаг к тому, чтобы рентгенология стала не только наукой,
        но и вашим призванием.
      </p>
    </section>
  </section>
</template>

<script setup lang="js">
import { Form, Field, ErrorMessage } from 'vee-validate'

const isSignedUp = ref(false)
const isLoading = ref(false)
const isShowedForm = ref(true)
const errorMsg = ref(null)
useHead({
  title: 'Главная страница',
})

const client = useSupabaseClient()

async function signup(values) {
  isLoading.value = true
  try {
    const { error } = await client.auth.signInWithOtp({
      email: values.email,
      options: {
        shouldCreateUser: true,
        emailRedirectTo: 'https://radiologyhub.netlify.app/dashboard',
      },
    })
    if (error) {
      throw error
    } else {
      isShowedForm.value = false
      isSignedUp.value = true
    }
  } catch (error) {
    isShowedForm.value = false
    errorMsg.value = error
  } finally {
    isLoading.value = false
  }
}

function validateEmail(value) {
  if (!value) return 'Введите e-mail'
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  if (!regex.test(value)) return 'Введите правильный e-mail'
  return true
}

const articles = await client
  .from('articles')
  .select()
  .range(0, 2)
  .order('id', { ascending: false })

const blog = await client
  .from('blog')
  .select()
  .range(0, 5)
  .order('id', { ascending: false })
</script>

<template>
  <!-- First screen -->
  <header
    class="text-white lg:h-screen w-full flex flex-col bg-[url('/public/bg_crop-min.png')] bg-fixed bg-no-repeat bg-left lg:bg-right bg-black"
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
      <Form
        @submit="signup"
        v-if="isShowedForm"
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
            <Field
              type="email"
              name="email"
              :rules="validateEmail"
              placeholder="email@yandex.ru"
              class="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-lg text-md md:text-lg focus:z-10 focus:border-sky-500 focus:ring-sky-500 disabled:opacity-50 disabled:pointer-events-none placeholder:text-gray-400 font-extralight text-gray-900"
            />
            <error-message name="email" class="text-red-500"></error-message>
          </div>
          <button
            class="flex items-center justify-center p-3 md:py-3 md:px-4 my-4 w-full text-md lg:text-lg font-light rounded-lg bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 hover:bg-gradient-to-r hover:from-blue-600 hover:via-pink-600 hover:to-red-600 focus:outline-none focus:ring focus:ring-sky-500 text-white disabled:opacity-50 disabled:pointer-events-none"
            :disabled="isLoading"
          >
            <span
              class="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full mr-4"
              v-if="isLoading"
            ></span>
            {{ isLoading ? 'Секунду' : 'Зарегистрироваться' }}
          </button>
          <span class="text-sm text-gray-500 dark:text-neutral-400"
            >Нажимая кнопку, я даю свое согласие на
            <nuxt-link class="text-sky-500 hover:underline cursor-pointer"
              >обработку персональных данных</nuxt-link
            ></span
          >
        </div>
      </Form>
      <div
        class="flex flex-col bg-white rounded-xl bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 p-0.5 mx-2 sm:mx-0"
        v-else
      >
        <div
          v-if="isSignedUp"
          class="bg-gradient-to-t from-green-200 to-white rounded-[10px] p-3 mb-0 h-full text-green-600"
        >
          <span id="hs-solid-color-success-label" class="font-bold"
            >Отлично!</span
          >
          Проверьте почту. Не забудьте посмотреть папку "Спам".
        </div>

        <div
          v-if="errorMsg"
          class="bg-gradient-to-t from-red-200 to-white rounded-[10px] p-3 mb-0 h-full text-red-600"
        >
          {{ errorMsg }}
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
      <app-article-card
        v-if="articles.data"
        :article="article"
        v-for="article in articles.data"
      />
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
      <app-news-card v-for="post in blog.data" :post="post" />
    </div>
  </section>

  <app-footer></app-footer>
</template>

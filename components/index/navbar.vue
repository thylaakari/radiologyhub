<template>
  <nav class="container mx-auto flex flex-wrap justify-between py-6">
    <nuxt-link to="/">
      <app-logo
        class="h-12 fill-white hover:fill-blue-400 transition-colors duration-900"
      ></app-logo>
    </nuxt-link>
    <div class="flex gap-x-16 items-center">
      <nuxt-link
        to="/"
        class="text-gray-200 hover:text-blue-400 transition-colors duration-900"
        >Статьи</nuxt-link
      >
      <nuxt-link
        to="/"
        class="text-gray-200 hover:text-blue-400 transition-colors duration-900"
        >Курсы</nuxt-link
      >
      <nuxt-link
        to="/"
        class="text-gray-200 hover:text-blue-400 transition-colors duration-900"
        >О нас</nuxt-link
      >
      <nuxt-link
        to="/"
        class="text-gray-200 hover:text-blue-400 transition-colors duration-900"
        >Блог</nuxt-link
      >
      <nuxt-link
        to="/"
        class="text-gray-200 hover:text-blue-400 transition-colors duration-900"
        >Связаться с нами</nuxt-link
      >
    </div>
    <div class="flex items-center">
      <nuxt-link
        to="/"
        class="text-gray-200 hover:text-blue-400 transition-colors duration-900"
        >Личный кабинет &rarr;</nuxt-link
      >
    </div>
  </nav>
</template>

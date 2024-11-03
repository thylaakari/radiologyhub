<template>
  <header class="bg-black text-white h-screen flex flex-col">
    <nav class="container mx-auto flex flex-wrap justify-between p-10">
      <nuxt-link to="/">
        <app-logo
          class="h-12 fill-white hover:fill-blue-400 transition-colors duration-900"
        ></app-logo>
      </nuxt-link>
      <div class="flex gap-x-10 items-center">
        <a href="">Статьи</a>
        <a href="">Курсы</a>
        <a href="">О нас</a>
        <a href="">Связаться с нами</a>
      </div>
      <div class="flex items-center">
        <a href="">Личный кабинет &rarr;</a>
      </div>
    </nav>
    <h1>Интерактивный портал по классической рентгенологии</h1>
    <h2>
      Курсы, статьи, разборы случаев, понятные видеуроки для начинающих
      рентгенологов
    </h2>
  </header>
</template>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="flex justify-center min-h-screen">
      <slot></slot>
      <div
        class="hidden bg-cover lg:block lg:w-2/5 bg-left bg-[url('/public/bg_crop-min.png')] bg-no-repeat"
      ></div>
    </div>
  </section>
</template>

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Geologica:wght@100..900&family=Literata:ital,opsz,wght@0,7..72,200..900;1,7..72,200..900&display=swap',
          crossorigin: '',
        },
      ],
    },
  },
  plugins: ['~/plugins/preline.client.ts'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxt/content'],
  content: {
    markdown: {
      anchorLinks: false,
    },
  },
})

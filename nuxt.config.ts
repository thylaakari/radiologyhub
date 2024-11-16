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
  modules: ['@nuxt/content', '@nuxtjs/supabase', '@vee-validate/nuxt'],
  content: {
    markdown: {
      anchorLinks: false,
    },
  },
  supabase: {
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrY3NmcnVodm1zYnB6Ym9iZW9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1MDc4MjcsImV4cCI6MjA0NzA4MzgyN30.PR8PF7UlZ9zno5em41FDHKKWDuIKBSZ6OXPN4NtPmyQ',
    url: 'https://pkcsfruhvmsbpzbobeog.supabase.co',
    redirect: false,
  },
})

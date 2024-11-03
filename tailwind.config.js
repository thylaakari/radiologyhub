/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    fontFamily: {
      sans: ['Geologica', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('preline/plugin')],
}

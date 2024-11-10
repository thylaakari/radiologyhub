/** @type {import('tailwindcss').Config} */

const mdStyles = {
  h1: {
    fontWeight: '900',
    fontSize: '3rem',
    margin: '2rem 0 1rem',
  },
  h2: {
    fontWeight: '800',
    fontSize: '2rem',
    margin: '2rem 0 0',
  },
  h3: {
    fontWeight: '700',
    fontSize: '1.5rem',
    margin: '2rem 0 0',
  },
  p: {
    fontWeight: '400',
    fontSize: '1.3rem',
    fontFamily: 'Literata, serif',
  },
  ul: {
    fontWeight: '400',
    fontSize: '1.3rem',
    fontFamily: 'Literata, serif',
  },
  ol: {
    fontWeight: '400',
    fontSize: '1.3rem',
    fontFamily: 'Literata, serif',
  },
}
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
    extend: {
      typography: {
        DEFAULT: {
          css: mdStyles,
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin'),
    require('@tailwindcss/typography'),
  ],
}

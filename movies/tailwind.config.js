/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      keyframes: {
        out: {
          'from': { opacity: 1 },
          'to': { opacity: 0 },
        },
        scale_out: {
          'from': { transform: 'scale(1.05)' },
          'to': {  transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL : process.env.CI ? '/discoverNuxt/' : '/',
        head: {
            script: [{
                src: "https://www.youtube.com/iframe_api",
                id : "youtube-iframe-js-api-script"
            }]
        }
    },
    runtimeConfig: {
        public: {
            apiKey: process.env.API_KEY,
        }
    },
    css: [
        '~/assets/css/main.css',
        '@fortawesome/fontawesome-svg-core/styles.css',
        '~/node_modules/fork-awesome/css/fork-awesome.css'
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ['nuxt-swiper']

})

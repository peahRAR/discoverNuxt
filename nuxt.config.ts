// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: process.env.CI ? '/discoverNuxt/' : '/',
        head: {
            title: 'WatchGuide',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: "WatchGuide est un guide en ligne pour les amateurs de films et de séries. Trouvez facilement où regarder vos films et séries préférés en streaming, en location ou en achat. Notre plateforme vous permet de découvrir les dernières sorties, les classiques du cinéma, les séries en vogue, ainsi que les critiques et les évaluations des utilisateurs. Avec WatchGuide, profitez d'une expérience cinématographique sans tracas et sans perdre de temps à chercher où regarder vos contenus préférés." }
              ],
            script: [{
                src: "https://www.youtube.com/iframe_api",
                id: "youtube-iframe-js-api-script"
            }]
        },
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

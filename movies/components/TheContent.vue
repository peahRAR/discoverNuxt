<template>
    <section class="bg-gradient-to-tr from-teal-900 to-black text-white">
        <div class="p-4 mx-auto">
            <div v-if="loading">Chargement...</div>
            <div v-else-if="error">{{ error.message }}</div>
            <div v-else>
                <h2>Nouveautés</h2>
                <div class="carousel group relative flex flex-row overflow-hidden">
                    <!-- Arrow left -->
                    <button
                        class="carousel-control ml-1 absolute top-0 bottom-0 w-16 bg-black bg-opacity-50 text-white z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:duration-1000 animate-out duration-700"
                        @click="scrollLeft">
                        <svg class="w-12 h-12 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7">
                            </path>
                        </svg>
                    </button>
                    <!-- Content -->
                    <div class=" slide-container flex flex-row transition-transform duration-300" ref="slideContainer">
                        <div class="slide card w-max flex-shrink-1 mx-1" v-for="item in data"
                            :key="item.id">
                            <img :src="`https://image.tmdb.org/t/p/w400${item.poster_path}`" alt="">
                        </div>
                    </div>
                    <!-- Arrow right -->
                    <button
                        class="carousel-control absolute top-0  bottom-0 right-0 w-16 bg-black bg-opacity-50 text-white z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:duration-1000 animate-out duration-700"
                        @click="scrollRight">
                        <svg class="w-12 h-12 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import useFetch from '@/composables/useFetch'

export default {
    setup() {
        const config = useRuntimeConfig()
        console.log(config.public)
        const { data, error, loading } = useFetch(`https://api.themoviedb.org/3/discover/movie?api_key=${config.public.apiKey}`)

        let value = ref(0)
        return {
            data,
            error,
            loading,
            value
        }
    },
    methods: {
        scrollLeft() {
            if (this.value === 0) {
                this.value = -100
            } else {
                this.value += 10
            }
            document.documentElement.style.setProperty('--translateX', `${this.value}%`);
        },
        scrollRight() {
            console.log(this.value)
            if (this.value === -100) {
                this.value = 0
            } else {
                this.value -= 10
            }
            document.documentElement.style.setProperty('--translateX', `${this.value}%`);
        }
    }
}
</script>

<style lang="css">
:root {
    --translateX: 0%;
}

.slide-container {
    transform: translateX(var(--translateX));
}
</style>
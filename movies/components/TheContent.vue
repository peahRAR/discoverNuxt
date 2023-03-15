<template>
    <section class=" text-white my-8">
        <div class=" mx-auto">
            <div v-if="loading">Chargement...</div>
            <div v-else-if="error">{{ error.message }}</div>
            <div v-else>
                <h2 class="categorie font-bold text-xl mt-2">Nouveautés</h2>
                <div class="carousel my-2  group relative flex flex-row overflow-hidden" ref="carouselBox">
                    <!-- Arrow left -->
                    <button
                        class="carousel-control left absolute top-0 bottom-0 w-16 bg-black bg-opacity-50 text-white z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:duration-1000 animate-out duration-700"
                        ref="leftArrow" @click="scrollLeft">
                        <svg class="w-12 h-12 ml-2 scale-y-150" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7">
                            </path>
                        </svg>
                    </button>
                    <!-- Content -->
                    <div class="slide-container flex flex-row transition-transform duration-300 overflow-x-visible"
                        ref="slideContainer">
                        <div class="slide card mx-1 hover:scale-110 duration-700 first:ml-0 last:mr-0 relative " v-for="(item, index) in data"
                            :key="item.id" :id="index">
                            <img class="w-fit shadow-md object-cover"
                            :src="`https://image.tmdb.org/t/p/w400${item.poster_path}`" alt="">
                            <div class="w-full h-full top-0 bg-opacity-20 hover:opacity-0 flex shrink-1 bg-teal-900 absolute"></div>
                        </div>
                    </div>
                    <!-- Arrow right -->
                    <button
                        class="carousel-control right absolute top-0  bottom-0 right-0 w-16 bg-black bg-opacity-50 text-white z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:duration-1000 animate-out duration-700"
                        @click="scrollRight">
                        <svg class="w-12 h-12 mr-2 scale-y-150" fill="none" stroke="currentColor" viewBox="0 0 24 24"
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
    data() {
        return {
            slideContainerWidth: 0,
            carouselBoxWidth: 0,
            nbPage: 0,
            sizePage: 0,
            sizeRest: 0
        }
    },
    setup() {
        const config = useRuntimeConfig()
        const { data, error, loading } = useFetch(`https://api.themoviedb.org/3/discover/movie?api_key=${config.public.apiKey}`)

        let value = ref(0)
        return {
            data,
            error,
            loading,
            value
        }
    },
    updated() {
        this.slideContainerWidth = this.$refs.slideContainer.offsetWidth; //Tailles du container slider
        this.carouselBoxWidth = this.$refs.carouselBox.offsetWidth; // taille du container visible
        this.nbPage = (this.slideContainerWidth / this.carouselBoxWidth); // Nombre de page 
        this.sizePage = (this.slideContainerWidth / this.nbPage); // Taille d'une page
        this.sizeRest = this.slideContainerWidth - this.sizePage // Taille restante avant fin 
    },
    methods: {
        scrollLeft() {
            console.log('value :',this.value)
            console.log('rest :',this.sizeRest)
            if (this.value === 0) {
                this.value = -(this.slideContainerWidth - this.sizePage)
                this.sizeRest = this.slideContainerWidth- this.sizePage
            } else if (this.sizeRest-this.sizePage > this.slideContainerWidth) {
                this.value = 0-this.sizePage
                this.sizeRest = this.slideContainerWidth - this.sizePage
            }
            else {
                this.value += this.sizePage / 2
                this.sizeRest += this.sizePage / 2
            }
            console.log('value :',this.value)
            console.log('rest :',this.sizeRest)
            document.documentElement.style.setProperty('--translateX', `${this.value}px`);
        },
        scrollRight() {
            //On retire le padding une fois le premier clique droit
            this.$refs.carouselBox.style.padding = "0";

            //On rend visible la flèche gauche
            this.$refs.leftArrow.style.display = "flex"

            if ((this.slideContainerWidth - this.sizePage) + this.value === 0
            ) {
                this.value = 0
                this.sizeRest = this.slideContainerWidth - this.sizePage
            } else if (this.sizeRest < this.sizePage / 2) {
                this.value -= this.sizeRest
            }
            else {
                this.value -= this.sizePage / 2
                this.sizeRest -= this.sizePage / 2
            }
            document.documentElement.style.setProperty('--translateX', `${this.value}px`);
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

.carousel,
.categorie {
    padding: 0 4%;
}

.card {
    width: 25vw;
}

.carousel-control.left {
    display: none;
}
</style>
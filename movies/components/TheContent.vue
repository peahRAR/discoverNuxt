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
                        class="carousel-control left absolute top-0 bottom-0 w-16 bg-black bg-opacity-50 text-white z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:duration-1000 animate-out duration-700" ref="leftArrow"
                        @click="scrollLeft">
                        <svg class="w-12 h-12 ml-2 scale-y-150" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7">
                            </path>
                        </svg>
                    </button>
                    <!-- Content -->
                    <div class="slide-container flex flex-row transition-transform duration-300 overflow-x-visible" ref="slideContainer">
                        <div class="slide max-w-xs card mx-1 first:ml-0 last:mr-0" v-for="(item,index) in data" :key="item.id" :id="index">
                            <img class="w-full shadow-md hover:shadow-teal-600 hover:scale-100 animate-scale_out duration-300" :src="`https://image.tmdb.org/t/p/w400${item.poster_path}`" alt="">
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
    methods: {
        scrollLeft() {
            console.log('value :', this.value)

            if (this.value >= 0) {
                this.value = -100
            } else {
                this.value += 10
            }
            document.documentElement.style.setProperty('--translateX', `${this.value}%`);
        },
        scrollRight() {
            //On retire le padding une fois le premier clique droit
            this.$refs.carouselBox.style.padding = "0";

            //On rend visible la flèche gauche
            this.$refs.leftArrow.style.display = "flex"

            const slideContainerWidth = this.$refs.slideContainer.offsetWidth; //Tailles du container slider
            const carouselLenght = this.$refs.slideContainer.childElementCount; // Nombres d'éléments dans le slider
            const carouselBoxWidth = this.$refs.carouselBox.offsetWidth; // taille du container visible
            const cardSize = (slideContainerWidth / carouselLenght); // Taille d'une card
            const cardSizeInPercent = (cardSize * 100) / slideContainerWidth; // Taille d'une card en %
            const nbPage = (slideContainerWidth / carouselBoxWidth); // Nombre de page 
            const sizePage = (slideContainerWidth / nbPage);
            
            
            console.log('value :', this.value)
            console.log('cardSize :', cardSize)
            console.log('carouselLenght', carouselLenght)
            console.log('carouselBoxWidth', carouselBoxWidth)
            console.log('slideContainerWidth:', slideContainerWidth);
            console.log('cardSizeInPercent:', cardSizeInPercent);

            if (this.value <= -(slideContainerWidth - sizePage)
            ) {
                this.value = 0 
            }
            else {
                this.value -= sizePage /2
            }

            // if (this.value === 0) {
            //     this.value += -(cardSizeInPercent/2)
            // } else if (this.value >= 100) {
            //     this.value = 0
            // }
            // else {
            //     this.value += -(cardSizeInPercent)
            // }
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

.carousel , .categorie  {
    padding: 0 4%;
}

.card{
    width: 25vw;
}

.carousel-control.left{
    display: none;
}
</style>
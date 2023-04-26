<template>
    <div class="modal no-scroll relative contenair">
        <div @click="close"
            class="background-close fixed top-0 bottom-0 left-0 right-0 w-screen h-screen z-50 bg-black bg-opacity-80">
        </div>
        <div class="modal-box w-3/4 m-auto fixed modal-contain right-0 top-0 left-0">
            <div class="w-full m-auto px-2">
                <div class="bg-gray-800 text-white rounded-lg m-auto ">
                    <div
                        class="border-t-8 border-teal-900 rounded-lg flex flex-col justify-center items-center">
                        <div class="header w-full p-4 flex justify-between items-center border-b-2 border-teal-900/20">
                            <p v-if="movie.title" class="font-bold text-xl">
                                {{ movie.title }}
                            </p>
                            <p v-if="movie.original_name" class="font-bold text-xl">
                                {{ movie.name }}
                            </p>
                            <button type="button" @click="close">
                                <font-awesome-icon class="text-2xl hover:text-teal-900" :icon="['fas', 'xmark']" />
                            </button>
                        </div>
                        <div class="body-card p-4 flex relative">
                            <img class="w-2/6 object-contain h-fit"
                                :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" :alt="movie.title">

                            <div class="flex-col w-4/6 relative ">
                                
                                <div v-if="movie.overview" class="desc w-full px-2 flex flex-col">
                                    {{ movie.overview }}
                                </div>

                                <div class="casting relative" v-if="casting.length > 0">
                                    <h2 class="text-xl mb-2 px-2 pt-8 font-bold">Casting :</h2>
                                    <people-slide :peoples="casting"/>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "modal",
    props: {
        movie: Object,
        error: Object,
        loading: Boolean
    },
    data() {
        return {
            provider: null,
            casting: [],
        }
    },
    async mounted() {
        // Api Key
        const config = useRuntimeConfig()
        
        // Fetch peoples
        const peoples = await useFetch(`https://api.themoviedb.org/3/movie/${this.movie.id}/credits?api_key=${config.public.apiKey}`);

        // Recup Cast only people with profile picture
        (async () => {
            peoples.data.value.cast.forEach(element => {
                if (element.profile_path) {
                    this.casting.push(element)
                }
            });
        })();


    },
    methods: {
        close() {
            this.$emit("close");
        },
    }
};
</script>

<style scoped>
.background-close {
    z-index: 110;
}

.modal-box {
    z-index: 111;
    top: 15%
}


</style>
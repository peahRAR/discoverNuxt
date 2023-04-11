<template>
    <div class="modal no-scroll relative contenair">
        <div @click="close"
            class="background-close fixed top-0 bottom-0 left-0 right-0 w-screen h-screen z-50 bg-black bg-opacity-80">
        </div>
        <div class="modal-box w-3/4 m-auto fixed modal-contain right-0 top-0 left-0">
            <div class="container m-auto px-6">
                <div class="bg-gray-800 text-white rounded-lg container m-auto ">
                    <div
                        class="border-t-8 border-teal-900 border-blueEnerDF rounded-lg flex flex-col justify-center items-center">
                        <div class="header container p-4 flex justify-between items-center border-b-2 border-teal-900/20">
                            <p v-if="movie.title" class="font-bold text-xl">
                                {{  movie.title }}
                            </p>
                            <p v-if="movie.original_name" class="font-bold text-xl">
                                {{ movie.name }}
                            </p>
                            <button type="button" @click="close">
                                <font-awesome-icon class="text-2xl hover:text-teal-900" :icon="['fas', 'xmark']" />
                            </button>
                        </div>
                        <div class="body-card p-4 flex">
                            <div class="cover w-1/4">
                                <img class="w-fit object-cover"
                                    :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" :alt="movie.title">
                            </div>
                            <div class="flex w-3/4">
                                <div v-if="movie.overview" class="desc px-2">
                                    {{ movie.overview }}
                                </div>
                            </div>
                        </div>
                        <slot></slot>
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
            provider: null
        }
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
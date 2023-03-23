<template>
    <TheModal v-show="isModalVisible" @close="closeModal"></TheModal>
    <section class="relative">
        <Swiper :modules="[SwiperEffectCreative, SwiperAutoplay, SwiperNavigation]" :slides-per-view="1" :loop="true"
            :slidesPerGroup="1" :pagination="true" :autoplay="{
                delay: 15000,
                disableOnInteraction: true
            }">
            <SwiperSlide class="w-full" v-for="(item, index) in data" :key="item.id" :id="index">
                <div class="w-full m-auto relative">
                    <img class="w-fit object-cover h-screen"
                        :src="`https://image.tmdb.org/t/p/original/${item.backdrop_path}`" :alt="item.title">
                    <div class="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black overlay"></div>
                    <div class="absolute top-0 right-0 left-0 z-40">
                        <div class="mt-6 m-auto container">
                            <div
                                class="desc-box absolute z-50 flex flex-col justify-start bg-teal-900/30 rounded-lg p-4 drop-shadow-xl w-2/6">
                                <div class="title text-4xl text-white font-bold mb-4">
                                    {{ item.title }}
                                </div>
                                <div class="title text-4xl text-white font-bold mb-4">

                                </div>
                                <div class="desc text-white mb-4">
                                    {{ item.overview }}
                                </div>
                                <div>
                                    <button class="button w-full px-6 mt-2 text-center rounded-xl border-2 border-white py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-teal-900/50 active:bg-red-700/5" @click="showModal">
                                        Plus d'info
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
</template>

<script>

export default {
    props: {
        data: Array,
        loading: Boolean,
        error: Object
    },
    data() {
        return {
            isModalVisible: false
        }
    },
    methods: {
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
    }
}
</script> 

<style scoped>
.overlay {
    height: 80vh;
}

.desc-box {
    margin-top: 20vh;
}
</style>
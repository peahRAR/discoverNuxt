<template>
    <section class="relative">
        <Swiper :modules="[SwiperEffectCreative, SwiperAutoplay, SwiperNavigation]" :slides-per-view="1" :loop="true"
            :slidesPerGroup="1" :pagination="true" :autoplay="{
                delay: 15000,
                disableOnInteraction: true
            }">

            <SwiperSlide class="w-full" v-for="(item, index) in movies" :key="item.id" :id="index">
                <VideoSlide :item="item" />
            </SwiperSlide>
        </Swiper>
    </section>
</template>

<script>

export default {
    props: {
        movies: Array,
        loading: Boolean,
        error: Object
    },
    methods: {
        showModal(item) {
            this.selectedItem = item,
                this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        }
    }
}
</script> 

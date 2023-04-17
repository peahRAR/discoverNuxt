<template>
    <section class="relative">
        <Swiper :modules="[SwiperEffectCreative, SwiperAutoplay, SwiperNavigation]" :slides-per-view="1" :loop="true"
            :slidesPerGroup="1" :pagination="true" :autoplay="{
                delay: 15000,
                disableOnInteraction: true
            }" @slideChange="handleSlideChange">

            <SwiperSlide class="w-full" v-for="(item, index) in movies" :key="item.id" :id="index">
                <VideoSlide :item="item" :currentItemId="activeItemId" />
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
    data() {
        return {
            activeItemId: this.movies[0].id,
        }
    },
    methods: {
        showModal(item) {
            this.selectedItem = item,
                this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
        handleSlideChange(swiper) {
            const activeIndex = swiper.realIndex;
            this.activeItemId = this.movies[activeIndex].id;
        }
    }
}
</script> 

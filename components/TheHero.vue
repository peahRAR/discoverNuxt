<template>
    <section class="relative">
        <TheModal v-if="selectedItem" v-show="isModalVisible" @close="closeModal" :movie="selectedItem" :key="selectedItem">
        </TheModal>
        <Swiper :slides-per-view="1"
            :loop="true" :slidesPerGroup="1" :pagination="true" :autoplay="{
                delay: 15000,
                disableOnInteraction: true
            }" @slideChange="handleSlideChange">

            <SwiperSlide class="w-full" v-for="(item, index) in movies" :key="item.id" :id="index">
                <VideoSlide :item="item" :currentItemId="activeItemId" @show-modal="showModal($event)" />
            </SwiperSlide>
        </Swiper>
    </section>
</template>

<script>

import { register } from 'swiper/element/bundle';

register();

export default {
    props: {
        movies: Array,
        loading: Boolean,
        error: Object
    },
    data() {
        return {
            activeItemId: this.movies[0].id,
            isModalVisible: false,
            selectedItem: null,
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

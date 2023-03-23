<template>
    <section class="text-white">
        <div class="mx-auto">
            <h2 class="categories text-2xl font-bold mx-4 py-2">{{ categoryName }}</h2>
            <div v-if="loading">
                <TheSkeleton :rounded="profilPicture" />
            </div>
            <div v-else-if="error">{{ error.message }}</div>
            <div v-else>
                <Swiper :modules="[SwiperEffectCreative, SwiperNavigation]" :slides-per-view="3" :loop="true" :navigation="{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }" :slidesPerGroup="1" :breakpoints="{
    '480': {
        slidesPerView: 3,
        slidesPerGroup: 2
    },
    '768': {
        slidesPerView: 5,
        slidesPerGroup: 4
    },
    '1024': {
        slidesPerView: 5,
        slidesPerGroup: 4
    },
    '1201': {
        slidesPerView: 6,
        slidesPerGroup: 5
    }
}" class="slide-container flex flex-row transition-transform duration-300 overflow-x-visible" id="swipper"
                    >
                    <SwiperSlide class="slide h-max card mx-1 flex flex-col justify-center hover:cursor-pointer"
                        :class="classCard" v-for="(item, index) in data.results" :key="item.id" :id="index">
                        <div class="poster" v-if="poster">
                            <img class="w-fit shadow-md object-cover movie-poster"
                                :src="`https://image.tmdb.org/t/p/w400${item.poster_path}`" :alt="`${item.title}`">
                        </div>

                        <figure class="group profile-picture mx-6 relative rounded-full overflow-hidden "
                            v-if="profilPicture && item.profile_path">
                            <div class="img-container relative ">
                                <img class="w-fit shadow-md object-cover actor-poster aspect-square"
                                    :src="`https://image.tmdb.org/t/p/w400${item.profile_path}`" :alt="`${item.title}`">
                            </div>
                            <figcaption
                                class="opacity-0 group-hover:opacity-70 transition-opacity flex justify-center absolute left-0 right-0 pb-10 pt-2 bg-black  bottom-0 ">
                                <p class="text-ellipsis overflow-hidden text-center">
                                    {{ item.name }}
                                </p>
                            </figcaption>
                        </figure>

                    </SwiperSlide>
                    <button class="swiper-button-next bg-opacity-60 h-fulltop-0 bottom-0 right-0" ref="next"
                        @click="clickNext">
                    </button>
                    <button class="swiper-button-prev bg-opacity-60 h-full top-0 bottom-0 left-0" ref="prev">
                    </button>
                </Swiper>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    props: {
        categoryName: String,
        data: Object,
        loading: Boolean,
        error: Object,
        poster: Boolean,
        profilPicture: Boolean,
        classCard: String,
    },
    data() {
        return {
            slideActive: false
        }
    },
    methods: {
        clickNext() {
            if (this.$refs.next) {
                this.slideActive = true;
                const slideBtn = this.$refs.prev;
                slideBtn.style.display = this.slideActive ? 'flex' : 'none';
            }
        }
    },
}

</script>



<style lang="scss" scoped>
#swipper,
.categories {
    padding-left: 4%;
}



.swiper-button-next,
.swiper-button-prev {
    color: white;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 51%, rgba(0, 0, 0, 0) 100%);
    height: 100%;
    top: 0;
    bottom: 0;
    position: absolute;
    opacity: 0.65;
    width: 3rem;
    margin: auto;
    transform: scale(0.97);
}

.swipper-slide {
    display: flex;
}

.swiper-button-prev {
    left: 0;
    display: none;
}

.swiper-button-next {
    right: 0;
}



.card {
    transform: scale(0.97);
    transition: transform 0.2s ease-in-out;
}

.card:hover {
    transform: scale(1);
    transition: transform 0.2s ease-in-out;
}

.poster {
    aspect-ratio: 2/3;
}

.slide {
    display: flex;

    &:empty {
        display: none;
    }
}

.slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
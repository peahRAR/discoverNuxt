<template>
    <section class="relative">
        <TheModal v-if="selectedItem" v-show="isModalVisible" @close="closeModal" :data="selectedItem"></TheModal>
        <Swiper :modules="[SwiperEffectCreative, SwiperAutoplay, SwiperNavigation]" :slides-per-view="1" :loop="true"
            :slidesPerGroup="1" :pagination="true" :autoplay="{
                delay: 15000,
                disableOnInteraction: true
            }">


            <SwiperSlide class="w-full" v-for="(item, index) in data" :key="item.id" :id="index">
                <div class="w-full m-auto relative">

                    <img v-if="!item.trailer?.ready" class="w-full object-cover h-screen"
                        :src="`https://image.tmdb.org/t/p/original/${item.backdrop_path}`" :alt="item.title">


                    <div v-show="allVideosReady" class="video">

                        <div class="w-screen object-cover h-screen" :ref="`player-${index}`"></div>
                        <button @click="toggleMute">Mute/Unmute</button>

                        
                     <!--       
                        <div class="absolute z-40 right-0 mute text-white text-4xl" @click="muteSound()">
                            <i v-if="!isMutedIcon" class="fa fa-volume-up" aria-hidden="true"
                                @mouseover="setIsMutedIcon(!this.isMuted)" @mouseout="setIsMutedIcon(this.isMuted)"></i>
                            <i v-if="isMutedIcon" class="fa fa-volume-mute" aria-hidden="true"
                                @mouseover="setIsMutedIcon(!this.isMuted)" @mouseout="setIsMutedIcon(this.isMuted)"></i>
                        </div> -->
                    </div> 

                    <div class=" absolute bottom-0 top-0 left-0 right-0 z-30 bg-gradient-to-t from-black overlay"></div>


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
                                    <button
                                        class="button flex align-middle items-center justify-center w-full px-6 mt-2 text-center rounded-xl border-2 border-white py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-teal-900/50 active:bg-red-700/5"
                                        @click="showModal(item)">
                                        <p class="flex items-center content-center">
                                            <font-awesome-icon class="px-2 text-xl text-white"
                                                :icon="['fas', 'circle-info']" />
                                            Plus d'infos
                                        </p>
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
    setup() {
        const playerRef = ref(null);
        const isMuted = ref(false);

        // API YouTube 
        useHead(() => ({
            script: {
                src: 'https://www.youtube.com/iframe_api'
            }
        }))
    },
    props: {
        data: Array,
        loading: Boolean,
        error: Object
    },
    data() {
        return {
            isModalVisible: false,
            selectedItem: false,
            players: [],
            isMuted: false,
            isMutedIcon: false,
            selectedTrailerKey: null,
            allVideosReady: false,
        }
    },
    async mounted() {
        const config = useRuntimeConfig()

        // Charger l'API YouTube
        function loadYoutubeAPI() {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }

        const data = await this.data.reduce(async (previousPromise, item, index) => {
            const previousData = await previousPromise;
            const newData = await useFetch(`https://api.themoviedb.org/3/movie/${item.id}/videos?api_key=${config.public.apiKey}&language=fr-FR`);

            if (newData.data.value.results.length > 0) {
                if (newData.data.value.results[0].site === "YouTube") {
                    this.data[index].trailer = newData.data.value.results[0]
                }
            }
            return [...previousData, newData];
        }, Promise.resolve([]));



        // Créer les lecteurs pour chaque vidéo avec une clé de vidéo
        for (let i = 0; i < this.data.length; i++) {
            const movie = this.data[i];
            let player = null
            if (movie.trailer) {
                console.log(movie.trailer.key)
                player = new window.YT.Player(this.$refs[`player-${i}`][0], {
                    videoId: movie.trailer.key,
                    playerVars: {
                        autoplay: 1,
                        controls: 0,
                        rel: 0,
                        loop: 1,
                        modestbranding: 1,
                        iv_load_policy: 3,
                        fullscreen: 1,
                        mute: 1,
                        loop: 1,
                        playlist: movie.trailer.key,
                        origin: 'https://localhost:3000'
                    },
                    events: {
                        onReady: (event) => {
                            this.data[i].trailer.ready = true
                            console.log('player recupéré :', this.data[i].trailer.ready )

                            const allReady = this.data.every(movie => {
                                return !movie.trailer || movie.trailer.ready;
                                
                            });

                            console.log('allReady :', allReady )
                            this.allVideosReady = allReady;
                        },
                        onStateChange: this.onPlayerStateChange,
                    }
                });
            }
            this.players.push(player);
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
        muteSound() {
            const iframe = this.$refs.player;

            if (this.isMuted) {
                // Rétablir le son en envoyant la commande "unmute" au lecteur

            } else {
                // Mettre en sourdine la vidéo en envoyant la commande "mute" au lecteur

            }

            this.isMuted = !this.isMuted
        },
        setIsMutedIcon(value) {
            this.isMutedIcon = value;
        },
        onPlayerReady(event) {
            // Lecture automatique lorsqu'il est prêt
            event.target.playVideo()
        },
        onPlayerStateChange(event) {
            // Répétez la vidéo si nécessaire
            if (event.data === window.YT.PlayerState.ENDED) {
                event.target.seekTo(0)
                event.target.playVideo()
            }
        },
        toggleMute() {
            if (this.player.isMuted()) {
                this.player.unMute()
            } else {
                this.player.mute()
            }
        },
    }
}
</script> 

<style scoped>
.overlay {
    height: 100vh;
}


.video {
    margin-top: -70px;
}

.ytp-title {
    display: none;
}

.desc-box {
    margin-top: 20vh;
}

.mute {
    right: 0;
    bottom: 25%;
    margin-right: 4%;
}
</style>
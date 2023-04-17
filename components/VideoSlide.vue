<template>
    <div class="w-full m-auto relative mt-16">
        <TheModal v-if="selectedItem" v-show="isModalVisible" @close="closeModal" :movie="selectedItem"></TheModal>

        <div class="player" v-if="isActive && trailer != null && trailer.key">
            <YouTube host="https://www.youtube.com" :height="hScreen" :width="wScreen" :src="trailer.key" :vars="varsPlayer"
                @ready="onReady" @state-change="onStateChange" :ref="`youtube${item.id}`" class="-mt-44" />

            <div @click="toggleMute(item.id)" class="sound-remote absolute right-24 bottom-80 z-50 text-white text-4xl">
                <button>
                    <i class="border-4 m-auto h-14 w-14 rounded-full py-2 px-1"
                        :class="[hovered ? (isMuted ? 'fa fa-volume-up' : 'fa fa-volume-mute') : (isMuted ? 'fa fa-volume-mute' : 'fa fa-volume-up')]"
                        @mouseover="hovered = true" @mouseout="hovered = false"></i>
                </button>
            </div>

        </div>

        <img v-else class="w-full object-cover h-screen" :src="`https://image.tmdb.org/t/p/original/${item.backdrop_path}`"
            :alt="item.title">


        <div class=" absolute bottom-0 top-0 left-0 right-0 z-30 bg-gradient-to-t from-black overlay"></div>

        <div class="absolute top-0 right-0 left-0 z-4 mt-56">
            <div class="mt-12 m-auto container">
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
                                <font-awesome-icon class="px-2 text-xl text-white" :icon="['fas', 'circle-info']" />
                                Plus d'infos
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import YouTube from 'vue3-youtube'

export default defineComponent({
    components: { YouTube },
    props: {
        item: Object,
        currentItemId: Number,
    },
    async mounted() {
        const config = useRuntimeConfig()

        const trailer = await useFetch(`https://api.themoviedb.org/3/movie/${this.item.id}/videos?api_key=${config.public.apiKey}&language=fr-FR`);
        this.trailer = null
        if (trailer.data.value.results.length > 0 && trailer.data.value.results[0].site === "YouTube") {
            this.trailer = trailer.data.value.results[0]
        }
    },
    data() {
        return {
            isModalVisible: false,
            selectedItem: false,
            trailer: {},
            isMuted: true,
            hovered: false
        }
    },
    methods: {
        onReady() {
            this.$refs[`youtube${this.item.id}`].mute()
            this.isMuted = true
            this.$refs[`youtube${this.item.id}`].playVideo()
        },
        onStateChange(event) {
            if (event.data === 0) {
                this.$refs[`youtube${this.item.id}`].player.playVideo()
            }
        },
        toggleMute(id) {
            const player = this.$refs[`youtube${id}`].player
            this.isMuted = !this.isMuted
            if (this.isMuted) {
                player.mute(); // Activer le mode muet
            } else {
                player.unMute(); // Désactiver le mode muet
            }
        },
        showModal(item) {
            this.selectedItem = item,
                this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
    },
    computed: {
        varsPlayer() {
            return {
                autoplay: 1,
                controls: 0,
                rel: 0,
                loop: 1,
                modestbranding: 1,
                iv_load_policy: 3,
                fullscreen: 1,
                playinline: 0,
                frameborder: 0,
                enablejsapi: 1,
                origin: ' https://' + window.location.host
            }
        },
        isActive() {
            return this.item.id === this.currentItemId;
        },
        hScreen() {
            return window.innerHeight
        },
        wScreen() {
            return window.innerWidth
        }
    }
})
</script>

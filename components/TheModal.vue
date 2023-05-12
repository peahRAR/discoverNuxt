<template>
    <div class="modal no-scroll relative contenair">
        <div @click="close"
            class="background-close fixed top-0 bottom-0 left-0 right-0 w-screen h-screen z-50 bg-black bg-opacity-80">
        </div>
        <div class="modal-box w-3/4 m-auto fixed modal-contain right-0 top-0 left-0">
            <div class="w-full m-auto px-2">
                <div class="bg-gray-800 text-white rounded-lg m-auto ">
                    <div class="border-t-8 border-teal-900 rounded-lg flex flex-col justify-center items-center">
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
                            <div class="left w-2/6 flex flex-col">
                                <img class=" object-contain h-fit rounded-t-lg"
                                    :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" :alt="movie.title">

                                <a class="provider mb-2 rounded-b-lg bg-gradient-to-tr from-black/30 to-teal-900/30 text-white flex justify-center items-center h-16"
                                    v-if="provider && provider.flatrate?.length > 0">
                                    <img class="mr-2 h-16 p-1 rounded-xl"
                                        :src="`https://image.tmdb.org/t/p/original/${provider.flatrate[0].logo_path}`"
                                        :alt="`Logo de ${provider.flatrate[0].provider_name}`">
                                    <p>Disponible en Streaming</p>
                                </a>
                            </div>

                            <div class="flex-col w-4/6 relative ">

                                <div class="top-line flex px-2 mb-2" :class="{
                                    'justify-between': rating_age,
                                    'justify-start': !rating_age
                                }">

                                    <div class="genres flex bg-teal-900 rounded-xl px-2" v-if="infos?.genres">
                                        <div class="genre flex items-center" v-for="(item, index) in infos.genres">
                                            <p class="mx-1"> {{ item.name }} </p>
                                            <p v-if="index != (infos.genres.length - 1)"> • </p>
                                        </div>
                                    </div>


                                    <div class="certif">
                                        <div v-show="rating_age && rating_age.length > 0"
                                            class="pegi flex border border-teal-900 px-2 rounded-full items-center justify-center font-bold text-lg">
                                            <p> {{ rating_age }}</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="line text-lg px-2 mb-2 flex justify-between opacity-80">
                                    <p v-if="type_of_content === 'movie' && infos?.release_date">
                                        {{ infos.release_date }}
                                    </p>
                                    <p v-if="type_of_content === 'tv' && infos?.first_air_date">
                                        {{ infos.first_air_date }}
                                    </p>

                                    <p v-if="infos?.runtime">
                                        <i class="fa fa-clock-o" aria-hidden="true"></i> {{ formatDuration(infos.runtime) }}
                                    </p>
                                    <p v-if="type_of_content === 'tv' && infos?.seasons.length > 0">
                                        Nombre de saisons : {{ infos.seasons.length }}
                                    </p>
                                </div>


                                <div v-if="movie.overview" class="desc w-full px-2 flex flex-col opacity-80">
                                    <p class="font-bold text-xl mb-2">Synopsys :</p>
                                    {{ movie.overview }}
                                </div>

                                <div class="casting relative mb-2" v-if="casting.length > 0">
                                    <h2 class="text-xl mb-2 px-2 pt-8 font-bold opacity-80">Casting :</h2>
                                    <people-slide :peoples="casting" />
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
        loading: Boolean,
        type_of_content: String
    },
    data() {
        return {
            provider: null,
            casting: [],
            crew: [],
            infos: null,
            rating_age: []
        }
    },
    async mounted() {
        // Api Key
        const config = useRuntimeConfig();

        let [creditData, infosData, providerData, certifData] = await Promise.all([
            this.type_of_content === "tv"
                ? useFetch(`https://api.themoviedb.org/3/${this.type_of_content}/${this.movie.id}/aggregate_credits?api_key=${config.public.apiKey}&language=fr-FR`)
                : useFetch(`https://api.themoviedb.org/3/${this.type_of_content}/${this.movie.id}/credits?api_key=${config.public.apiKey}&language=fr-FR`),

            useFetch(`https://api.themoviedb.org/3/${this.type_of_content}/${this.movie.id}?api_key=${config.public.apiKey}&language=fr-FR`),

            useFetch(`https://api.themoviedb.org/3/${this.type_of_content}/${this.movie.id}/watch/providers?api_key=${config.public.apiKey}&language=fr-FR`),

            this.type_of_content === "tv"
                ? useFetch(`https://api.themoviedb.org/3/${this.type_of_content}/${this.movie.id}/content_ratings?api_key=${config.public.apiKey}&language=fr-FR`)
                : useFetch(`https://api.themoviedb.org/3/${this.type_of_content}/${this.movie.id}/release_dates?api_key=${config.public.apiKey}&language=fr-FR`)


        ]);

        if (creditData?.data.value.cast) {
            this.casting = creditData.data.value.cast.filter(element => element.profile_path);
        }

        if (infosData) {
            this.infos = infosData.data.value;

            if (this.infos.release_date && typeof this.infos.release_date !== 'undefined') {
                // Format the release date
                this.infos.release_date = this.formatDate(this.infos.release_date)
            }

            if (this.infos.first_air_date && typeof this.infos.first_air_date !== 'undefined') {
                // Format the release date
                this.infos.first_air_date = this.formatDate(this.infos.first_air_date)
            }
        }

        if (providerData?.data.value.results?.FR) {
            this.provider = providerData.data.value.results.FR;
        }

        if (certifData?.data?.value?.results) {
            let certif = certifData.data.value.results
            certif.forEach(elem => {
                console.log(elem.iso_3166_1)
                if (elem.iso_3166_1 === "FR") {
                    if (this.type_of_content === "tv") {
                        this.rating_age = elem.rating
                        if (elem.rating !== "" && !isNaN(elem.rating)) { // vérifier si la chaîne n'est pas vide
                            this.rating_age = "+" + elem.rating;
                        }
                        console.log("Certification pour série française : ", elem.rating)
                    }
                    if (this.type_of_content === "movie") {
                        this.rating_age = elem.release_dates[0].certification
                        if (elem.release_dates[0].certification !== "" && !isNaN(elem.release_dates[0].certification)) { // vérifier si la chaîne n'est pas vide
                            this.rating_age = "+" + elem.release_dates[0].certification;
                        }
                        console.log("Certification pour film fr : ", elem.release_dates[0].certification)
                    }
                }
            });
        }

    },
    methods: {
        close() {
            this.$emit("close");
        },
        formatDate(dateString) {
            const months = [
                "janvier", "février", "mars", "avril", "mai", "juin", "juillet",
                "août", "septembre", "octobre", "novembre", "décembre"
            ];
            const date = new Date(dateString);
            const day = String(date.getDate()).padStart(2, '0');
            const monthIndex = date.getMonth();
            const month = months[monthIndex];
            const year = date.getFullYear();
            return `${day} ${month} ${year}`;
        },
        formatDuration(durationInMinutes) {
            const hours = Math.floor(durationInMinutes / 60);
            const minutes = durationInMinutes % 60;
            return `${hours.toString().padStart(2, '0')}h${minutes.toString().padStart(2, '0')}`;
        }
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
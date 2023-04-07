<template>
    <div class="relative">
        <div class="hero">
            <TheHero v-if="hero.data && hero.data.length === 5" :data="hero.data" />
        </div>

        <div class="all-section absolute left-0 right-0 top-0 ">

            <div class="absolute top-0 right-0 left-0 z-50">
                <!--Les tendances - Films -->
                <TheSlider :data="trendMovie.data" :error="trendMovie.error" :loading="trendMovie.loading" poster
                    category-name="Les tendances - Films" />

                <div class="bg bg-gradient-to-t from-teal-900 to-black">
                    <!--Les tendances - Séries -->
                    <TheSlider :data="trendSerie.data" :error="trendSerie.error" :loading="trendSerie.loading" poster
                        category-name="Les tendances - Séries" />

                    <!--Les tendances - Séries -->
                    <TheSlider :data="trendCelebrity.data" :error="trendCelebrity.error" :loading="trendCelebrity.loading"
                        profil-picture class-card="mx-6 w-max aspect-auto" category-name="Vos célébrités préférées" />

                    <!-- Aventure -->
                    <TheSlider :data="aventure.data" :error="aventure.error" :loading="aventure.loading" poster
                        category-name="Aventure" />

                    <!-- Horreur -->
                    <TheSlider :data="horror.data" :error="horror.error" :loading="horror.loading" poster
                        category-name="Horreur" />

                    <!-- Horreur -->
                    <TheSlider :data="anime.data" :error="anime.error" :loading="anime.loading" poster
                        category-name="Animation" />

                    <!-- Comedie -->
                    <TheSlider :data="comedie.data" :error="comedie.error" :loading="comedie.loading" poster
                        category-name="Série comique" />

                    <!-- Pied de page -->
                    <TheFooter />

                </div>


            </div>
        </div>


    </div>
</template>

<script>

export default {
    data() {
        return {
            //Hero 
            hero: {
                data: [],
                error: null,
                loading: true
            },
            //Trending Movies
            trendMovie: {
                data: null,
                error: null,
                loading: true
            },
            //Trending Series
            trendSerie: {
                data: null,
                error: null,
                loading: true
            },
            //Trending Celebrity
            trendCelebrity: {
                data: null,
                error: null,
                loading: true
            },
            //Aventure
            aventure: {
                data: null,
                error: null,
                loading: true
            },
            //Horror
            horror: {
                data: null,
                error: null,
                loading: true
            },
            //Animation
            anime: {
                data: null,
                error: null,
                loading: true
            },
            //Serie comique
            comedie: {
                data: null,
                error: null,
                loading: true
            },
        }
    },
    computed: {
        async randomMovies() {
            const config = useRuntimeConfig()

            while (this.hero.data.length < 5) {
                let randPage = Math.round(Math.random() * 499) + 1
                const { data, error, pending } = await useFetch(`https://api.themoviedb.org/3/discover/movie?api_key=${config.public.apiKey}&language=fr-FR&include_video=true&page=${randPage}&include_video=true`)
                this.hero.data = this.hero.data.concat(data.value.results.filter(m => m.backdrop_path && m.overview));
                this.hero.data = this.hero.data.slice(0, 5);
                this.hero.data = Array.from(new Set(this.hero.data));
                this.hero.error = error
                this.hero.loading = pending
            }

        }
    },
    async mounted() {
        const config = useRuntimeConfig()

        this.randomMovies

        //Trending Movies
        const { data: dataTrendMovie, error: errorTrendMovie, pending: pendingTrendMovie } = await useFetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${config.public.apiKey}&language=fr-FR`)
        this.trendMovie.data = dataTrendMovie
        this.trendMovie.error = errorTrendMovie
        this.trendMovie.loading = pendingTrendMovie

        //Trending Series
        const { data: dataTrendSerie, error: errorTrendSerie, pending: pendingTrendSerie } = await useFetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${config.public.apiKey}&language=fr-FR`)
        this.trendSerie.data = dataTrendSerie
        this.trendSerie.error = errorTrendSerie
        this.trendSerie.loading = pendingTrendSerie

        //Trending Celebritys
        const { data: dataTrendCelebrity, error: errorTrendCelebrity, pending: pendingTrendCelebrity } = await useFetch(`https://api.themoviedb.org/3/trending/person/day?api_key=${config.public.apiKey}&language=fr-FR`)
        this.trendCelebrity.data = dataTrendCelebrity
        this.trendCelebrity.error = errorTrendCelebrity
        this.trendCelebrity.loading = pendingTrendCelebrity

        //Horreur
        const { data: dataHorror, error: errorHorror, pending: pendingHorror } = await useFetch(`https://api.themoviedb.org/3/discover/movie?api_key=${config.public.apiKey}&language=fr-FR&with_genres=27`)
        this.horror.data = dataHorror
        this.horror.error = errorHorror
        this.horror.loading = pendingHorror

        //Aventure
        const { data: dataAventure, error: errorAventure, pending: pendingAventure } = await useFetch(`https://api.themoviedb.org/3/discover/movie?api_key=${config.public.apiKey}&language=fr-FR&with_genres=12`)
        this.aventure.data = dataAventure
        this.aventure.error = errorAventure
        this.aventure.loading = pendingAventure

        //Anime
        const { data: dataAnime, error: errorAnime, pending: pendingAnime } = await useFetch(`https://api.themoviedb.org/3/discover/movie?api_key=${config.public.apiKey}&language=fr-FR&with_genres=16`)
        this.anime.data = dataAnime
        this.anime.error = errorAnime
        this.anime.loading = pendingAnime

        //Serie Comique
        const { data: dataComedie, error: errorComedie, pending: pendingComedie } = await useFetch(`https://api.themoviedb.org/3/discover/tv?api_key=${config.public.apiKey}&language=fr-FR&with_genres=35&sort_by=popularity.desc&screened_theatrically=true`)
        this.comedie.data = dataComedie
        this.comedie.error = errorComedie
        this.comedie.loading = pendingComedie
    }
}
</script>

<style scoped>
.all-section {
    margin-top: 80vh;
}
</style>



<template>
    <div class="relative">
        <div class="hero">
            <TheHero v-if="hero.data && hero.data.length === 5" :movies="hero.data" type_of_content="movie" />
        </div>

        <div class="all-section mt-[80vh] absolute left-0 right-0 top-0 ">

            <div class="absolute top-0 right-0 left-0 z-50">
                <!--Les tendances - Films -->
                <TheSlider v-if="trendMovie.data?.results" :movies="trendMovie.data.results" :error="trendMovie.error" :loading="trendMovie.loading" poster type_of_content="movie"
                    category-name="Les tendances - Films" />

                <div class="bg bg-gradient-to-b from-black to-teal-900">
                    <!--Les tendances - Séries -->
                    <TheSlider v-if="trendSerie.data?.results" :movies="trendSerie.data.results" :error="trendSerie.error" :loading="trendSerie.loading" poster type_of_content="tv"
                        category-name="Les tendances - Séries" />

                    <!--Les célébritées -->
                    <TheSlider v-if="trendCelebrity.data?.results" :movies="trendCelebrity.data.results" :error="trendCelebrity.error" :loading="trendCelebrity.loading" type_of_content="people"
                        profil-picture class-card="mx-6 w-max aspect-auto" category-name="Vos célébrités préférées" />

                    <!-- Aventure -->
                    <TheSlider v-if="aventure.data?.results" :movies="aventure.data.results" :error="aventure.error" :loading="aventure.loading" poster type_of_content="movie"
                        category-name="Aventure" />

                    <!-- Horreur -->
                    <TheSlider v-if="horror.data?.results" :movies="horror.data.results" :error="horror.error" :loading="horror.loading" poster type_of_content="movie"
                        category-name="Horreur" />

                    <!-- Horreur -->
                    <TheSlider v-if="anime.data?.results" :movies="anime.data.results" :error="anime.error" :loading="anime.loading" poster type_of_content="movie"
                        category-name="Animation" />

                    <!-- Série comique -->
                    <TheSlider v-if="comedie.data?.results" :movies="comedie.data.results" :error="comedie.error" :loading="comedie.loading" poster type_of_content="tv"
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
                const { data, error, pending } = await useFetch(`https://api.themoviedb.org/3/discover/movie?api_key=${config.public.apiKey}&language=fr-FR&include_video=true&page=${randPage}&include_video=true&include_adult=false`)
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




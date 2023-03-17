<template>
    <!--Les tendances - Films -->

    <TheSlider :data="trendMovie.data" :error="trendMovie.error" :loading="trendMovie.loading"
        poster=""
        category-name="Les tendances - Films" />

    <!--Les tendances - Séries -->
    <TheSlider :data="trendSerie.data" :error="trendSerie.error" :loading="trendSerie.loading"
        poster=""
        category-name="Les tendances - Séries" />

    <!--Les tendances - Séries -->
    <TheSlider :data="trendCelebrity.data" :error="trendCelebrity.error" :loading="trendCelebrity.loading"
        profil-picture
        class-card="mx-6 w-max aspect-auto"
        category-name="Vos célébrités préférées"
        />

</template>

<script>


export default {
    data() {
        return {
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
        }
    },
    async mounted() {
        const config = useRuntimeConfig()

        //Trending Movies
        const { data: dataTrendMovie, error: errorTrendMovie, pending: pendingTrendMovie } = await useFetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${config.public.apiKey}`)
        this.trendMovie.data = dataTrendMovie
        this.trendMovie.error = errorTrendMovie
        this.trendMovie.loading = pendingTrendMovie

        //Trending Series
        const { data: dataTrendSerie, error: errorTrendSerie, pending: pendingTrendSerie } = await useFetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${config.public.apiKey}`)
        this.trendSerie.data = dataTrendSerie
        this.trendSerie.error = errorTrendSerie
        this.trendSerie.loading = pendingTrendSerie

        //Trending Celebritys
        const { data: dataTrendCelebrity, error: errorTrendCelebrity, pending: pendingTrendCelebrity } = await useFetch(`https://api.themoviedb.org/3/trending/person/day?api_key=${config.public.apiKey}`)
        this.trendCelebrity.data = dataTrendCelebrity
        this.trendCelebrity.error = errorTrendCelebrity
        this.trendCelebrity.loading = pendingTrendCelebrity
    }
}
</script>



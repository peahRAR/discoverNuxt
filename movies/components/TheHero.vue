<template>
    <section>
        <div v-if="loading">
            Chargement
        </div>
        <div v-else-if="error">{{ error.message }}</div>
        <div v-else>
            <pre>{{ movies }}</pre>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        data: Array,
    },
    data() {
        return {
            movies: null
        }
    }
}

</script>
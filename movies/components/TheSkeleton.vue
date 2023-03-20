<template>
    <div v-if="!rounded" class="content flex justify-between opacity-60 animate-pulse">
        <div v-for="item in items" class="bg-gray-800 card w-full h-full aspect-square mx-2 shadow-lg p-2 animate-pulse flex justify-center items-center">
            <div class="w-6 h-6 border-t-4 border-teal-900 rounded-full animate-spin"></div>
        </div>
    </div>
    <div v-if="rounded" class="content flex justify-between opacity-60 animate-pulse">
        <div v-for="item in items" class="bg-gray-800 profile-pic rounded-full w-full h-full aspect-square mx-6 shadow-lg animate-pulse flex justify-center items-center">
            <div class="w-6 h-6 border-t-4 border-teal-900 rounded-full animate-spin"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { id: 1, name: "Item 1" },
                { id: 2, name: "Item 2" },
                { id: 3, name: "Item 3" },
                { id: 4, name: "Item 4" },
                { id: 5, name: "Item 5" },
                { id: 6, name: "Item 6" },
            ],
        };
    },
    props: {
        rounded : Boolean
    }
};
</script>

<style scoped>
.content {
    padding-left: 4%;
}

.card {
    aspect-ratio: 2/3;
}
</style>
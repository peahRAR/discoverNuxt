<template>
    <div class="relative h-64">
        <div
            class="flex flex-col absolute top-0 bottom-0 left-0 right-0 bg-gray-900 opacity-80 rounded-lg shadow-xl m-auto px-2 ml-2">
            <div class="flex relative overflow-x-scroll py-2 w-full hide-scroll-bar">
                <div class="flex flex-nowrap">
                    <div class="card relative h-56 mx-1 first:ml-0 last:mr-0 inline-block opacity-100"
                        v-for="(people, index) in peoples">
                        <img class="w-44 h-56 rounded-b-lg max-w-xs overflow-hidden object-cover rounded-t-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
                            :src="`https://image.tmdb.org/t/p/w400${people.profile_path}`" :alt="`photo de ${people.name}`">
                        <div class="absolute bg-opacity-90 bottom-0 left-0 right-0 bg-teal-900 rounded-b-lg text-center flex flex-col justify-center">
                            <p v-if="people.roles && people.roles.length > 0" class="text-xs">{{ people.roles[0].character }}</p>
                            <p v-if="people.character" class="text-xs">{{ people.character }}</p>
                            <p class="font-bold">{{ people.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        peoples: Array
    },
}

</script>

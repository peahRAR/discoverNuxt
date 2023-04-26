<template>
    <!--
        <div class="px-2">
            <div class=" relative md:flex items-center  bg-gray-900 opacity-50 shadow-xl">
                <div class="relative overflow-x-auto flex ">
                    <div class="people h-max rounded-lg flex flex-col" v-for="(people, index) in peoples">
                        <img class="object-cover" :src="`https://image.tmdb.org/t/p/w400${people.profile_path}`"
                            :alt="`photo de ${people.name}`">
                        <p>{{ people.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    -->
    <div class="relative h-80">
        <div
            class="flex flex-col absolute top-0 bottom-0 left-0 right-0 bg-gray-900 opacity-80 rounded-lg shadow-xl m-auto px-2 ml-2">
            <div class="flex relative overflow-x-scroll py-2 w-full hide-scroll-bar">
                <div class="flex flex-nowrap">
                    <div class="card mx-1 first:ml-0 last:mr-0  inline-block h-72 opacity-100"
                        v-for="(people, index) in peoples">
                        <img class=" w-44 h-56 max-w-xs overflow-hidden object-cover rounded-t-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
                            :src="`https://image.tmdb.org/t/p/w400${people.profile_path}`" :alt="`photo de ${people.name}`">
                        <div class=" h-16 bg-teal-900 rounded-b-lg text-center flex flex-col justify-center">
                            <p>{{ people.name }}</p>
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
    }


}

</script>

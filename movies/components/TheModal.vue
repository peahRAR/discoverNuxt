<template>
    <div class="modal no-scroll relative contenair">
        <div @click="close" class="background-close fixed top-0 bottom-0 left-0 right-0 w-screen h-screen z-50 bg-black bg-opacity-80">
        </div>
        <div class="modal-box w-3/4 m-auto fixed modal-contain right-0 top-0 left-0 overflow-hidden">
            <div  class="container m-auto px-6">
                <div class="bg-gray-800 text-white rounded-lg container m-auto ">
                    <div class="border-t-8 border-teal-900 border-blueEnerDF rounded-lg flex flex-col justify-center items-center">
                        <div class="header container p-4 flex justify-between items-center">
                            <p class="font-bold text-xl">test</p>
                            <button type="button" @click="close">
                                <font-awesome-icon :icon="['fas', 'xmark']" />
                            </button>
                        </div>
                        <slot></slot>
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

    },
    methods: {
        close() {
            this.$emit("close");
        },
    },
};
</script>

<style scoped>

body {
    overflow: hidden;
}

.background-close {
    z-index: 110;
}


.modal-box {
    z-index: 111;
    top: 30%
}


</style>
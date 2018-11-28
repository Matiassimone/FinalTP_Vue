<template>
    <v-progress-linear :indeterminate= isLoading class="loader"></v-progress-linear>
</template>

<script>
export default {
    name: "loaderBar",

    data: function () {
        return {

           
        }
    },

    props: ["isLoading"], 
    methods: {

    }
}
</script>

<style>
.loader { 
    margin: 0;
    padding: 0;
    border: 0;

    height: 12px;
}
</style>


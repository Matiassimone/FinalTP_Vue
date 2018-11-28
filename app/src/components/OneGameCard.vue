<template>
    <v-layout>
        <v-flex xs12 >
        <v-card>
            <v-img
            :src="addImageResolution(game.box_art_url)"
            ></v-img>
            <v-card-title primary-title>
            <div>
                <h3>{{game.name}}</h3>            
            </div>
            </v-card-title>
        </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    name: "oneGame",
    props: ["game"], 
    methods: {
        addImageResolution(imgURL) {
            let url = imgURL.replace('{width}x{height}','285x380');
            return url;
        }
    }
}
</script>

<style>
.pointer { cursor: pointer; }
</style>


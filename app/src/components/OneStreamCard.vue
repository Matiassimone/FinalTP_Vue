<template>
    <v-layout>
    <v-flex xs12 >
    <v-card>
        <v-img
          :src="addImageResolution(stream.thumbnail_url)"
        ></v-img>
        <v-card-title primary-title>
          <div>
            <h3>{{stream.title}}</h3> 
            <p>User:{{stream.user_name}}</p>
            <p>Language: {{stream.language}}</p>                       
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
</v-layout>
</template>
<script>
export default {
    name: "onestreamcard",
    props: ["stream"],
    computed: {

    },
    methods: {
        addImageResolution(imgURL) {
            let url = imgURL.replace('{width}x{height}','285x380');
            return url;
        }
    }
}
</script>
<style>

</style>

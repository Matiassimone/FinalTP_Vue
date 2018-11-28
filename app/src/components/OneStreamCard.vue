<template>
    <v-layout>
        <v-flex xs12 >
            <v-card>
                <v-img
                :src="addImageResolution(stream.thumbnail_url)"
                class="white--text"
                >
                <v-container fill-height fluid class="lowPadding">
                    <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>  
                        <span class="online"><img src="../assets/red_circle.svg" width="10px" height="10px">Online</span>
                        <span class="viewers">Viewers: {{stream.viewer_count}}</span>
                    </v-flex>
                    </v-layout>
                </v-container>
                </v-img>
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
            let url = imgURL.replace('{width}x{height}','350x225');
            return url;
        }
    }
}
</script>

<style>
    .viewers{
        float: right
    }
    .lowPadding{
        padding-top: 3px
    }

</style>

<template>
  <v-card color="cyan darken-2" class="white--text">
    <v-layout>
      <v-flex xs5>
        <v-img :src="user.profile_image_url" height="125px" contain></v-img>
      </v-flex>
      <v-flex xs7>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{user.display_name}}</div>
            <div v-if="user.broadcaster_type">
              <div>Partner</div>
            </div>
            <div v-else>
              <div>Normal User</div>
            </div>
            <div>Views: {{user.view_count}}</div>
          </div>
        </v-card-title>
      </v-flex>
    </v-layout>
    <v-divider light></v-divider>
    <v-card-actions class="pa-3">
      <div v-if="user.description">
        <div>{{user.description}}</div>
      </div>
      <div v-else>
        <div>Sorry! This user dont have description</div>
      </div>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
    name:"usercard",
    props:["user"],
}
    


</script>
<style>

</style>

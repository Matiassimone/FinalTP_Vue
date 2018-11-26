<template>
    <v-app>
        <v-toolbar light app>

            <v-flex size=1>
                <router-link to="/">
                    <figure>
                        <img src="../public/Zwitch.png">

                        <svg class="logo-FillColor" overflow="visible" width="30px" height="30px" viewBox="0 0 30 30" x="0px" y="0px">
                            <g>
                                <path d="M4,7 L5.56799,3 L27,3 L27,18 L21,24 L16,24 L12.88599,27 L9,27 L9,24 L4,24 L4,7 Z M21,20 L25,16 L25,5 L8,5 L8,20 L12,20 L12,23 L15,20 L21,20 Z"></path>
                                <g>
                                    <polygon points="21 9 19 9 19 15 21 15"></polygon>
                                    <polygon points="16 9 14 9 14 15 16 15"></polygon>
                                </g>
                            </g>
                        </svg>
                    </figure>
                </router-link>
            </v-flex>

            <v-flex size=1>
                <v-btn flat><router-link to="/about">About</router-link></v-btn> 
            </v-flex>

        </v-toolbar>
        <router-view/>
    </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>

figure:hover {
    -webkit-animation: swing 1s ease;
    animation: swing 1s ease;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
}

@-webkit-keyframes swing {

    15% {
    -webkit-transform: translateX(5px);
    transform: translateX(5px);
    }

    30% {
    -webkit-transform: translateX(-5px);
    transform: translateX(-5px);
    }

    50% {
    -webkit-transform: translateX(3px);
    transform: translateX(3px);
    }

    65% {
    -webkit-transform: translateX(-3px);
    transform: translateX(-3px);
    }

    80% {
    -webkit-transform: translateX(2px);
    transform: translateX(2px);
    }

    100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    }
}

.logo-FillColor {
    fill: currentColor;
    color: #6441A4;
}

</style>
<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="900"
    >
      <v-img
      
        class="mb-4"
        height="150"
        src="@/assets/logo.png"
      />

      <div class="text-center">
        
        <h1  class="text-h2 font-weight-bold">Vuetify</h1>
        
        <svg width="100%" height="100%" viewBox="-20 0 557 190" id="svg">
  <circle cx="100" cy="100" r="3" />
  <circle cx="300" cy="20" r="3" />
  <path id="path" d="M9,100c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37"/>
  <g id="rect">
    <rect width="85" height="30" fill="dodgerblue" />
    <text x="10" y="19" font-size="14">SVG &lt;rect&gt;</text>
  </g>
</svg>

<div >#div</div>
        

      </div>

      <div class="py-4" />

      <v-row>
        <v-col cols="12">
          <v-card
          id="div"
            class="py-4"
            color="surface-variant"
            image="https://cdn.vuetifyjs.com/docs/images/one/create/feature.png"
            prepend-icon="mdi-rocket-launch-outline"
            rounded="lg"
            variant="outlined"
          >
            <template #image>
              <v-img position="top right" />
            </template>

            <template #title>
              <h2 class="text-h5 font-weight-bold">Get started</h2>
            </template>

            <template #subtitle>
              <div class="text-subtitle-1">
                Replace this page by removing <v-kbd>{{ `<HelloWorld />` }}</v-kbd> in <v-kbd>pages/index.vue</v-kbd>.
              </div>
            </template>

            <v-overlay
              opacity=".12"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://vuetifyjs.com/"
            prepend-icon="mdi-text-box-outline"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Learn about all things Vuetify in our documentation."
            target="_blank"
            title="Documentation"
            variant="text"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
            prepend-icon="mdi-star-circle-outline"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Explore available framework Features."
            target="_blank"
            title="Features"
            variant="text"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://vuetifyjs.com/components/all"
            prepend-icon="mdi-widgets-outline"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Discover components in the API Explorer."
            target="_blank"
            title="Components"
            variant="text"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://discord.vuetifyjs.com"
            prepend-icon="mdi-account-group-outline"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Connect with Vuetify developers."
            target="_blank"
            title="Community"
            variant="text"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { ScrollToPlugin } from "gsap/ScrollToPlugin";
  import { Draggable } from "gsap/Draggable";
  import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { onBeforeMount } from "vue";
import { onMounted } from "vue";

  onMounted(() => {


  gsap.registerPlugin(MotionPathPlugin);

gsap.to("#div", {
    duration: 5, 
    repeat: 12,
    repeatDelay: 3,
    yoyo: true,
    ease: "power1.inOut",
    motionPath:{
      path: "#path",
      align: "#path",
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    }
  });
  })

  

</script>

<style>

circle {
  fill: black;
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
h1 {
  color: white;
}
#rect text {
  pointer-events: none;
}

body {
  background-color: black;
  color: #999;
  font-family: "Signika Negative", Arial, sans-serif;
  font-weight: 300;
  font-size: 17px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

}
svg {
  overflow: visible;
  height: 100%;
  
  /* Fix Safari rendering bug */
  transform: translateZ(0);
}

path {
  stroke-width: 2;
  stroke: gray;
}

a {
  color: #88ce02;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
/* #div {
  width: 120px;
  height: 60px;
  pointer-events: none;
  background-color: #aa00ee;
  color: black;
  text-align: center;
  line-height: 60px;
  position: absolute;
  top: 30%;
  left: 60%;
  font-size: 32px;
} */





.gsap-3-logo {
  width: 20vw;
    max-width: 150px;
    position: fixed;
    bottom: 15px;
    right: 15px;  
}

</style>
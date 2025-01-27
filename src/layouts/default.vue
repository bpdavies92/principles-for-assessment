<template>
  <v-app>
    <v-app-bar :collapse="windowSize.x < 960" v-resize="onResize" elevation="2" class="position-fixed" >
    <v-app-bar-nav-icon class="d-sm-block d-md-none mr-auto" variant="text" @click="drawer = !drawer"></v-app-bar-nav-icon>


      <v-app-bar-title v-if="windowSize.x >= 960" >
        <div class="d-flex align-center">
          <div>
            <v-img
              src="../assets/images/branding/principles for assessment logo no text.svg"
              height="50"
              class="mr-5"
              width="50"
            ></v-img>
          </div>
          <div>Principles Towards Assessment</div>
        </div>
      </v-app-bar-title>
      <MenuLinks v-if="windowSize.x >= 960" />
      
    </v-app-bar>

    <div class="text-center pa-4">
    <v-dialog
      v-model="drawer"
      transition="dialog-bottom-transition"
      fullscreen
    >

      <v-card>
        <v-toolbar>

          <v-toolbar-title>Principles Towards Assessment</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-toolbar-items>
            <v-btn
              text="Close"
              variant="text"
              @click="drawer = false"
              class="mr-n3"
            ></v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <MenuLinks @closeMenu="goIntro" :lines="three" :alignText="center" :fontSize="x-large" :isBlock="true"/>
    
          
      </v-card>
    </v-dialog>
  </div>



    <v-main class="extra-space">
      <router-view class="overflow-hidden" />
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<script setup>
  import { useCardStore } from '@/stores/cardInfo';
  import { storeToRefs } from 'pinia';
  import { useGoTo } from 'vuetify';
  import { ref, onMounted, computed, compile } from 'vue';
  import MenuLinks from '@/components/MenuLinks.vue';

  onMounted(() => {
    onResize()
  })

  const store = useCardStore();
  const goTo = useGoTo();
  const openDownloads = ref(false)

  let windowSize = ref({
    x: 0,
    y: 0,
  })

  const desktopMode = computed(() => {
    return windowSize.value.x <= 960 ? true : false
  })

  const onResize = () => {
    windowSize.value = { x: window.innerWidth, y: window.innerHeight }

    return windowSize.value
  }

  const { showAllAnswers, showAllPicks, myQuestionAnswers, drawer } = storeToRefs(store);



  function showPicksMenu() {
    if (myQuestionAnswers.value.length > 0) {
      showAllPicks.value = !showAllPicks.value;
    }
  }
</script>

<style>

</style>
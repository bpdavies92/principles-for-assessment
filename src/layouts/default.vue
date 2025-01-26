<template>
  <v-app>
    <v-app-bar v-resize="onResize" elevation="2" class="position-fixed" >
            <v-app-bar-nav-icon class="d-sm-block d-md-none mr-auto" variant="text" @click="drawer = !drawer"></v-app-bar-nav-icon>


      <v-app-bar-title v-if="windowSize.x >= 960" >
        <div class="d-flex align-center">
          <div>
            <v-img
              src="../../public/images/branding/principles for assessment logo no text.svg"
              height="50"
              class="mr-5"
              width="50"
            ></v-img>
          </div>
          <div>Principles Towards Assessment</div>
        </div>
      </v-app-bar-title>
  {{ windowSize.x }}
      <MenuLinks v-if="windowSize.x >= 960" />
      
    </v-app-bar>


    <v-navigation-drawer class="position-fixed"  v-model="drawer"  v-if="windowSize.x < 960"  >
      <v-list-item title="Principles Towards Assessment"></v-list-item>
      <v-divider></v-divider>
        <MenuLinks @someEvent="drawer = false"/>
    </v-navigation-drawer>



    <v-main class="extra-space">
      <router-view />
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
  const drawer = ref(true)

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

  const { showAllAnswers, showAllPicks, myQuestionAnswers } = storeToRefs(store);

  function showPicksMenu() {
    if (myQuestionAnswers.value.length > 0) {
      showAllPicks.value = !showAllPicks.value;
    }
  }
</script>

<style>

</style>
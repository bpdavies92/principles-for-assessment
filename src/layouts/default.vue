<template>
  <v-app>
    <v-app-bar elevation="2" class="position-fixed top-0">
            <v-app-bar-nav-icon class="d-sm-block d-md-none mr-auto" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>


      <v-app-bar-title class="d-md-block d-sm-none">
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

      <MenuLinks />
      
    </v-app-bar>


    <v-navigation-drawer v-model="drawer">
      <v-list-item title="Principles Towards Assessment"></v-list-item>
      <v-divider></v-divider>
        <MenuLinks />
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
  import { ref } from 'vue';
  import MenuLinks from '@/components/MenuLinks.vue';

  const store = useCardStore();
  const goTo = useGoTo();
  const drawer = ref(false)
  const openDownloads = ref(false)

  const { showAllAnswers, showAllPicks, myQuestionAnswers } = storeToRefs(store);

  function showPicksMenu() {
    if (myQuestionAnswers.value.length > 0) {
      showAllPicks.value = !showAllPicks.value;
    }
  }
</script>

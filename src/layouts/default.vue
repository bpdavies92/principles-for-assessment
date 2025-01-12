<template>
  <v-app>
    <v-app-bar scroll-behavior="inverted collapse hide" class="position-fixed top-0">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>Principles Towards Assessment</v-app-bar-title>
      <v-btn @click="showAllAnswers = !showAllAnswers" size="small" prepend-icon="mdi-cards-playing">Answers</v-btn>
      {{ showAllAnswers }}
    </v-app-bar>
    <v-main>
      <router-view class="" />
    </v-main>

    <!-- <AppFooter /> -->
  </v-app>
</template>

<script setup>
  import { useCardStore } from '@/stores/cardInfo';
  import { storeToRefs } from 'pinia';

  const store = useCardStore()

  const {showAllAnswers} = storeToRefs(store)


</script>

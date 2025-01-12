<template>
  <v-app>
    <v-app-bar elevation="0"  class="position-fixed top-0 ">
      <template v-slot:prepend>
      </template>
      <v-app-bar-title>Principles Towards Assessment</v-app-bar-title>
      <v-btn @click="showAllAnswers = !showAllAnswers" size="small" prepend-icon="mdi-cards-playing">Answers</v-btn>
      <v-btn  size="small" prepend-icon="mdi-cards-playing">Introduction</v-btn>
      <v-btn @click="goTo('.rules', {offset:20, duration: 300})" size="small" prepend-icon="mdi-book-open-blank-variant">Rules</v-btn>
      <v-btn @click="showPicksMenu()" size="small" prepend-icon="mdi-heart">My picks</v-btn>
    </v-app-bar>
    <v-main class="extra-space">
      <router-view />
    </v-main>

  </v-app>
  
</template>

<script setup>
  import { useCardStore } from '@/stores/cardInfo';
  import { storeToRefs } from 'pinia';
  import { useGoTo } from 'vuetify'

  const store = useCardStore()
  const goTo = useGoTo()

  const {
    showAllAnswers,
    showAllPicks,
    myQuestionAnswers
  } = storeToRefs(store)

  function showPicksMenu() {
    if(myQuestionAnswers.value.length > 0) {
        showAllPicks.value = !showAllPicks.value
    }
  }
</script>

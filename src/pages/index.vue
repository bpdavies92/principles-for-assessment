<template>
  <div class="extra-space">
    <v-sheet
        v-if="showAllAnswers"
        color="transparent"
        class="position-fixed mr-auto ml-auto top-0 left-0 answer-cards-container"
        height="100vh"
        width="100vw"
      >
        <AllAnswers />
    </v-sheet>
    <v-sheet
      v-if="showAllPicks"
      color="transparent"
      class="position-fixed mr-auto ml-auto top-0 left-0 answer-cards-container"
      height="100vh"
      width="100vw"
    >
        <MyPicks />
    </v-sheet>
    <GameFinished v-if="gameProgress === 100"/>  
    <CardGame v-if="gameProgress < 100"/>
    <Introduction />
    <Rules />
    <v-sheet width="100vw" height="700">
      <v-parallax
      src="../assets/images/photographs/table game with hands.jpg"     
      aspect-ratio="16/9"
      height="100%"
      ></v-parallax>
    </v-sheet>
</div>
</template>

<script setup>
  import { useCardStore } from '@/stores/cardInfo';
  import { storeToRefs } from 'pinia'

  const store = useCardStore()
  const {
    cardInfo,
    gameProgress, 
    showAllAnswers,
    showAllPicks
   } = storeToRefs(store)



</script>

<style>

</style>
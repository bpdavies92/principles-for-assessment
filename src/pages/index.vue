<template>
  <div class="extra-space" v-resize="onResize">
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
    <MobileGame v-if="gameProgress < 100 && windowSize.x < 960"/>
    <CardGame v-if="gameProgress < 100 && windowSize.x >= 960"/>
    <Introduction />
    <Rules />
    <v-sheet width="100vw" height="700">
      <v-parallax
      src="../assets/images/photographs/table game with hands.jpg"     
      aspect-ratio="16/9"
      height="100%"
      alt=""
      ></v-parallax>
    </v-sheet>
</div>
</template>

<script setup>
  import { useCardStore } from '@/stores/cardInfo';
  import { storeToRefs } from 'pinia'
  import {ref, onMounted} from 'vue'

  onMounted(() => {
    onResize()
  })

  const windowSize = ref({
    x: 0, 
    y: 0
  })

  const onResize = () => {
    windowSize.value = { x: window.innerWidth, y: window.innerHeight }
    return windowSize.value
  }


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
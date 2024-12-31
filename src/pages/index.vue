<template>
  
  <div class="position.relative">
    <v-sheet class="position.relative " height="100vh" width="100vw" color="#fafafa">
      <FlashCard class="cardQuestion" :dropshadow="10" :question="onlyQuestionCardsSingleRandom.type" :svgUrl="onlyQuestionCardsSingleRandom.svgUrl" :cardColour="onlyQuestionCardsSingleRandom.colour" >
        <template v-slot:h1Title>Question</template>
        <template v-slot:bodyText>{{onlyQuestionCardsSingleRandom.content}}</template>
      </FlashCard>
    </v-sheet>
  </div>

  <div class="postion-relative">
    <v-sheet height="100%" class="position.relative" >
      <FlashCard v-for="(item, index) in onlyAnswerCardsSixCards" :key="index" :question="item.type" :svgUrl="item.svgUrl" :cardColour="item.colour" >
          <template v-slot:h1Title>Question</template>
          <template v-slot:bodyText>{{item.content}}</template>
      </FlashCard>
    </v-sheet>
  </div>  
 
</template>

<script setup>
  import { useCardStore } from '../stores/cardInfo'
  import FlashCard from '@/components/FlashCard.vue'

  const store = useCardStore()

  const { 
    cardInfo, 
    onlyQuestionCards, 
    onlyQuestionCardsSingleRandom,
    onlyAnswerCardsSixCards 
  } = store

</script>

<style lang="scss">

  .cardQuestion {
      position: absolute;
      top: 50%;
      bottom: 50%;
      right: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
  }

</style>





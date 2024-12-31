<template>
  
  <v-sheet class="position.relative " height="100vh" width="100vw" color="#fafafa">
    <FlashCard class="cardQuestion" :dropshadow="10" :question="onlyQuestionCardsSingleRandom.type" :svgUrl="onlyQuestionCardsSingleRandom.svgUrl" :cardColour="onlyQuestionCardsSingleRandom.colour" >
      <template v-slot:h1Title>Question</template>
      <template v-slot:bodyText>{{onlyQuestionCardsSingleRandom.content}}</template>
  </FlashCard>
  </v-sheet>

  <!-- <div v-for="(item, index) in onlyQuestionCardsSingleRandom" :key="index">
    <FlashCard :question="item.type" :svgUrl="item.svgUrl" :cardColour="item.colour" >
        <template v-slot:h1Title>Question</template>
        <template v-slot:bodyText>{{item.content}}</template>
    </FlashCard>
  </div> -->
  
 
</template>

<script setup>
  import { useCardStore } from '../stores/cardInfo'
  import FlashCard from '@/components/FlashCard.vue';

  const store = useCardStore()

  const { 
    cardInfo, 
    onlyQuestionCards, 
    onlyQuestionCardsSingleRandom,
    onlyAnswerCardsSixCards 
  } = store

  console.log(onlyQuestionCards)
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





<template>
  
      <v-sheet class="position-relative " height="100vh" width="100vw" color="#fafafa">
        <FlashCard class="card-question" :dropshadow="10" :question="onlyQuestionCardsSingleRandom.type" :svgUrl="onlyQuestionCardsSingleRandom.svgUrl" :cardColour="onlyQuestionCardsSingleRandom.colour" >
          <template v-slot:h1Title>Question</template>
          <template v-slot:bodyText>{{onlyQuestionCardsSingleRandom.content}}</template>
        </FlashCard>
        <FlashCard class="card-question" v-for="(item, index) in onlyAnswerCardsSixCards" :key="index" :question="item.type" :svgUrl="item.svgUrl" :cardColour="item.colour" >
          <template v-slot:h1Title>Question</template>
          <template v-slot:bodyText>{{item.content}}</template>
        </FlashCard>
      </v-sheet>

    <v-sheet height="100%" class="position-relative" >
  
    </v-sheet>

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

  .card-question {

      position: absolute;
      top: 50%;
      bottom: 50%;
      right: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

    &:nth-of-type(2) {
      position: absolute;
      top: 50%;
      bottom: 50%;
      right: -10%;
      left: 50%;
      transform: translate(0%, -50%);
    }

    &:nth-of-type(3) {
      position: absolute;
      top: 50%;
      bottom: 50%;
      right: 50%;
      left: -10%;
      transform: translate(0%, -50%);
    }

    &:nth-of-type(4) {
      position: absolute;
      top: 0%;
      bottom: 50%;
      right: 10%;
      left: 50%;
      transform: translate(0%, 0%);
    }

    &:nth-of-type(5) {
      position: absolute;
      top: 50%;
      bottom: 10%;
      right: 50%;
      left: 50%;
      transform: translate(-50%, 0%);
    }
  }

</style>





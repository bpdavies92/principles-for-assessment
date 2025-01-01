<template>
  
      <v-sheet class="position-relative card-container" height="100vh" width="100%" color="#fafafa">
        <FlashCard class="card-question" :class="{'winning-card-question': cardPicked}" :dropshadow="10" :question="onlyQuestionCardsSingleRandom.type" :svgUrl="onlyQuestionCardsSingleRandom.svgUrl" :cardColour="onlyQuestionCardsSingleRandom.colour" >
          <template v-slot:h1Title>Question</template>
          <template v-slot:bodyText>{{onlyQuestionCardsSingleRandom.content}}</template>
        </FlashCard>
        <FlashCard v-for="(item, index) in onlyAnswerCardsSixCards" :key="index" :question="item.type" :svgUrl="item.svgUrl" :cardColour="item.colour" @click="cardSelected[index] = true" :class="[cardSelected[index] === true ? 'winning-card-answer' : 'card-question']">
          <template v-slot:h1Title>Question</template>
          <template v-slot:bodyText>{{item.content}}</template>
        </FlashCard>
      </v-sheet>

</template>

<script setup>
  import { computed, ref } from 'vue';
  import { useCardStore } from '../stores/cardInfo'
  import FlashCard from '@/components/FlashCard.vue'

  const store = useCardStore()
  let cardSelected = ref([false, false, false, false, false, false])
  const winText = ref('winning-card-answer')
  const cardPicked = ref(true)


  const { 
    cardInfo, 
    onlyQuestionCards, 
    onlyQuestionCardsSingleRandom,
    onlyAnswerCardsSixCards 
  } = store


</script>

<style lang="scss">

 

  .card-top {
    z-index: 200 !important;
  }

  .card-container {
    transform: scale(.80);
    transform-origin: center center;
  }

  .card-question {
      // position: absolute;
      // top: 50%;
      // bottom: 50%;
      // right: 50%;
      // left: 50%;
      // transform: translate(-50%, -50%);
      // z-index: 100;

    &:nth-of-type(3) {
      position: absolute;
      top: 50%;
      bottom: 50%;
      right: 50%;
      left: -10%;
      transform: translate(0%, -50%);
      scale: scale(0.88, 0.88);
      z-index: 50;
      transition: all 1s ease-in;

      &:hover {
        z-index: 200;
      }
    }

    &:nth-of-type(6) {
      position: absolute;
      top: 2%;
      bottom: 50%;
      right: 50%;
      left: 35%;
      transform: translate(-50%, 0%);
      scale: scale(0.88, 0.88);
      z-index: 50;
      transition: all 1s ease;

      &:hover {
        z-index: 200;
      }
    }

    &:nth-of-type(5) {
      position: absolute;
      top: 50%;
      bottom: 10%;
      right: 50%;
      left: 35%;
      transform: translate(-50%, 0%);
      scale: scale(0.88, 0.88);
      z-index: 50;
      transition: all 1s ease;

      &:hover {
        z-index: 200;
      }
    }

    &:nth-of-type(4) {
      position: absolute;
      top: 5%;
      bottom: 50%;
      right: 50%;
      left: 65%;
      transform: translate(-50%, 0%);
      scale: scale(0.88, 0.88);
      z-index: 50;
      transition: all 1s ease;

      &:hover {
        z-index: 200;
      }
    }

    &:nth-of-type(7) {
      position: absolute;
      top: 50%;
      bottom: 0%;
      right: 50%;
      left: 65%;
      transform: translate(-50%, -5%);
      scale: scale(0.88, 0.88);
      z-index: 50;
      transition: all 1s ease;

      &:hover {
        z-index: 200;
      }
    }

    &:nth-of-type(2) {
      position: absolute;
      top: 50%;
      bottom: 50%;
      right: -10%;
      left: 50%;
      transform: translate(0%, -50%);
      z-index: 50;
      transition: all 1s ease;

      &:hover {
        z-index: 200;
      }
    }
  }

.winning-card {
    &-answer {
      position: absolute;
      top: 50%;
      bottom: 50%;
      right: 40%;
      left: 50%;
      transform: translate(0%, -50%);
      scale: scale(0.88, 0.88);
      z-index: 200;
      transition: all 1s ease;
    }

    &-question {
      position: absolute;
      top: 50%;
      bottom: 50%;
      right: 50%;
      left: 40%;
      transform: translate(-50%, -50%);
      scale: scale(0.88, 0.88);
      z-index: 200;
      transition: all 1s ease;
    }
}

</style>





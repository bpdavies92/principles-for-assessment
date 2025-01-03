<template>
  
      <v-sheet class="position-relative card-container" height="100vh" width="100%" color="#fafafa">
        <FlashCard class="card-top"  :class="[cardPicked === true ? 'winning-card-question' : 'card-question']" :dropshadow="10" :question="onlyQuestionCardsSingleRandom.type" :svgUrl="onlyQuestionCardsSingleRandom.svgUrl" :cardColour="onlyQuestionCardsSingleRandom.colour" :topCard="true">
          <template v-slot:h1Title>Question</template>
          <template v-slot:bodyText>{{onlyQuestionCardsSingleRandom.content}}</template>
        </FlashCard>
        <FlashCard v-for="(item, index) in onlyAnswerCardsSixCards" :key="index" :question="item.type" :svgUrl="item.svgUrl" :cardColour="item.colour" @click="cardSelected[index] = true ; cardPicked = true" :class="[cardSelected[index] === true ? 'winning-card-answer' : 'card-question']">
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
  const cardPicked = ref(false)


  const { 
    cardInfo, 
    onlyQuestionCards, 
    onlyQuestionCardsSingleRandom,
    onlyAnswerCardsSixCards 
  } = store


</script>

<style lang="scss">


  .card-container {
    transform: scale(.80);
    transform-origin: center center;
  }

  .card-question {
        position: absolute;
        top: 50%;
        bottom: 50%;
        right: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      
        &:nth-of-type(3) {
          position: absolute;
          top: 50%;
          bottom: 50%;
          right: 50%;
          left: 20%;
          transform: translate(-50%, -50%);
          scale: scale(0.88, 0.88);
          transition: all 1s ease-in;
        } 

        &:nth-of-type(6) {
          position: absolute;
          top: 30%;
          bottom: 50%;
          right: 50%;
          left: 35%;
          transform: translate(-50%, -50%);
          scale: scale(0.88, 0.88);
          transition: all 1s ease-in;
        }

        &:nth-of-type(5) {
          position: absolute;
          top: 50%;
          bottom: 50%;
          right: 50%;
          left: 35%;
          transform: translate(-50%, -20%);
          scale: scale(0.88, 0.88);
          transition: all 1s ease;
        }

        &:nth-of-type(4) {
          position: absolute;
          top: 50%;
          bottom: 50%;
          right: 50%;
          left: 50%;
          transform: translate(30%, -20%);
          scale: scale(0.88, 0.88);
          transition: all 1s ease-in;
        }

         &:nth-of-type(7) {
          position: absolute;
          top: 30%;
          bottom: 50%;
          right: 50%;
          left: 50%;
          transform: translate(30%, -50%);
          scale: scale(0.88, 0.88);
          transition: all 1s ease-in;
        }

        &:nth-of-type(2) {
          position: absolute;
          top: 50%;
          bottom: 50%;
          right: 50%;
          left: 50%;
          transform: translate(80%, -50%);
          scale: scale(0.88, 0.88);
          transition: all 1s ease-in;
        }
      }
 



  
 

   









  

.winning-card {
    &-answer {
      position: absolute;
      top: 50%;
      bottom: 50%;
      right: 50%;
      left: 50%;
      transform: translate(-40%, -50%);
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
      z-index: 200;
      transition: all 1s ease;
    }
}

</style>





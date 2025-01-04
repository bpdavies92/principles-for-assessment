<template>
  
      <v-sheet height="100vh" width="100%" color="#fafafa">
        <v-sheet class="position-relative card-container" height="100%" width="100%" color="transparent">

          <!-------- QUESTION CARD ------>

          {{ processStage }}

          <FlashCard 
              :key="randomCard"
              :class="[
                cardPicked === true ? 'winning-card-question' : 'card-question',
                newGame === true ? 'new-canvas' : '',
              ]" 
              :dropshadow="10" 
              :question="onlyQuestionCardsSingleRandom.type" 
              :svgUrl="onlyQuestionCardsSingleRandom.svgUrl" 
              :cardColour="onlyQuestionCardsSingleRandom.colour" 
              :topCard="true">
              <template v-slot:h1Title>Question</template>
              <template v-slot:bodyText>{{onlyQuestionCardsSingleRandom.content}}</template>
          </FlashCard>

          <!-------- ANSWER CARD ------>

          <FlashCard 
                v-for="(item, index) in onlyAnswerCardsSixCards" 
                :key="index" 
                :question="item.type" 
                :svgUrl="item.svgUrl" 
                :flip="cardSelected[index] === 'not selected'" 
                :cardColour="item.colour" 
                @click="cardChoice(index) ; cardPicked = true" 
                :class="[
                    cardSelected[index] === 'answer' ? 'winning-card-answer' : 'card-question',
                    cardSelected[index] === 'not selected' ? 'move-cards-away' : '',
                    newGame === true ? 'new-canvas' : '',
                    processStage != 3 ? 'pause-animation' : ''
                  ]"
            >
              <template v-slot:h1Title>Question</template>
              <template v-slot:bodyText>{{item.content}}</template>
          </FlashCard>
        </v-sheet>
        <v-btn @click="newSelection" v-if="cardPicked" width="30%" rounded="xs" size="x-large" class="position-absolute bottom-0 left-0 right-0 next-button mr-auto ml-auto mb-6">Next card</v-btn>
      </v-sheet>

</template>

<script setup>
  import { computed, ref } from 'vue';
  import { useCardStore } from '../stores/cardInfo'
  import FlashCard from '@/components/FlashCard.vue'
  import { storeToRefs } from 'pinia';

  const store = useCardStore()

  const { 
    cardInfo, 
    onlyQuestionCards, 
  } = store

  const { 
    processStage, 
    randomCard, 
    onlyQuestionCardsSingleRandom, 
    randomCardAnswers, 
    onlyAnswerCardsSixCards
  } = storeToRefs(store)

  console.log('card info', processStage.value)
  let cardSelected = ref([null, null, null, null, null, null])
  const winText = ref('winning-card-answer')
  const cardPicked = ref(false)
  const animationStage = ref(0)
  const newGame = ref(false)

  store.reshuffleAnswerCard()
  store.reshuffleQuestionCard()

  function cardChoice(i) {
    cardSelected.value[i] = 'answer'
    cardSelected.value.forEach((value, index, array) => {
      if(value === null) array[index] = 'not selected'
    })
  }

  function newSelection(i) {
    processStage.value = 1
    if(processStage.value === 1 ) { 
      newGame.value = true
      processStage.value = 2
      // cardSelected.value.forEach((value, index, array) => array[index] = null)
    } 
    
    if(processStage.value === 2) {
      processStage.value = 3
      // setTimeout(() => {
      //   cardSelected.value.forEach((value, index, array) => array[index] = null)
      //   newGame.value = false
      //   cardPicked.value = false
      //   store.reshuffleAnswerCard()
      //   store.reshuffleQuestionCard()
      // }, 2000)
    }
  }

</script>

<style lang="scss">

  .next-button {
    z-index: 100;
  }

  .card-container  {
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
          transition: all 1s ease .7s;
        } 

        &:nth-of-type(6) {
          position: absolute;
          top: 30%;
          bottom: 50%;
          right: 50%;
          left: 35%;
          transform: translate(-50%, -50%);
          scale: scale(0.88, 0.88);
          transition: all 1s ease .3s;
        }

        &:nth-of-type(5) {
          position: absolute;
          top: 50%;
          bottom: 50%;
          right: 50%;
          left: 35%;
          transform: translate(-50%, -20%);
          scale: scale(0.88, 0.88);
          transition: all 1s ease .10s;
        }

        &:nth-of-type(4) {
          position: absolute;
          top: 50%;
          bottom: 50%;
          right: 50%;
          left: 50%;
          transform: translate(15%, -20%);
          scale: scale(0.88, 0.88);
          transition: all 1s ease .4s;
        }

         &:nth-of-type(7) {
          position: absolute;
          top: 30%;
          bottom: 50%;
          right: 50%;
          left: 50%;
          transform: translate(15%, -50%);
          scale: scale(0.88, 0.88);
          transition: all 1s ease .4s;
        }

        &:nth-of-type(2) {
          position: absolute;
          top: 50%;
          bottom: 50%;
          right: 50%;
          left: 50%;
          transform: translate(80%, -50%);
          scale: scale(0.88, 0.88);
          transition: all 1s ease ;
        }
      }

.winning-card {
    &-answer {
      position: absolute;
      top: 50%;
      bottom: 50%;
      right: 50%;
      left: 50%;
      transform: translate(10%, -50%);
      z-index: 200;
      transition: all 1s ease 1s;
    }

    &-question {
      position: absolute;
      top: 50%;
      bottom: 50%;
      right: 50%;
      left: 40%;
      transform: translate(-50%, -50%);
      z-index: 200;
      transition: all 1s ease 1s;
    }
}

.pause-animation {
  animation-play-state: paused;
}

.continue-animation {
  animation-play-state: running;
}

.move-cards-away {
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
          left: 1%;
          transform: translate(-50%, -50%);
          animation: move-away-3 1s ease ;
          scale: scale(0.88, 0.88);
          // transition: all 1s ease;
          animation-delay: 1s;
        } 

        &:nth-of-type(6) {
          position: absolute;
          top: 0%;
          bottom: 50%;
          right: 50%;
          left: 40%;
          transform: translate(-50%, -70%);
          scale: scale(0.88, 0.88);
          // transition: all 1s ease;
          animation: move-away-6 1s ease ;
          animation-delay: 1s;
        }

        &:nth-of-type(5) {
          position: absolute;
          top: 50%;
          bottom: 50%;
          right: 50%;
          left: 17%;
          animation: move-away-5 1s ease ;
          transform: translate(-50%, 20%);
          scale: scale(0.88, 0.88);
          // transition: all 1s ease;
          animation-delay: 1s;
        }

        &:nth-of-type(4) {
          position: absolute;
          top: 50%;
          bottom: 10%;
          right: 50%;
          left: 50%;
          animation: move-away-4 1s ease ;
          transform: translate(1%, 70%);
          scale: scale(0.88, 0.88);
          // transition: all 1s ease;
          animation-delay: 1s;
        }

         &:nth-of-type(7) {
          position: absolute;
          top: 0%;
          bottom: 50%;
          right: 50%;
          left: 50%;
          transform: translate(90%, -50%);
          animation: move-away-7 2s ease ;
          scale: scale(0.88, 0.88);
          // transition: all 1s ease;
          animation-delay: 1s;
        }

        &:nth-of-type(2) {
          position: absolute;
          top: 10%;
          bottom: 50%;
          right: 50%;
          left: 70%;
          transform: translate(100%, -50%);
          animation: move-away-2 2s ease ;
          scale: scale(0.88, 0.88);
          // transition: all 1s ease;
          animation-delay: 1s;
        }
      }

      @keyframes move-away-3 {
        0% {
          top: 50%;
          bottom: 50%;
          right: 50%;
          left: 20%;
          transform: translate(-50%, -50%);
        } 50% {
          top: 50%;
          bottom: 50%;
          right: 50%;
          left: 1%;
          transform: translate(-50%, -50%);
        } 100% {
          top: -200%;
        }
      }

      @keyframes move-away-2 {
        0% {
          top: 50%;
          bottom: 50%;
          right: 50%;
          left: 50%;
          transform: translate(80%, -50%);
        } 50% {
          top: 10%;
          bottom: 50%;
          right: 50%;
          left: 70%;
          transform: translate(100%, -50%);
        } 100% {
          top: -200%;
        }
      }

      @keyframes move-away-4 {
        0% {
          top: 50%;
          bottom: 50%;
          right: 50%;
          left: 50%;
          transform: translate(15%, -20%);
        } 50% {
          top: 50%;
          bottom: 10%;
          right: 50%;
          left: 50%;
          transform: translate(1%, 70%);
        } 100% {
          top: -200%;
        }
      }

      @keyframes move-away-5 {
        0% {
          top: 50%;
          bottom: 50%;
          right: 50%;
          left: 35%;
          transform: translate(-50%, -20%);
        } 50% {
          top: 50%;
          bottom: 50%;
          right: 50%;
          left: 17%;
          transform: translate(-50%, 20%);
        } 100% {
          top: -200%;
        }
      }

      
      @keyframes move-away-6 {
        0% {
          top: 30%;
          bottom: 50%;
          right: 50%;
          left: 35%;
          transform: translate(-50%, -50%);
        } 50% {
          top: 0%;
          bottom: 50%;
          right: 50%;
          left: 40%;
          transform: translate(-50%, -70%);
        } 100% {
          top: -200%;
        }
      }

      @keyframes move-away-7 {
        0% {
          top: 30%;
          bottom: 50%;
          right: 50%;
          left: 50%;
          transform: translate(15%, -50%);
        } 50% {
          top: 0%;
          bottom: 50%;
          right: 50%;
          left: 50%;
          transform: translate(90%, -50%);
        } 100% {
          top: -200%;
        }
      }

      .new-canvas {
        animation: empty-scene 1s ease forwards;
      }

      @keyframes empty-scene {
        0% {
          position: 0;
        } 
        100% {
          top: -200%;
        }
      }

      


</style>





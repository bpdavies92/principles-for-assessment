<template>
  
        <v-sheet height="100vh" width="100%" color="#fafafa" ref="main" >
        <v-sheet class="position-relative card-container" height="100%" width="100%" color="transparent">

          <!-------- QUESTION CARD ------>

         {{ randomCard }} {{ numberAdder }} {{ cardSelected }}

          <FlashCard 
              :key="randomCard"
              class="card"
              :class="[
                cardPicked === true ? 'winning-card-question' : 'card-question',
                newGame === true ? 'new-canvas' : '',
                startAnimation === true ? 'animation-start' : ''
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
                class="card" 
                @click="cardChoice(index) ; cardPicked = true" 
                :class="[
                    cardSelected[index] === 'answer' ? 'winning-card-answer' : 'card-question',
                    cardSelected[index] === 'not selected' ? 'move-cards-away' : '',
                    startAnimation === true ? 'animation-start' : ''
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
  import { computed, ref, onMounted, onUnmounted } from 'vue';
  import { useCardStore } from '../stores/cardInfo'
  import FlashCard from '@/components/FlashCard.vue'
  import { MotionPathPlugin } from "gsap/MotionPathPlugin";
  import { storeToRefs } from 'pinia';
  import gsap from 'gsap';

  const store = useCardStore()

  const numberAdder = ref(1)

  const main = ref();
    let ctx;
    var tl = gsap.timeline({paused: true, defaults: {ease: "power2.inOut"}});

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

  const startAnimation = ref(true)

  function animationDelay() {
    setTimeout(() => {
      startAnimation.value = false
    }, 3000)
  }

  animationDelay()

  onMounted(() => {
      ctx = gsap.context((self) => {
      tl.to('.card', {y: -1100, duration: .1})
    })
  });

  onUnmounted(() => {
    ctx.revert(); // <- Easy Cleanup!
  });

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
    tl.restart()
    processStage.value = 1
    if(processStage.value === 1 ) { 
      newGame.value = true
      processStage.value = 2
  } 
   
    if(processStage.value === 2) {
      
      setTimeout(() => {
        tl.revert()
        newGame.value = false
        cardPicked.value = false
        cardSelected.value.forEach((value, index, array) => { array[index] = null })
        store.reshuffleQuestionCard()
        store.reshuffleAnswerCard()
        processStage.value = 0
        animationDelay()  
      }, 5000)
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

  .animation-start {
    &:nth-of-type(1) {
      animation: move-away-1 2s ease forwards;
    }
    &:nth-of-type(2) {
      animation: move-away-2 2s ease 2s both;
    }
    &:nth-of-type(3) {
      animation: move-away-3 2s ease 2s both;
    }
    &:nth-of-type(4) {
      animation: move-away-4 2s ease 2s both;
    }
    &:nth-of-type(5) {
      animation: move-away-5 2s ease 2s both;
    }
    &:nth-of-type(6) {
      animation: move-away-6 2s ease 2s both;
    }
    &:nth-of-type(7) {
      animation: move-away-7 2s ease 2s both;
    }
  }

  .card-question {
        position: absolute;
        top: 50%;
        bottom: 50%;
        right: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        
        // &:nth-child(1) {
        //   position: absolute;
        // top: 50%;
        // bottom: 50%;
        // right: 50%;
        // left: 50%;
        // transform: translate(-50%, -50%);
        // transform: scale(1);
        //   animation: move-away-1 2s ease forwards ;
        // }
       
        &:nth-of-type(3) {
          position: absolute;
          top: 50%;
          bottom: 50%;
          right: 50%;
          left: 20%;
          transform: translate(-50%, -50%);
          scale: scale(0.88, 0.88);
          // animation: move-away-3 2s ease 2s both;
          // transition: all 1s ease .7s;
        } 

        &:nth-of-type(6) {
          position: absolute;
          top: 30%;
          bottom: 50%;
          right: 50%;
          left: 35%;
          transform: translate(-50%, -50%);
          scale: scale(0.88, 0.88);
          // animation: move-away-6 2s ease 2s both ;
          // transition: all 1s ease .3s;
        }

        &:nth-of-type(5) {
          position: absolute;
          top: 50%;
          bottom: 50%;
          right: 50%;
          left: 35%;
          transform: translate(-50%, -20%);
          scale: scale(0.88, 0.88);
          // animation: move-away-5 2s ease 2s both ;
          // transition: all 1s ease .10s;
        }

        &:nth-of-type(4) {
          position: absolute;
          top: 50%;
          bottom: 50%;
          right: 50%;
          left: 50%;
          transform: translate(15%, -20%);
          scale: scale(0.88, 0.88);
          // animation: move-away-4 2s ease 2s both ;
          // transition: all 1s ease .4s;
        }

         &:nth-of-type(7) {
          position: absolute;
          top: 30%;
          bottom: 50%;
          right: 50%;
          left: 50%;
          transform: translate(15%, -50%);
          scale: scale(0.88, 0.88);
          // animation: move-away-7 2s ease 2s both ;
          // transition: all 1s ease .4s;
        }

        &:nth-of-type(2) {
          position: absolute;
          top: 50%;
          bottom: 50%;
          right: 50%;
          left: 50%;
          transform: translate(80%, -50%);
          scale: scale(0.88, 0.88);
          // animation: move-away-2 2s ease 2s both ;
          // transition: all 1s ease ;
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

// .pause-animation {
//   animation-play-state: paused;
// }

// .continue-animation {
//   animation-play-state: running;
// }

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
          // animation: move-away-3 1s ease ;
          scale: scale(0.88, 0.88);
          transition: all 1s ease;
          // animation-delay: 1s;
        } 

        &:nth-of-type(6) {
          position: absolute;
          top: 0%;
          bottom: 50%;
          right: 50%;
          left: 40%;
          transform: translate(-50%, -70%);
          scale: scale(0.88, 0.88);
          transition: all 1s ease;
          // animation: move-away-6 1s ease ;
          // animation-delay: 1s;
        }

        &:nth-of-type(5) {
          position: absolute;
          top: 50%;
          bottom: 50%;
          right: 50%;
          left: 17%;
          // animation: move-away-5 1s ease ;
          transform: translate(-50%, 20%);
          scale: scale(0.88, 0.88);
          transition: all 1s ease;
          // animation-delay: 1s;
        }

        &:nth-of-type(4) {
          position: absolute;
          top: 50%;
          bottom: 10%;
          right: 50%;
          left: 50%;
          // animation: move-away-4 1s ease ;
          transform: translate(1%, 70%);
          scale: scale(0.88, 0.88);
          transition: all 1s ease;
          animation-delay: 1s;
        }

         &:nth-of-type(7) {
          position: absolute;
          top: 0%;
          bottom: 50%;
          right: 50%;
          left: 50%;
          transform: translate(90%, -50%);
          // animation: move-away-7 2s ease;
          scale: scale(0.88, 0.88);
          transition: all 1s ease;
          animation-delay: 1s;
        }

        &:nth-of-type(2) {
          position: absolute;
          top: 10%;
          bottom: 50%;
          right: 50%;
          left: 70%;
          transform: translate(100%, -50%);
          // animation: move-away-2 2s ease ;
          scale: scale(0.88, 0.88);
          transition: all 1s ease;
          animation-delay: 1s;
        }
      }

      @keyframes move-away-3 {
        0% {
          top: 50%;
          bottom: 50%;
          right: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        } 100% {
          top: 50%;
          bottom: 50%;
          right: 50%;
          left: 20%;
          transform: translate(-50%, -50%);
        } 
      }

      @keyframes move-away-2 {
        0% {
          top: 50%;
          bottom: 50%;
          right: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        } 100% {
          top: 50%;
          bottom: 50%;
          right: 50%;
          left: 50%;
          transform: translate(80%, -50%);
        } 
      }

      @keyframes move-away-4 {
        0% {
          top: 50%;
          bottom: 50%;
          right: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        } 100% {
          top: 50%;
          bottom: 50%;
          right: 50%;
          left: 50%;
          transform: translate(15%, -20%);
        } 
      }

      @keyframes move-away-5 {
        0% {
          top: 50%;
          bottom: 50%;
          right: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        } 100% {
          top: 50%;
          bottom: 50%;
          right: 50%;
          left: 35%;
          transform: translate(-50%, -20%);
        } 
      }

      
      @keyframes move-away-6 {
        0% {
          top: 50%;
          bottom: 50%;
          right: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        } 100% {
          top: 30%;
          bottom: 50%;
          right: 50%;
          left: 35%;
          transform: translate(-50%, -50%);
        } 
      }

      @keyframes move-away-7 {
        0% {
          top: 50%;
          bottom: 50%;
          right: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        } 100% {
          top: 30%;
          bottom: 50%;
          right: 50%;
          left: 50%;
          transform: translate(15%, -50%);
        } 
      }

      @keyframes move-away-1 {
        0% {
          transform: scale(34);
        } 100% {
          transform: scale(1);
          position: absolute;
          top: 50%;
          bottom: 50%;
          right: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
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





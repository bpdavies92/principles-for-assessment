<template>
  <AnswerInputBox :indexNum="modelIndex" />

  <div class="overflow-hidden">
    <v-container color="#fafafa" ref="main" class="ml-auto mr-auto" max-width="1350">
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

      <v-sheet class="position-relative card-container mr-auto ml-auto" height="100vh" color="transparent">
        <FlashCard
          class="question-card-top"
          :key="randomCard"
          :class="[
            cardPicked === true ? 'winning-card-question' : 'card-question',
            newGame === true ? 'new-canvas' : '',
            startAnimation === true ? 'animation-start' : '',
            startAnimation === true ? 'test' : ''
          ]"
          :dropshadow="10"
          :question="onlyQuestionCardsSingleRandom.type"
          :svgUrl="onlyQuestionCardsSingleRandom.svgUrl"
          :cardColour="onlyQuestionCardsSingleRandom.colour"
          :topCard="true"
        >
          <template v-slot:h1Title>Question</template>
          <template v-slot:bodyText>{{ onlyQuestionCardsSingleRandom.content }}</template>
        </FlashCard>

        <FlashCard
          v-for="(item, index) in onlyAnswerCardsSixCards"
          :key="index"
          class="scale-card"
          @mouseover="cardPicked === false ? isRotated[index] = true : null"
          @mouseleave="cardPicked === false ? isRotated[index] = false : null"
          @click="userCardInput(item.id, index); cardChoice(index); cardPicked = true; questionAnswerPair(item, onlyQuestionCardsSingleRandom, item.points); isRotated.forEach((value, i, array) => array[i] = true); pointsCollector(item.points)" 
          :style="{
            transform: isRotated[index] === false ? `translate(-50%, -50%) rotate(${rot[index]}deg)` : ''
          }"
          :question="item.type"
          :svgUrl="item.svgUrl"
          :flip="cardSelected[index] === 'not selected'"
          :cardColour="item.colour"
          :class="[
            cardSelected[index] === 'answer' ? 'winning-card-answer' : 'card-question',
            cardSelected[index] === 'not selected' ? 'move-cards-away' : '',
            newGame === true ? 'new-canvas' : '',
            startAnimation === true ? 'animation-start' : ''
          ]">
          <template v-slot:h1Title>Question</template>
          <template v-slot:bodyText>{{ item.answer ? item.answer : item.content }}</template>
        </FlashCard>

        <v-btn
          @click="newSelection(); gameProgress += 10"
          v-if="cardPicked"
          width="30%"
          rounded="xs"
          size="x-large"
          color="#303030"
          class="position-absolute bottom-0 left-0 right-0 next-button mr-auto ml-auto mb-6"
        >
          Next card
        </v-btn>
        <v-sheet color="transparent" class="position-absolute points">
          <v-progress-circular
            :model-value="gameProgress"
            rotate="360"
            size="200"
            width="30"
            color="#303030"
            class="mr-12"
          >
            <div class="d-flex align-center justify-center flex-column mt-n1">
              <div class="mb-n1 text-body-1">{{ gamePoints }}</div> 
              <div class="text-body-1">points</div>
            </div>
          </v-progress-circular>
          <v-btn @click="reshuffleCards" color="#303030" size="x-large">Reshuffle</v-btn>
      </v-sheet>
      </v-sheet>

    </v-container>

  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { useCardStore } from '../stores/cardInfo';
import FlashCard from '@/components/FlashCard.vue';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { storeToRefs } from 'pinia';
import gsap from 'gsap';
import AllAnswers from '@/components/AllAnswers.vue';
import MyPicks from '@/components/MyPicks.vue';

// Store
const store = useCardStore();
const { 
  onlyQuestionCards, 
  questionAnswerPair 
} = store;

const { 
  cardInfo, 
  processStage, 
  randomCard, 
  onlyQuestionCardsSingleRandom, 
  randomCardAnswers, 
  onlyAnswerCardsSixCards, 
  showAllAnswers, 
  showAllPicks, 
  modelOpenClose,
  gameProgress,
  gamePoints
} = storeToRefs(store);

// Reactive Variables
const userInput = ref('');
const modelIndex = ref(null)
const cardInput = ref([false, false, false, false, false, false]);
const showAllAnswerCards = ref(false);
const numberAdder = ref(1);
const isRotated = ref([false, false, false, false, false, false]);
const cardSelected = ref([null, null, null, null, null, null]);
const winText = ref('winning-card-answer');
const cardPicked = ref(false);
const animationStage = ref(0);
const newGame = ref(false);
const startAnimation = ref(true);
const main = ref();

// Computed Properties
const rot = computed(() => {
  let differentAngles = [-5, 10, 3, -3, -14, 12, -7];
  for (let i = differentAngles.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [differentAngles[i], differentAngles[randomIndex]] = [differentAngles[randomIndex], differentAngles[i]];
  }
  return differentAngles;
});

// GSAP Timeline
let ctx;
const tl = gsap.timeline({ paused: true, defaults: { ease: 'power2.inOut' } });

// Functions
function progressGame() {
  gameProgress.value += 10;
}

function pointsCollector(points) {
  gamePoints.value += points;
}

function userCardInput(id, i) {
  if(cardInfo.value[id].userInput === false) return
  modelOpenClose.value = true
  modelIndex.value = id
}

function animationDelay() {
  setTimeout(() => {
    startAnimation.value = false;
  }, 1200);
}

function cardChoice(i) {
  cardSelected.value[i] = 'answer';
  cardSelected.value.forEach((value, index, array) => {
    if (value === null) array[index] = 'not selected';
  });
}

function newSelection() {
  tl.restart();
  processStage.value = 1;

  if (processStage.value === 1) {
    newGame.value = true;
    processStage.value = 2;
  }

  if (processStage.value === 2) {
    setTimeout(() => {
      tl.revert();
      newGame.value = false;
      cardPicked.value = false;
      cardSelected.value.fill(null);
      store.reshuffleQuestionCard();
      store.reshuffleAnswerCard();
      processStage.value = 0;
      startAnimation.value = true;
      animationDelay();
      isRotated.value.fill(false);
    }, 700);
  }
}

function reshuffleCards() {
  tl.revert();
      newGame.value = false;
      cardPicked.value = false;
      cardSelected.value.fill(null);
      store.reshuffleQuestionCard();
      store.reshuffleAnswerCard();
      processStage.value = 0;
      startAnimation.value = true;
      animationDelay();
      isRotated.value.fill(false);
}

// Lifecycle Hooks
onMounted(() => {
  ctx = gsap.context(() => {
    // Add your animations here
  });
  animationDelay();
});

onUnmounted(() => {
  ctx.revert(); // Cleanup GSAP context
});

// Initial Setup
store.reshuffleAnswerCard();
store.reshuffleQuestionCard();
console.log('card info', processStage.value);
console.log(isRotated.value);

</script>


<style lang="scss">

.points {
  position: absolute;
  top:85%;
  bottom:50%;
  right:50%;
  left:0%;
  transform: translate(-50%, -50%);

  z-index: 2;
}

.question-card-top {
  z-index: 99;
}

.answer-cards-container {
z-index: 500;
}

.next-button {
z-index: 100;
}

.card-container  {
transform: scale(.80);
transform-origin: center center;
}

.animation-start {
&:nth-of-type(1) {
  animation: move-away-1 .5s ease forwards;
}
&:nth-of-type(2) {
  animation: move-away-2 .5s ease .7s both;
}
&:nth-of-type(3) {
  animation: move-away-3 .5s ease .7s both;
}
&:nth-of-type(4) {
  animation: move-away-4 .5s ease .7s both;
}
&:nth-of-type(5) {
  animation: move-away-5 .5s ease .7s both;
}
&:nth-of-type(6) {
  animation: move-away-6 .5s ease .7s both;
}
&:nth-of-type(7) {
  animation: move-away-7 .5s ease .7s both;
}
}

.test:nth-of-type(3):hover {
        transform: translate(-50%, -50%)  rotate(0deg) scale(1.5);
}

.card-question {
    position: absolute;
    top: 50%;
    bottom: 50%;
    right: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all .5s ease;
  
   //FAR LEFT
    &:nth-of-type(3) {
      position: absolute;
      top: 50%;
      bottom: 50%;
      right: 50%;
      left: 0%;
      transform: translate(-50%, -50%) rotate(0deg);
      
      &   {
        transform: translate(-50%, -50%) rotate(0deg) scale(1.2);
      }
    } 

    //LEFT TOP
    &:nth-of-type(6) {
      position: absolute;
      top: 30%;
      bottom: 50%;
      right: 50%;
      left: 25%;
      transform: translate(-50%, -50%) rotate(0deg);
      & {
        transform: translate(-50%, -50%) rotate(0deg) scale(1.2);
      }      
    }

    //LEFT BOTTOM
    &:nth-of-type(5) {
      position: absolute;
      top: 70%;
      bottom: 50%;
      right: 50%;
      left: 25%;
      transform: translate(-50%, -50%) rotate(0deg);
      & {
        transform: translate(-50%, -50%) rotate(0deg) scale(1.2);
      }
    }

    //RIGHT TOP
    &:nth-of-type(4) {
      position: absolute;
      top: 30%;
      bottom: 50%;
      right: 50%;
      left: 75%;
      transform: translate(-50%, -50%), rotate(0deg);
      & {
        transform: translate(-50%, -50%) rotate(0deg) scale(1.2);
      }
    }

    //RIGHT BOTTOM
    &:nth-of-type(7) {
      position: absolute;
      top: 70%;
      bottom: 50%;
      right: 50%;
      left: 75%;
      transform: translate(-50%, -50%) rotate(0deg);
      & {
        transform: translate(-50%, -50%) rotate(0deg) scale(1.2);
      }
    }

    //FAR RIGHT
    &:nth-of-type(2) {
      position: absolute;
      top: 50%;
      bottom: 50%;
      right: 50%;
      left: 100%;
      transform: translate(-50%, -50%);
      & {
        transform: translate(-50%, -50%) rotate(0deg) scale(1.2);
      }
    }
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
      transition: all .5s ease;
      
    } 

    &:nth-of-type(6) {
      position: absolute;
      top: 0%;
      bottom: 50%;
      right: 50%;
      left: 40%;
      transform: translate(-50%, -70%) scale(1);
      transition: all .5s ease;

      &:hover .scale-card {
        transform:  translate(-50%, -70%) scale(1.5);
      }
    }

    &:nth-of-type(5) {
      position: absolute;
      top: 50%;
      bottom: 50%;
      right: 50%;
      left: 17%;
      // animation: move-away-5 1s ease ;
      transform: translate(-50%, 20%);
      transition: all .5s ease;

      &:hover .scale-card {
        transform: scale(1.5);
      }
    }

    &:nth-of-type(4) {
      position: absolute;
      top: 50%;
      bottom: 10%;
      right: 50%;
      left: 50%;
      transform: translate(1%, 70%);
      transition: all .5s ease;
      
      &:hover .scale-card {
        transform: scale(1.5);
      }
    }

     &:nth-of-type(7) {
      position: absolute;
      top: 0%;
      bottom: 50%;
      right: 50%;
      left: 50%;
      transform: translate(90%, -50%);
      transition: all .5s ease;
     
      &:hover .scale-card {
        transform: scale(1.5);
      }
    }

    &:nth-of-type(2) {
      position: absolute;
      top: 10%;
      bottom: 50%;
      right: 50%;
      left: 70%;
      transform: translate(100%, -50%);
      transition: all 1s ease;

      &:hover .scale-card {
        transform: scale(1.5);
      }
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
      // top: 50%;
      // bottom: 50%;
      // right: 50%;
      // left: 20%;
      // transform: translate(-50%, -50%);
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
      // position: absolute;
      // top: 50%;
      // bottom: 50%;
      // right: 50%;
      // left: 80%;
      // transform: translate(-50%, -50%);
      // animation: move-away-2 2s ease 2s both ;
      // transition: all 1s ease ;
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
      // position: absolute;
      // top: 50%;
      // bottom: 50%;
      // left: 65%;
      // transform: translate(-50%, -20%);
      // animation: move-away-5 2s ease 2s both ;
      // transition: all 1s ease .10s;
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
      // top: 50%;
      // bottom: 50%;
      // right: 50%;
      // left: 35%;
      // transform: translate(-50%, -20%);
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
      // top: 30%;
      // bottom: 50%;
      // right: 50%;
      // left: 35%;
      // transform: translate(-50%, -50%);
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
      // position: absolute;
      // top: 30%;
      // bottom: 50%;
      // right: 50%;
      // left: 65%;
      // transform: translate(-50%, -50%);
      // animation: move-away-7 2s ease 2s both ;
      // transition: all 1s ease .4s;
    } 
  }

  @keyframes move-away-1 {
    0% {
      transform: scale(34);
    } 100% {
      // transform: scale(1);
      // position: absolute;
      // top: 50%;
      // bottom: 50%;
      // right: 50%;
      // left: 50%;
      // transform: translate(-50%, -50%);
    } 
  }



  @keyframes empty-scene {
    0% {
      position: 0;
    } 
    100% {
      top: -200%;
    }
  }

  .winning-card {
&-answer {
  position: absolute;
  top: 50%;
  bottom: 50%;
  right: 50%;
  left: 65%;
  transform: translate(-50%, -50%);
  z-index: 200;
  transition: all 1s ease;
}

&-question {
  position: absolute;
  top: 50%;
  bottom: 50%;
  right: 50%;
  left: 35%;
  transform: translate(-50%, -50%);
  z-index: 200;
  transition: all 1s ease;
}
}

.new-canvas {
    animation: empty-scene 1s ease forwards;
  }

</style>





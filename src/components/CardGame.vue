<template>
  <AnswerInputBox @givePoints="pointsCollector" :indexNum="modelIndex" :points="points"  />

  <div class="overflow-hidden position-relative" >
    <v-container v-resize="onResize" color="#fafafa" ref="main" class="ml-auto mr-auto" max-width="1350">
          <v-sheet  color="transparent" class="points">
          
          <v-btn
            @click="newSelection()"
            v-if="cardPicked"
            :block="windowSize.x <= 600"
            width="100%"
            rounded="xs"
            size="small"
            class="mb-1 next-btn"
            color="#303030">
            Next card
          </v-btn>
          <div >
            <v-progress-circular
              v-if="windowSize.x >= 960"
              :model-value="gameProgress"
              rotate="360"
              size="120"
              width="14"
              color="#303030"
            >
              <div  class="d-flex align-center justify-center flex-column mt-n1 game-scoreboard-info">
                <div class="text-body-1">{{ gamePoints }}</div>
                <div class="text-body-1">points</div>
              </div>
            </v-progress-circular>
            <v-btn  v-if="!cardPicked" class="ml-6" @click="reshuffleCards" color="#303030" size="small">Reshuffle</v-btn>
          </div>
      </v-sheet>
      <v-sheet class="position-relative card-container mr-auto ml-auto" height="102vh" color="transparent">
 
        <FlashCard
          class="question-card-top"
          :key="randomCard"
          :hasQuestion="onlyQuestionCardsSingleRandom.type"
          :class="[
            cardPicked === true ? 'winning-card-question' : 'card-question',
            newGame === true ? 'new-canvas' : '',
            startAnimation === true && windowSize.x >= 960 ? 'animation-start' : '',
            startAnimation === true ? 'test' : ''
          ]"
          :mobileSize="true"
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
          :mobileSize="true"
          class="scale-card"
          @mouseover="cardPicked === false ? isRotated[index] = true : null"
          @mouseleave="cardPicked === false ? isRotated[index] = false : null"
          @click="userCardInput(item.id, index); pointsCollector(item.points, index, item.id, item.userInput); cardChoice(index); cardPicked = true; questionAnswerPair(item, onlyQuestionCardsSingleRandom, item.points); isRotated.forEach((value, i, array) => array[i] = true); " 
          :style="{
            transform: isRotated[index] === false ? `translate(-50%, -50%) rotate(${rot[index]}deg)` : ''
          }"
          :question="item.type"
          :svgUrl="item.svgUrl"
          :hasDouble="item.isDouble"
          :hasTriple="item.isTriple"
          :flip="cardSelected[index] === 'not selected' && windowSize.x >= 960"
          :cardColour="item.colour"
          :class="[
            cardSelected[index] === 'answer' ? 'winning-card-answer' : 'card-question',
            cardSelected[index] === 'not selected' ? 'move-cards-away' : '',
            newGame === true ? 'new-canvas' : '',
            startAnimation === true ? 'animation-start' : ''
          ]">
          <template v-slot:h1Title>Question</template>
          <template v-slot:bodyText>{{ item.content }}</template>
          <template v-if="item.isDouble || item.isTriple" v-slot:doubleTriple>{{ item.isDouble ? 'Double' : 'Triple' }}</template>
        </FlashCard>

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

onMounted(() => {
  onResize()
  ctx = gsap.context(() => {
    // Add your animations here
  });
  animationDelay();
})

// Store
const store = useCardStore();

const { 
  onlyQuestionCards, 
  questionAnswerPair 
} = store;

let windowSize = ref({
    x: 0,
    y: 0,
  })

  const onResize = () => {
    windowSize.value = { x: window.innerWidth, y: window.innerHeight }
    return windowSize.value
  }

  const { 
    cardInfo, 
    processStage, 
    addNewQuestion,
    randomCard, 
    onlyQuestionCardsSingleRandom, 
    randomCardAnswers, 
    onlyAnswerCardsSixCards, 
    showAllAnswers, 
    showAllPicks, 
    modelOpenClose,
    gameProgress,
    gamePoints,
    currentQuestion,
    modelIndex
  } = storeToRefs(store);

  // Reactive Variables
  const userInput = ref('');
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

  function pointsCollector(points, i, id, input) {
    if(cardSelected.value[i] != null || input === true) return

    gameProgress.value += 10

    if(!cardInfo.value[id].isDouble && !cardInfo.value[id].isTriple) {
      gamePoints.value += points
    } 

    if(cardInfo.value[id].isDouble) {
      gamePoints.value += points * 2
    }

    if(cardInfo.value[id].isTriple) {
      gamePoints.value += points * 3 
    }

  }

function userCardInput(id, i) {
  if(cardInfo.value[id].userInput === false || cardSelected.value[i] === 'not selected' || modelIndex.value === false) return
  modelOpenClose.value = true
  modelIndex.value = id
}

console.log('ModelOpenClose', modelOpenClose.value, 'model index', modelIndex.value )

function animationDelay() {

  if(windowSize.value.x <= 960) return

  setTimeout(() => {
    startAnimation.value = false;
  }, 1200);
}

function cardChoice(i) {
  if(cardSelected.value[i] != null) return
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
      store.addNewQuestion();
      cardSelected.value.fill(null);
    }, 800)

    setTimeout(() => {
      newGame.value = false;
      cardPicked.value = false;
      store.reshuffleAnswerCard();
      processStage.value = 0;
      startAnimation.value = true;
      animationDelay();
      isRotated.value.fill(false);
    }, 1000);
  }
}

function reshuffleCards() {
  tl.revert();
      newGame.value = false;
      cardPicked.value = false;
      cardSelected.value.fill(null);
      store.reshuffleAnswerCard();
      processStage.value = 0;
      startAnimation.value = true;
      animationDelay();
      isRotated.value.fill(false);
}

// Initial Setup
store.reshuffleAnswerCard();

</script>





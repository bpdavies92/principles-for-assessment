<template>
  <AnswerInputBox @givePoints="pointsCollector" :indexNum="modelIndex"/>
   <v-container class="mobile-game-container position-relative scroll-to-question">
      <v-sheet class="position-fixed next-btn-container pl-6 pr-6">
        <v-btn
            @click="newSelection()"
            v-if="cardPicked"
            block
            rounded="xs"
            size="large"
            class="mb-1 next-btn"
            color="#303030">
              Next card
        </v-btn>
      </v-sheet>
      <v-row >
              <v-col cols="12" sm="6">
                  <FlashCard
                  class="question-card-top "
                  :key="randomCard"
                  :hasQuestion="onlyQuestionCardsSingleRandom.type"
                  :class="[
                      cardPicked === true ? 'winning-card-question' : 'card-question',
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
              </v-col>
              <v-col class="" cols="12" sm="6">
            <v-sheet  color="transparent" class="points">
       
            <div >
              <v-progress-circular
                :model-value="gameProgress"
                rotate="360"
                size="300"
                width="17"
                color="#303030"
              >
                <div  class="d-flex align-center justify-center flex-column mt-n1 game-scoreboard-info">
                  <div class="text-body-1">{{ gamePoints }}</div>
                  <div class="text-body-1">points</div> 
            <v-btn v-if="!cardPicked" class="mt-3" block @click="store.reshuffleCards" color="#303030" size="small">Reshuffle</v-btn>
                </div>
              </v-progress-circular>
   
            </div>
        </v-sheet>
              </v-col>
          </v-row>
          <hr class="mb-6 mt-6"/>
      <v-row>
          <v-col cols="12" xs="12" sm="6" md="4" v-for="(item, index) in onlyAnswerCardsSixCards" :key="index">
   
              <FlashCard
              :key="index"
              :mobileSize="true"
              :dropshadow="5"
              class="scale-card"
              @mouseover="cardPicked === false ? isRotated[index] = true : null"
              @mouseleave="cardPicked === false ? isRotated[index] = false : null"
              @click="goIntro(item.id); userCardInput(item.id, index); store.pointsCollector(item.points, index, item.id, item.userInput); cardChoice(index); cardPicked = true; questionAnswerPair(item, onlyQuestionCardsSingleRandom, item.points); isRotated.forEach((value, i, array) => array[i] = true); "   
              :style="{
                  transform: isRotated[index] === false ? `translate(-50%, -50%) rotate(${rot[index]}deg)` : ''
              }"
              :question="item.type"
              :svgUrl="item.svgUrl"
              :hasDouble="item.isDouble"
              :hasTriple="item.isTriple"
              :flip="cardSelected[index] === 'not selected'"
              :cardColour="item.colour"
              :class="[
                  cardSelected[index] === 'answer' ? 'winning-card-answer' : 'card-question',
                  `scroll-to-answer-${item.id}`
                 
              ]">
              <template v-slot:h1Title>Question</template>
              <template v-slot:bodyText>{{ item.content }}</template>
              <template v-if="item.isDouble || item.isTriple" v-slot:doubleTriple>{{ item.isDouble ? 'Double' : 'Triple' }}</template>
              </FlashCard>
          </v-col>
      </v-row>
   </v-container>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted, onBeforeMount } from 'vue';
import { useCardStore } from '../stores/cardInfo';
import FlashCard from '@/components/FlashCard.vue';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { storeToRefs } from 'pinia';
import { useGoTo } from 'vuetify'
import gsap from 'gsap';

onMounted(() => {
  onResize()
  ctx = gsap.context(() => {
    // Add your animations here
  });
  animationDelay();
})

onBeforeMount(() => {
  modelOpenClose.value = false
  modelIndex.value = null
})

// Store
const store = useCardStore();
const goTo = useGoTo()


const { 
  onlyQuestionCards, 
  questionAnswerPair,
  pointsCollector,
  reshuffleCards
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
    modelIndex, 
    cardSelected, 
    newGame,
    cardPicked,
    startAnimation,
    isRotated
  } = storeToRefs(store);

  // Reactive Variables
  const userInput = ref('');
  const cardInput = ref([false, false, false, false, false, false]);
  const showAllAnswerCards = ref(false);
  const numberAdder = ref(1);
  const winText = ref('winning-card-answer');
  const animationStage = ref(0);
  const main = ref();

// Computed Properties
const rot = computed(() => {
  let differentAngles = [-5, 8, 3, -3, -4, 4, -7];
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

  const goIntro = (id) => {
   return goTo(`.scroll-to-answer-${id}`, { offset: -450, duration: 300, easing: 'easeInOutCubic' })
  }

  const scrollToTop = () => {
   return goTo(".scroll-to-question", { offset: -100, duration: 300, easing: 'easeInOutCubic' })
  }

  scrollToTop()

const userCardInput = async (id, i) => {
  await goTo(`.scroll-to-answer-${id}`, { offset: -450, duration: 300, easing: 'easeInOutCubic' })
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
      goTo('.scroll-to-question', { offset: -100, duration: 300, easing: 'easeInOutCubic' })
      store.addNewQuestion();
      cardSelected.value.fill(null);
    }, 100)

    setTimeout(() => {
      newGame.value = false;
      cardPicked.value = false;
      store.reshuffleAnswerCard();
      processStage.value = 0;
      startAnimation.value = true;
      animationDelay();
      isRotated.value.fill(false);
    }, 300);
  }
}




// Initial Setup
store.reshuffleAnswerCard();

</script>
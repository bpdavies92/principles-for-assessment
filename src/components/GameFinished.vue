<template>
  <v-sheet color="transparent" class="d-flex flex-column justify-center align-center" height="100vh" width="100vw">
    <v-sheet color="transparent" class="position-relative pa-0 mb-n16" width="500" height="500">
      <div width="500px" height="500px"  class="results-title">
        <h2 class="text-h3 send-to-front">Results</h2>
        <h3>Your score: {{ gamePoints }}</h3>
      </div>
      <v-img
      src="../../public/images/shapes/question card title graphic.svg"
      class="position-absolute results-title"
      width="100%"
      height="100%"
      >        
      </v-img>
    </v-sheet>
    <v-sheet
      width="100vw"
      class="d-flex align-center justify-center"
      color="transparent"
    >
      <v-slide-group

        ref="scrollGroup"
        class="ml-auto mr-auto pa-12 mt-n12"
        show-arrows
        center-active
        width="100%"
        mandatory
        selected-class="slide-group-active"
        v-model="window"
      >
        <v-slide-group-item
          v-for="(card, index) in myQuestionAnswers"
          :key="index"
        >
          <v-card
            :class="['ma-4', selectedClass]"
            color="transparent pa-12"
            elevation="0"
            height="200%"
            width="100%"
            @click="toggle"
          >
          <v-sheet color="transparent" class="d-flex">
                <FlashCard
                  class="position-relative mr-auto mr-n6 rotate-card"
                  :question="card[1].type"
                  :svgUrl="card[1].svgUrl"
                  :cardColour="card[1].colour">
                  <template v-slot:h1Title>Question</template>
                  <template v-slot:bodyText>{{ card[1].content }}</template>
                </FlashCard>
                <!-- ANSWER CARD -->
                <FlashCard
                  class="position-relative ml-n6 ml-auto rotate-card"
                  :question="card[0].type"
                  :svgUrl="card[0].svgUrl"
                  :cardColour="card[0].colour">
                  <template v-slot:h1Title>Question</template>
                  <template v-slot:bodyText>
                    {{ card[0].answer ? card[0].answer : card[0].content }}
                  </template>
                </FlashCard>
            </v-sheet>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
    <div class="d-flex justify-center start">
      <div>
        <v-btn  class="mr-3" :disabled="scrollGroup ? scrollGroup.hasNext : false" @click="backCard">Back</v-btn>
      </div>
      <div>
        <v-btn  :disabled="scrollGroup ? !scrollGroup.hasNext : false" @click="nextCard">Next</v-btn>
      </div>
    </div>
    <div class="">
      <v-btn class="mt-12" @click="resetGame" color="#303030">Play another game?</v-btn>
    </div>
  </v-sheet>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useCardStore } from '../stores/cardInfo';
  import { onClickOutside } from '@vueuse/core';
  
  const targetTwo = ref(null);
  const store = useCardStore();
  const window = ref(1)
  const scrollGroup = ref(null)
  
  const { 
    myQuestionAnswers, 
    cardInfo, 
    showAllPicks, 
    gamePoints, 
    gameProgress 
  } = storeToRefs(store);
  
  onClickOutside(targetTwo, (event) => {
    showAllPicks.value = false;
  });
  
  function resetGame() {
    gameProgress.value = 0;
    gamePoints.value = 0;
    myQuestionAnswers.value = [];
  }

  function nextCard() {
    scrollGroup.value.scrollTo('next')
  } 

  function backCard() {
    scrollGroup.value.scrollTo('prev')
  } 

  </script>
  
  <style lang="scss" scoped>
  .restart-btn {
    top: 83%;
    bottom: 50%;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    width: min-content;
  }
  
  .back-img {
    transform: scale(10);
  }
  
  .send-to-back {
    z-index: 1;
  }
  
  .send-to-front {
    z-index: 100;
  }
  
  .heading {
    position: relative;
    display: block;
    flex-grow: 100%;
    transform: translateX(-50%);
    z-index: 1000; /* Ensure it's on top of other elements */
  }
  
  .rotate-card:nth-of-type(1) {
    transform: rotate(-3deg);
    transform-origin: bottom right;
  }
  
  .rotate-card:nth-of-type(2) {
    transform: rotate(4deg);
    transform-origin: bottom left;
  }
  
  .card-grid {
    z-index: 100;
  }
  
  .close-btn {
    z-index: 800;
    position: sticky;
    top: 0%;
    bottom: 5%;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
  }
  
  .background-layer {
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: #303030;
    opacity: 0.6;
  }
  
  .scroll {
    overflow: scroll !important;
  }

  .results-title {
    color: #fafafa;

    &:nth-of-type(0) {
      position: absolute;
      z-index: 200;
      top: 50%;
      bottom: 50%;
      left: 30%;
      right: 50%;
      transform: translate(-50%, -50%);
   
    }

    &:nth-of-type(1) {
      position: absolute;
      z-index: 400;
      top: 56%;
      bottom: 50%;
      left: 64%;
      text-align: left;
      right: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
    }
  }

  </style>
  
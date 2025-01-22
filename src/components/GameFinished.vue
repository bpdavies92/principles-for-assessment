<template>
    <v-sheet 
      color="transparent" 
      class="d-flex justify-center align-center flex-column position-relative mx-auto" 
      height="100vh"
      max-width="1000"
      >

      <template>
  <v-sheet
 
    elevation="8"
    max-width="300"
  >
    <v-slide-group   
    class="ml-auto mr-auto"
      v-model="model"
      selected-class="bg-success"
      show-arrows
      max-width="300"
    >
      <v-slide-group-item
        v-for="n in 15"
        :key="n"
        v-slot="{ isSelected, toggle, selectedClass }"
      >
        <v-card
          :class="['ma-4', selectedClass]"
          color="grey-lighten-1"
          height="200"
          width="100"
          @click="toggle"
        >
          <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <v-icon
                v-if="isSelected"
                color="white"
                icon="mdi-close-circle-outline"
                size="48"
              ></v-icon>
            </v-scale-transition>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

  
      <v-sheet color="transparent" class="ml-6 position-relative">
        <h2 class="text-h3 send-to-front">Results</h2>
        <h3>Your score: {{ gamePoints }}</h3>
        <!-- <v-img
          class="position-absolute top-0 left-0 send-to-back"
          width="1000"
          height="1000"
          src="../../public/images/shapes/question card title graphic.svg"
        ></v-img> -->
      </v-sheet>
  
        <v-slide-group
            v-model="window"
            show-arrows
            class='pa-12 mx-auto'
            min-height='450px'
            max-width='1000'
        >
        <v-slide-group-item
          v-for="(card, index) in myQuestionAnswers" 
          :key="index" 
        >
                  <!-- QUESTION CARD -->
          <v-sheet class="d-flex">
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
        </v-slide-group-item>    
        {{ window }}
     
      </v-slide-group>
   <v-btn @click="nextCard">Next</v-btn>
        <v-btn @click="backCard">Back</v-btn>

  
    </v-sheet>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useCardStore } from '../stores/cardInfo';
  import { onClickOutside } from '@vueuse/core';
  
  const targetTwo = ref(null);
  const store = useCardStore();
  const window = ref(0)
  const model = ref(null)
  
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
    if(window.value === myQuestionAnswers.value.length - 1) {
      window.value = 0
    } else {
      window.value += 1
    }
  } 

    function backCard() {
    if(window.value <= 0) {
      window.value = myQuestionAnswers.value.length -1
    } else {
      window.value =  window.value - 1
    }
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
  </style>
  
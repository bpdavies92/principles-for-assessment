<template>
  <v-sheet v-resize="onResize" color="transparent" class="d-flex flex-column justify-center align-center mb-16 scroll-to-finished" height="min-content" width="100vw">
    <v-sheet color="transparent" class="pa-0 mt-n15" width="100%">
      {{ windowSize.x }}

      <v-sheet class="results-title">
        <h2 class="text-h3 send-to-front">Results</h2>
        <h3 class="text-body-1">Your score: {{ gamePoints }}</h3>
      </v-sheet>
      
    </v-sheet>

    <v-sheet
      width="100vw"
      class="d-flex align-center justify-center"
      color="transparent">

      <v-slide-group
        ref="scrollGroup"
        class="ml-auto mr-auto pa-sm-0"
        :show-arrows="windowSize.x <= 600"
        width="100%"
      >
        <v-slide-group-item
          v-for="(card, index) in myQuestionAnswers"
          :key="index"
        >
          <v-card color="transparent pa-12" elevation="0" class="finish-card">
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

    <div class="d-flex flex-column justify-center align-center mt-0">
      <div class="d-flex">
          <v-btn prepend-icon="mdi-arrow-left" class="mr-3" :disabled="scrollGroup ? !scrollGroup.hasPrev : false" @click="backCard">Back</v-btn>
          <v-btn append-icon="mdi-arrow-right" :disabled="scrollGroup ? !scrollGroup.hasNext : false" @click="nextCard">Next</v-btn>
      </div>
      <div>
        <v-btn class="mt-12" @click="resetGame" color="#303030">Play another game?</v-btn>
      </div>
    </div>
  </v-sheet>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useCardStore } from '../stores/cardInfo';
  import { onClickOutside } from '@vueuse/core';
  import { useGoTo } from 'vuetify'

  const goTo = useGoTo()

  const gameIntro = () => {
    return goTo(".scroll-to-finished", { offset: 0, duration: 300, easing: 'easeInOutCubic' })
  }

  gameIntro()

  onMounted(() => {
    onResize()
    modelOpenClose.value = false
    modelIndex.value = null
  })
  
  const targetTwo = ref(null);
  const store = useCardStore();
  const window = ref(1)
  const scrollGroup = ref(null)
  const windowSize = ref({
    x: 0,
    y: 0
  })

  const onResize = () => {
    windowSize.value = { x: window.innerWidth, y: window.innerHeight }

    return windowSize.value
  }

  const { 
    myQuestionAnswers, 
    cardInfo, 
    showAllPicks, 
    gamePoints, 
    gameProgress,
    modelOpenClose,
    modelIndex,
    cardSelected
  } = storeToRefs(store);
  
  onClickOutside(targetTwo, (event) => {
    showAllPicks.value = false;
  });
  
  function resetGame() {
    gameProgress.value = 0;
    gamePoints.value = 0;
    myQuestionAnswers.value = [];
    cardSelected.value = [null, null, null, null, null, null]
  }

  function nextCard() {
    scrollGroup.value.scrollTo('next')
  } 

  function backCard() {
    scrollGroup.value.scrollTo('prev')
  } 

  const pointsSticker = computed((index) => {
    if(cardInfo.value[index].isDouble) {
      return 'DOUBLE'
    }
  })

  </script>

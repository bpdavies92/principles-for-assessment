<template>
    <v-sheet
      color="transparent"
      class="cards-container cursor-pointer card-mobile"
      :height="cardHeight"
      :width="cardWidth"
      :class="[topCard ? 'top-card' : '']"
    >
      <v-sheet
        color="transparent"
        class="card-inner"
        :class="[flip ? 'flip' : '']"
        :height="cardHeight"
        :width="cardWidth"
      >
        <v-card
          v-resize="onResize"
          class="mx-auto pa-4 overflow-hidden card-front position-relative"
          :height="cardHeight"
          :width="cardWidth"
          rounded="xl"
          :color="cardColour"
          :elevation="dropshadow"
        >

          <v-img
            src="../../public/images/shapes/question card title graphic.svg"
            class="position-absolute question-shape"
            height="300"
            width="300"
            v-if="hasQuestion === 'q'"
          >
            <h3>Question</h3>
          </v-img>
  
          <v-img
            src="../../public/images/shapes/points star.png"
            :height="cardStar"
            :width="cardStar"
            class="position-absolute card-sticker"
            v-if="hasDouble || hasTriple"
          >
            <div class="text-uppercase title">
              <slot name="doubleTriple"></slot>
            </div>
          </v-img>
  
          <v-sheet
            class="pa-md-3 pa-sm-1 d-flex flex-column"
            rounded="xl"
            color="#fafafa"
            height="100%"
          >
            <v-sheet
              v-if="question === 'q'"
              class="title-graphics-corner position-relative"
              :class="[question === 'q' ? 'mb-n10' : '']"
              color="transparent"
            >
              <v-img
                class="title-graphic"
                src="../../public/images/shapes/question card title graphic.svg"
                height="100%"
                width="auto"
              >
                <h3 class="text-h5">
                  <slot name="h1Title"></slot>
                </h3>
              </v-img>
            </v-sheet>
  
            <v-img
              :src="svgUrl"
              :height="`${cardImg}%`"
              
              width="auto"
              class="mr-auto ml-auto"
              :class="{'question-card': hasQuestion === 'q'}"
            ></v-img>
  
            <v-card-text class="mt-n12">
              <p class="text-body-1 card-body-text">
                <slot name="bodyText"></slot>
              </p>
            </v-card-text>
          </v-sheet>
        </v-card>
  
        <v-card
          class="mx-auto pa-4 overflow-hidden card-back"
          height="450px"
          width="330px"
          rounded="xl"
          :color="cardColour"
        >
          <v-sheet
            height="100%"
            color="transparent"
            class="d-flex flex-column justify-space-between align-space-between"
          >
            <v-img
              src="../../public/images/branding/principles for assessment logo.svg"
              width="50%"
              height="auto"
              class="mr-auto ml-auto"
            ></v-img>
  
            <v-img
              src="../../public/images/branding/clt logo with black text.svg"
              width="50%"
              height="auto"
              class="mr-auto ml-auto"
            ></v-img>
          </v-sheet>
        </v-card>
      </v-sheet>
    </v-sheet>
  </template>
  
  <script setup>
  import {ref, computed, onMounted} from 'vue'

  let windowSize = ref({
    x: 0,
    y: 0,
  })

  onMounted(() => {
    onResize()
  })

  const onResize = () => {
    windowSize.value = { x: window.innerWidth, y: window.innerHeight }

    return windowSize.value
  }

  const cardHeight = computed(() => {
        return 450
  })

  const cardWidth = computed(() => {
        return 330
  })

  const cardImg = computed(() => {
    return 60
  })

  const cardStar = computed(() => {
        return 120
  })


  const props = defineProps([
    'svgUrl',
    'cardColour',
    'question',
    'dropshadow',
    'topCard',
    'cardFlip',
    'flip',
    'hasDouble',
    'hasTriple',
    'hasQuestion',
  ]);
  </script>
  
  <style lang="scss" scoped>
  .question-card {
    margin-top: 6rem;
  }

  .title-points {
    font-size: 2rem;
    letter-spacing: 1.5px;
  }
  
  .question-shape {
    top: 0%;
    bottom: 50%;
    left: 35%;
    right: 50%;
    transform: translate(-50%, -50%);
  
    & h3 {
      position: absolute;
      width: 100%;
      top: 59%;
      bottom: 50%;
      left: 71%;
      right: 50%;
      transform: translate(-50%, -50%);
      z-index: 400;
      font-size: 2.2rem;
      letter-spacing: 1.5px;
    }
  }
  
  .clearfix::after {
    content: '';
    clear: both;
    display: table;
  }
  
  .card-sticker {
    top: 0%;
    left: 0%;
  
    & div {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
  
  .cards-container {
    position: absolute;
    perspective: 1000px;
  
    &:hover {
      z-index: 100;
    }
  }

  .card-body-text {
    overflow-wrap: break-word !important;
    word-wrap: break-word;
  }
  
  .card-inner {
    position: relative;
    transform-style: preserve-3d;
    transition: all 1s ease;
    transform-origin: 50% 50%;
    transform: translateZ(0);
    z-index: 1;
  }
  
  .top-card {
    z-index: 1 !important;
  }
  
  .card-front,
  .card-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
  
  .cards-container .flip {
    transform: rotateY(180deg);
  }
  
  .card-back {
    transform: rotateY(180deg);
  }
  
  .title-graphic {
    position: absolute;
    content: '';
    right: 100%;
    left: 0%;
    top: -90%;
    bottom: 0%;
    transform: scale(230%);
    transform: translate(-50, -50);
  }
  
  .title-graphics-corner {
    & .v-img h3 {
      transform: scale(68%);
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      top: 51%;
      bottom: 50%;
      left: 10%;
      right: 50%;
    }
  }


  </style>
  
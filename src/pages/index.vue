<template>
  
      <v-sheet height="100vh" width="100%" color="#fafafa">
        <v-sheet class="position-relative card-container" height="100%" width="100%" color="transparent">

          <!-------- QUESTION CARD ------>

          <FlashCard 
              :class="[cardPicked === true ? 'winning-card-question' : 'card-question']" 
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
              @click="cardChoice(index) ; cardPicked = true, cardsMoveAwayAnimation(index)" 
              :class="
                [
                  cardSelected[index] === 'answer' ? 'winning-card-answer' : 'card-question',
                  cardSelected[index] === 'not selected' ? 'move-cards-away' : ''
                ]"
          >
            <template v-slot:h1Title>Question</template>
            <template v-slot:bodyText>{{item.content}}</template>
          </FlashCard>
        </v-sheet>
      </v-sheet>

</template>

<script setup>
  import { computed, ref } from 'vue';
  import { useCardStore } from '../stores/cardInfo'
  import FlashCard from '@/components/FlashCard.vue'

  const store = useCardStore()
  let cardSelected = ref([null, null, null, null, null, null])
  const winText = ref('winning-card-answer')
  const cardPicked = ref(false)
  const animationStage = ref(0)

  function cardChoice(i) {
    cardSelected.value[i] = 'answer'
    cardSelected.value.forEach((value, index, array) => {
      if(value === null) array[index] = 'not selected'
      console.log(cardSelected.value)
    })
  }

  const cardsMoveAwayAnimation = computed((index) => {
      if(cardSelected.value[index] === 'not selected') {
          return 'move-cards-away'
      } 
  })

  const { 
    cardInfo, 
    onlyQuestionCards, 
    onlyQuestionCardsSingleRandom,
    onlyAnswerCardsSixCards 
  } = store


</script>

<style lang="scss">

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
          transform: translate(15%, -20%);
          scale: scale(0.88, 0.88);
          transition: all 1s ease-in;
        }

         &:nth-of-type(7) {
          position: absolute;
          top: 30%;
          bottom: 50%;
          right: 50%;
          left: 50%;
          transform: translate(15%, -50%);
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
          scale: scale(0.88, 0.88);
          transition: all 1s ease-in;
        } 

        &:nth-of-type(6) {
          position: absolute;
          top: 10%;
          bottom: 50%;
          right: 50%;
          left: 20%;
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
          transform: translate(15%, -20%);
          scale: scale(0.88, 0.88);
          transition: all 1s ease-in;
        }

         &:nth-of-type(7) {
          position: absolute;
          top: 30%;
          bottom: 50%;
          right: 50%;
          left: 50%;
          transform: translate(15%, -50%);
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


</style>





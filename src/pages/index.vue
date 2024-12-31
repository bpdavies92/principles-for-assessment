<template>
  
  <v-sheet height="100vh" width="100vw" color="red">
    <div v-for="(item, index) in onlyQuestionCardsSingleRandom" :key="index">
      <FlashCard :question="item.type" :svgUrl="item.svgUrl" :cardColour="item.colour" >
          <template v-slot:h1Title>Question</template>
          <template v-slot:bodyText>{{item.content}}</template>
      </FlashCard>
    </div>
  </v-sheet>
  
 
</template>

<script setup>
  import { useCardStore } from '../stores/cardInfo'
  import FlashCard from '@/components/FlashCard.vue';

  const store = useCardStore()

  const { cardInfo, onlyQuestionCards, onlyQuestionCardsSingleRandom } = store

  console.log(onlyQuestionCards)
</script>

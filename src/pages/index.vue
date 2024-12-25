<template>
  <div v-for="(item, index) in cardInfo" :key="index">
    <FlashCard :svgUrl="item.svgUrl" :cardColour="item.colour">
        <template v-slot:bodyText>{{item.content}}</template>
    </FlashCard>
  </div>

</template>

<script setup>
  import { useCardStore } from '../stores/cardInfo'
  import FlashCard from '@/components/FlashCard.vue';

  const store = useCardStore()

  const { cardInfo } = store

</script>

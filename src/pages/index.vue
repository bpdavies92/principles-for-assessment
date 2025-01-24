<template>
  <div class="extra-space">
    <GameFinished v-if="gameProgress === 100"/> 
    <CardGame v-if="gameProgress < 100"/>
    <Introduction />
    <Rules />
  </div>
</template>

<script setup>
  import { useCardStore } from '@/stores/cardInfo';
  import { storeToRefs } from 'pinia'

  const store = useCardStore()
  const {
    cardInfo,
    gameProgress
   } = storeToRefs(store)



</script>

<style>
.extra-space {
  margin-top: -4rem;
}
</style>
<template>
    <v-overlay v-model="showAllAnswers" class="overflow-scroll d-flex justify-center scroll">
        <v-container class="position-relative card-grid d-flex" max-width="1200"  width="100%" height="auto">
          
            <v-row class=""> 
                
                <v-col v-for="(card, index) of onlyAnswerCards" :key="index" cols="12" sm="4">
                    <FlashCard
                        class="position-relative mr-auto ml-auto"
                        :question="card.type"
                        :svgUrl="card.svgUrl"
                        :cardColour="card.colour"
                        :flip="flipOrNot[index]"
                        @click="flipOrNot[index] = !flipOrNot[index]"
                    >
                        <template v-slot:h1Title>Question</template>
                        <template v-slot:bodyText>{{card.content}}</template>
                    </FlashCard>
                </v-col>
             
            </v-row>
            
        </v-container>
        <v-btn prepend-icon="mdi-close" @click="showAllAnswers = false" class="close-btn">Close</v-btn>
    </v-overlay>
<div  @click="showAllAnswers = false" class="background-layer position-relative"></div>



</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useCardStore } from '../stores/cardInfo.js'
import FlashCard from './FlashCard.vue';
import { storeToRefs } from 'pinia';

const store = useCardStore()

const {showAllAnswers} = storeToRefs(store)

const {
    cardInfo, 
    onlyAnswerCards,
} = useCardStore()

const flipOrNot = ref(Array(cardInfo.length).fill(false))

</script>

<style lang="scss" scoped>

.card-grid {
    z-index: 100;
}

.close-btn {
    z-index: 800;
    position: sticky;
    top: 0%;
    bottom: 0%;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
}

.background-layer {
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: #303030;
    opacity: .2;
}

.scroll {
    overflow: scroll !important;
}
</style>
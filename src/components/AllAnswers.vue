<template>
    <v-overlay v-model="showAllAnswers" class="overflow-scroll d-flex justify-center scroll">
        <v-container class="position-relative card-grid d-flex" max-width="1200"  width="100%" height="auto">
            <v-icon class="position-fixed top-0 left-0" @click="overlay = false" icon="mdi-plus">Close</v-icon>
            
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
    </v-overlay>
<div class="background-layer"></div>

</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useCardStore } from '../stores/cardInfo.js'
import FlashCard from './FlashCard.vue';

const {
    cardInfo, 
    onlyAnswerCards,
    showAllAnswers
} = useCardStore()

const flipOrNot = ref(Array(cardInfo.length).fill(false))

</script>

<style lang="scss" scoped>

.card-grid {
    z-index: 100;
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
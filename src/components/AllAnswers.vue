<template>
    <v-overlay width="100vw" v-model="showAllAnswers" class="d-flex justify-center">
        <v-sheet height="100vh" width="99.5vw" color="transparent" class="overflow-y-scroll overflow-x-none curser-none">
            <v-container  class="position-relative card-grid d-flex mt-12 mb-12" max-width="1200"  width="100%" height="auto">
            
                <v-row  ref="target">
                    <v-col v-for="(card, index) of onlyAnswerCards" :key="index" cols="12" sm="4">
                        <FlashCard
                            class="position-relative mr-auto ml-auto"
                            :question="card.type"
                            :svgUrl="card.svgUrl"
                            :hasTriple="card.isTriple"
                            :hasDouble="card.isDouble"
                            :cardColour="card.colour"
                            :flip="flipOrNot[index]"
                            @click="flipOrNot[index] = !flipOrNot[index]"
                        >
                            <template v-slot:h1Title>Question</template>
                            <template v-slot:bodyText>{{card.content}}</template>
                            <template v-if="card.isDouble || card.isTriple" v-slot:doubleTriple>{{ card.isDouble ? 'Double' : 'Triple' }}</template>
                        </FlashCard>
                    </v-col>
                </v-row>
            </v-container>
            <div class="background-layer position-fixed"></div>
        </v-sheet>
        <v-btn prepend-icon="mdi-close" @click="showAllAnswers = false" class="close-btn">Close</v-btn>
    </v-overlay>



</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { onClickOutside } from '@vueuse/core'
import { useCardStore } from '../stores/cardInfo.js'
import FlashCard from './FlashCard.vue';
import { storeToRefs } from 'pinia';

const store = useCardStore()

const target = ref(null)

const {showAllAnswers} = storeToRefs(store)

onClickOutside(target, event => showAllAnswers.value = false)

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
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: #303030;
    opacity: .6;
}

.scroll {
    overflow: scroll !important;
}
</style>
<template>
    <v-overlay v-model="myPicks" class="overflow-scroll d-flex justify-center scroll">
        <v-container class="position-relative card-grid d-flex" max-width="1200"  width="100%" height="auto">
            <v-icon class="position-fixed top-0 left-0" @click="overlay = false" icon="mdi-plus">Close</v-icon>
            
            <v-row class="">
                <v-col v-for="(card, index) of myQuestionAnswers" :key="index" cols="12" sm="4">
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
    import { useCardStore } from '../stores/cardInfo'
    import { storeToRefs } from 'pinia';

    const store = useCardStore()

    const { myQuestionAnswers, cardInfo } = storeToRefs(store)
</script>
<template>
        <v-sheet  color="transparent" class="overflow-y-hidden overflow-x-scroll curser-none" height="100vh">
                <v-sheet class="d-flex align-center justify-start ml-12" height="100%" >
                    <v-sheet class="d-flex mr-16 align-center justify-center" v-for="(card, index) of myQuestionAnswers" :key="index" >
                            
                            <!-- QUESTION CARD -->
                            <FlashCard
                                class="position-relative mr-auto mr-n6 rotate-card"
                                :question="card[1].type"
                                :svgUrl="card[1].svgUrl"
                                :cardColour="card[1].colour"
                            >
                                <template v-slot:h1Title>Question</template>
                                <template v-slot:bodyText>{{card[1].content}}</template>
                            </FlashCard>

                            <!-- ANSWER CARD -->
                            <FlashCard
                                class="position-relative ml-n6 ml-auto rotate-card"
                                :question="card[0].type"
                                :svgUrl="card[0].svgUrl"
                                :cardColour="card[0].colour"
                            >
                                <template v-slot:h1Title>Question</template>
                                <template v-slot:bodyText>{{card[0].answer ? card[0].answer : card[0].content}}</template>
                            </FlashCard>
                       
                    </v-sheet>
                </v-sheet>
         
            <div class="background-layer position-fixed"></div>
        </v-sheet>
        <v-btn prepend-icon="mdi-close" @click="showAllPicks = false" class="close-btn">Close</v-btn>

</template>

<script setup>
    import { useCardStore } from '../stores/cardInfo'
    import { onClickOutside } from '@vueuse/core'
    import { storeToRefs } from 'pinia';
    import {ref} from 'vue'
    
    const targetTwo = ref(null)
    const store = useCardStore()

    const { myQuestionAnswers, cardInfo, showAllPicks } = storeToRefs(store)

    onClickOutside(targetTwo, event => showAllPicks.value = false)

</script>

<style lang="scss" scoped>

.rotate-card:nth-of-type(1) {
    transform: rotate(-3deg);
    transform-origin: bottom right;
}

.rotate-card:nth-of-type(2) {
    transform: rotate(4deg);
    transform-origin: bottom left;
}

.card-grid {
    z-index: 100;
}

.close-btn {
    z-index: 800;
    position: sticky;
    top: 0%;
    bottom: 5%;
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
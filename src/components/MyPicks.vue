<template>
    <v-overlay v-model="showAllPicks" class="d-flex flex-column align-center">
        <v-sheet height="100vh" width="99vw" color="transparent" class="overflow-y-scroll overflow-x-hidden curser-none">
            <v-container  ref="targetTwo" class="position-relative card-grid mb-12 mt-12" max-width="800"  width="100%" height="auto">
                <v-icon class="position-fixed top-0 left-0" @click="overlay = false" icon="mdi-plus">Close</v-icon>
                <v-row v-for="(card, index) of myQuestionAnswers" :key="index">
                    <v-col  cols="12" md="6">
                        <FlashCard
                            class="position-relative mr-auto ml-auto"
                            :question="card[1].type"
                            :svgUrl="card[1].svgUrl"
                            :cardColour="card[1].colour"
                           
                        >
                            <template v-slot:h1Title>Question</template>
                            <template v-slot:bodyText>{{card[1].content}}</template>
                        </FlashCard>
                    </v-col>
                    <v-col  cols="12" md="6">
                        <FlashCard
                            class="position-relative mr-auto ml-auto"
                            :question="card[0].type"
                            :svgUrl="card[0].svgUrl"
                            :cardColour="card[0].colour"
                            :hasDouble="card[0].isDouble"
                            :hasTriple="card[0].isTriple"
                        >
                            <template v-slot:h1Title>Question</template>
                            <template v-slot:bodyText>{{card[0].answer ? card[0].answer : card[0].content}}</template>
                            <template v-if="card[0].isDouble || card[0].isTriple" v-slot:doubleTriple>{{ card[0].isDouble ? 'Double' : 'Triple' }}</template>
                        </FlashCard>
                    </v-col>
                </v-row>
            </v-container>
            <div class="background-layer position-fixed"></div>
        </v-sheet>
        <v-btn color="#303030" prepend-icon="mdi-close" @click="showAllPicks = false" class="close-btn">Close</v-btn>
    </v-overlay>

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
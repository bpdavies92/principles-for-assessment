<template>
        <v-sheet  color="transparent" class="overflow-y-hidden overflow-x-scroll d-flex flex-column justify-center align-start" height="100vh" >
  
      
                     
                    <v-sheet color="transparent" class="ml-6 position-relative">
                        <h2 class="text-h3 send-to-front">Results</h2>
                        <h3>{{gamePoints}}</h3>
                        <v-img
                        class="position-absolute top-0 left-0 send-to-back"
                        width="1000"
                        height="1000"
                        src="../../public/images/shapes/question card title graphic.svg"
                        ></v-img>
                    </v-sheet>
                    <v-sheet color="transparent" class="d-flex ml-12 align-center justify-start flex-row">
                        
                        <v-sheet color="transparent" height="min-content" class="d-flex mr-16 align-center justify-center test" v-for="(card, index) of myQuestionAnswers" :key="index" >
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
   

        </v-sheet>

</template>

<script setup>
    import { useCardStore } from '../stores/cardInfo'
    import { onClickOutside } from '@vueuse/core'
    import { storeToRefs } from 'pinia';
    import {ref} from 'vue'
    
    const targetTwo = ref(null)
    const store = useCardStore()

    const { myQuestionAnswers, cardInfo, showAllPicks, gamePoints } = storeToRefs(store)

    onClickOutside(targetTwo, event => showAllPicks.value = false)

</script>

<style lang="scss" scoped>
.back-img {
    transform: scale(10);
}

.send-to-back {
z-index: 1;
}

.send-to-front {
    z-index: 100;
}

.heading {
  position: relative;
  display: block;
  flex-grow: 100%;
  transform: translateX(-50%);
  z-index: 1000; /* Ensure it's on top of other elements */
}

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
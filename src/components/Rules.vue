<template>
        <v-sheet color="#7859a3" height="100%" min-width="100vw" class="pa-12 d-flex justify-center position-relative align-center scroll-to-rules brint-to-top">
            <v-img v-for="(item, index) in onlyNineImages" :key="index" class="position-absolute rules-images"
                        :src='item'
                        height="auto"
                        width="70"
                        cover
                        ></v-img>
            <v-container class="mr-auto ml-auto">

                <v-sheet width="700" color="#fafafa" class="mr-auto ml-auto pa-6" rounded="xl">
                    <h2 class="text-h2 mb-3">Rules</h2>
                    
                    <v-list lines="3" height="min-content" bg-color="transparent" class="rules">
                        <v-list-item>
                            1. Read out a question one at a time. As a team, discuss and choose the most suitable answer
                        </v-list-item>
                        <v-list-item>
                            2. Only one answer per question. You cannot change your answer, once a card is played - it’s locked in, so choose wisely
                        </v-list-item>
                        <v-list-item>
                            3. Select the next question and repeat the process with the remaining answers
                        </v-list-item>
                        <v-list-item>
                             4. You can write on some cards to earn double or triple points!
                        </v-list-item>
                        </v-list>
                    </v-sheet>
                </v-container>
        </v-sheet>

</template>

<script setup>
import { useCardStore } from '../stores/cardInfo'

const { onlyNineImages } = useCardStore()

</script>

<style lang="scss">

.bring-to-top {
    z-index: 700;
}
  

.rules {
    font-size: 2rem;

    &-images:nth-child(1) {
        left: 20%;
        transform:translate(-50%, -50%);
        animation: wiggle 15s ease-in-out 5s infinite both;
    }

    &-images:nth-child(2) {
        left: 80%;
        animation: wiggle 15s ease-in-out 3s infinite both;
    }

    &-images:nth-child(3) {
        left: 80%;
        top: 80%;
        animation: wiggle 15s ease-in-out 1s infinite both;
    }

    &-images:nth-child(4) {
        left: 50%;
        top: 10%;
        animation: wiggle 15s ease-in-out infinite both;
    }

    &-images:nth-child(5) {
        left: 20%;
        top: 10%;
        animation: wiggle 15s ease-in-out infinite both;
    }

    &-images:nth-child(6) {
        left: 80%;
        top: 10%;
        animation: wiggle 15s ease-in-out infinite both;
    }

    &-images:nth-child(7) {
        left: 52%;
        top: 86%;
        animation: wiggle 15s ease-in-out infinite both;
    }

    &-images:nth-child(8) {
        left: 24%;
        top: 90%;
        animation: wiggle 15s ease-in-out infinite both;
    }

    &-images:nth-child(9) {
        left: 20%;
        top: 90%;
        animation: wiggle 15s ease-in-out infinite both;
    }
}

@keyframes wiggle {
    0% {
        transform: translateY(0px) rotate(0deg);
    }
    25% {
        transform: translateY(18px) rotate(12deg);
    }
    50% {
        transform: translateY(25px) rotate(-15deg);
    }
    75% {
        transform: translateY(18px) rotate(12deg);
    }
    100% {
        transform: translateY(0px) rotate(0deg);
    }
}


</style>


<!-- 1. Read out a question one at a time. As a team, discuss and choose the most suitable answer
2. Only one answer per question. You cannot change your answer, once a card is played - it’s locked in, so choose wisely
3. Select the next question and repeat the process with the remaining answers
4. You can write on some cards to earn double or triple points! -->


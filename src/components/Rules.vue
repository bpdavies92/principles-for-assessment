<template>
        <v-sheet color="#ffd33c" min-height="100vh" min-width="100vw" class="d-flex justify-center position-relative align-center">
            <v-img v-for="(item, index) in onlyNineImages" :key="index" class="position-absolute rules-images"
                        :src='item'
                        height="70"
                        width="70"
                        cover
                        ></v-img>
            <v-container class="mr-auto ml-auto">

                <v-sheet width="700" class="mr-auto ml-auto">
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

.rules {
    font-size: 2rem;

    &-images:nth-child(1) {
        left: 20%;
        transform:translate(-50%, -50%);
    }

    &-images:nth-child(2) {
        left: 80%;
    }

    &-images:nth-child(3) {
        left: 80%;
        top: 80%
    }
}



</style>


<!-- 1. Read out a question one at a time. As a team, discuss and choose the most suitable answer
2. Only one answer per question. You cannot change your answer, once a card is played - it’s locked in, so choose wisely
3. Select the next question and repeat the process with the remaining answers
4. You can write on some cards to earn double or triple points! -->

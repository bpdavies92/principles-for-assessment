<template>
        <v-sheet color="#7859a3" height="100%" min-width="100vw" class="pa-12 d-flex justify-center position-relative align-center scroll-to-rules brint-to-top">
            <div class="sticker-img-container">
                <v-img v-for="(item, index) in imageStickerUrls" :key="index" class="position-absolute rules-images"
                            :src='item'
                            height="auto"
                            width="70"
                            cover
                            ></v-img>
            </div>
            <v-container class="mr-auto ml-auto ">

                <v-sheet max-width="800" class="mr-auto ml-auto pa-6 " rounded="xl">
                    <h2 class="text-h2 mb-3">Rules</h2>
                    
                    <v-list lines="three" height="min-content" class="rules ">
                        <v-list-item color="#fafafa" class="rules-top">
                            <div class="list-layout">
                                <div class="number"><span>1</span></div> <div class="number-2">Read out a question one at a time. As a team, discuss and choose the most suitable answer</div>
                            </div>
                        </v-list-item>
                        <v-list-item color="#fafafa" class="rules-top">
                            <div class="list-layout">
                                <div class="number"><span>2</span></div> <div class="number-2">Only one answer per question. You cannot change your answer, once a card is played - it’s locked in, so choose wisely</div>
                            </div>
                        </v-list-item>
                        <v-list-item color="#fafafa">
                            <div class="list-layout">
                                <div class="number"><span>3</span></div> <div class="number-2">Select the next question and repeat the process with the remaining answers</div>
                            </div>
                        </v-list-item>
                        <v-list-item color="#fafafa">
                             <div class="list-layout">
                                 <div class="number"><span>4</span></div> <div class="number-2">You can write on some cards to earn double or triple points!</div>
                             </div>
                        </v-list-item>
                        </v-list>
                    </v-sheet>
                </v-container>
        </v-sheet>

</template>

<script setup>
import { useCardStore } from '../stores/cardInfo'
import {ref} from 'vue'

const { onlyNineImages } = useCardStore()

const imageStickerUrls = ref([
    '../../public/images/sticker images/assessment support sesh.svg',
    '.../../public/images/sticker images/learning outcomes.svg',
    '../../public/images/sticker images/maximise.svg',
    '../../public/images/sticker images/peer assessment.svg',
    '../../public/images/sticker images/work placement.svg',
    '../../public/images/sticker images/work with.svg',
    '../../public/images/sticker images/students understand critera.svg'
])

</script>

<style lang="scss">

.rules-top {
    z-index: 399;
}

.sticker-img-container {
    z-index: 300;
}

.bring-to-top {
    z-index: 700;
}

.list-layout {
    display: flex;
}

.number {
    z-index: 2;
    color: #fafafa;
    flex-basis: 10%;
    justify-items: center;
    margin-right: 1rem;

    &  span { 
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    width: 4rem;
    background-color: #7859a3;
    border-radius: 50%;
    }

    &-2 {
        flex-basis: 90%;
    }
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


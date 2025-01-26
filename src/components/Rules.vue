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

                <v-sheet  class="mr-auto ml-auto pa-md-6 pa-sm-1 rules-container" rounded="xl">
                    <h2 class="text-h2 mb-3 ml-sm-3 mt-3 ml-3">Rules</h2>
                    
                    <v-list bg-color="transparent" lines="three" height="min-content" class="rules pa-0">
                        <v-list-item color="#fafafa" class="rules-top">
                            <div class="list-layout">
                                <div class="number"><span>1</span></div> <div class="number-2">Read out a question one at a time. As a team, discuss and choose the most suitable answer</div>
                            </div>
                        </v-list-item>
                        <v-list-item class="rules-top">
                            <div class="list-layout">
                                <div class="number"><span>2</span></div> <div class="number-2">Only one answer per question. You cannot change your answer, once a card is played - it’s locked in, so choose wisely</div>
                            </div>
                        </v-list-item>
                        <v-list-item>
                            <div class="list-layout">
                                <div class="number"><span>3</span></div> <div class="number-2">Select the next question and repeat the process with the remaining answers</div>
                            </div>
                        </v-list-item>
                        <v-list-item>
                             <div class="list-layout">
                                 <div class="number"><span>4</span></div> <div class="number-2">You can write on some cards to earn double or triple points!</div>
                             </div>
                        </v-list-item>
                        </v-list>
                    </v-sheet>
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


</style>


<!-- 1. Read out a question one at a time. As a team, discuss and choose the most suitable answer
2. Only one answer per question. You cannot change your answer, once a card is played - it’s locked in, so choose wisely
3. Select the next question and repeat the process with the remaining answers
4. You can write on some cards to earn double or triple points! -->


<template>
    <v-sheet 
        color="#7859a3" 
        height="100%" 
        class="pa-6 d-flex overflow-hidden justify-center position-relative align-center scroll-to-rules brint-to-top"
    >
        <v-sheet 
            color="#fafafa" 
            class="mr-auto ml-auto pa-md-6 pa-sm-3 rules-container" 
            rounded="xl"
        >
        
            <h2 class="text-h2">Rules</h2>

            <v-list 
                bg-color="transparent" 
                lines="three"   
                height="min-content" 
                class="rules"
            >
                <v-list-item color="#fafafa" class="rules-top">
                    <div class="list-layout">
                        <div class="number"><span>1</span></div>
                        <div>
                            <span style="background-color: #fafafa;">
                                Read out a question one at a time. As a team, discuss and choose the most suitable answer
                            </span>
                        </div>
                    </div>
                </v-list-item>

                <v-list-item class="rules-top">
                    <div class="list-layout">
                        <div class="number"><span>2</span></div>
                        <div>
                            <span style="background-color: #fafafa;">
                                Only one answer per question. You cannot change your answer, once a card is played - it’s locked in, so choose wisely
                            </span>
                        </div>
                    </div>
                </v-list-item>

                <v-list-item class="rules-top">
                    <div class="list-layout">
                        <div class="number"><span>3</span></div>
                        <div>
                            <span style="background-color: #fafafa;">
                                Select the next question and repeat the process with the remaining answers
                            </span>
                        </div>
                    </div>
                </v-list-item>

                <v-list-item class="rules-top">
                    <div class="list-layout">
                        <div class="number"><span>4</span></div>
                        <div>
                            <span style="background-color: #fafafa; z-index: 9999;">
                                You can write on some cards to earn double or triple points!
                            </span>
                        </div>
                    </div>
                </v-list-item>
            </v-list>
        </v-sheet>

        <div class="sticker-img-container">
            <v-img 
                v-for="(item, index) in imageStickerUrls" 
                :key="index" 
                class="position-absolute rules-images"
                :src="item"
                height="auto"
                width="70"
                cover
                alt=""
            ></v-img>
        </div>
    </v-sheet>
</template>

<script setup>
import { useCardStore } from '../stores/cardInfo';
import { ref } from 'vue';

const { onlyNineImages } = useCardStore();
const envLink = import.meta.env.VITE_LINK;

const imageStickerUrls = ref([
    `${envLink}/images/sticker images/assessment support sesh.svg`,
    `${envLink}/images/sticker images/learning outcomes.svg`,
    `${envLink}/images/sticker images/maximise.svg`,
    `${envLink}/images/sticker images/peer assessment.svg`,
    `${envLink}/images/sticker images/work placement.svg`,
    `${envLink}/images/sticker images/work with.svg`,
    `${envLink}/images/sticker images/students understand critera.svg`
]);
</script>

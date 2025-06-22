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
        
            <h2 class="text-h2">How to play</h2>

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
Participants are divided into small table groups. Each group is supported by a facilitator (can be another student or peer) who acts as the card dealer.
                            </span>
                        </div>
                    </div>
                </v-list-item>

                <v-list-item class="rules-top">
                    <div class="list-layout">
                        <div class="number"><span>2</span></div>
                        <div>
                            <span style="background-color: #fafafa;">
                              Each group receives a set of answer cards related to a specific subject area. Some cards contain more accurate or appropriate answers than others.
                            </span>
                        </div>
                    </div>
                </v-list-item>

                <v-list-item class="rules-top">
                    <div class="list-layout">
                        <div class="number"><span>3</span></div>
                        <div>
                            <span style="background-color: #fafafa;">
                                The facilitator reads out five key questions, one at a time, to the group. Each question relates to assessment design and strategy.
                            </span>
                        </div>
                    </div>
                </v-list-item>

                <v-list-item class="rules-top">
                    <div class="list-layout">
                        <div class="number"><span>4</span></div>
                        <div>
                            <span>
                            For every question:
                                <v-list variant='dense' color='transparent'>
                                        <v-list-item>a. Review: Participants have 2 minutes to look through the answer cards</v-list-item>
                                        <v-list-item>b. Choose: As a group, they pick the single most appropriate answer card</v-list-item>
                                        <v-list-item>c. (Optional) Justify: Groups can add short notes or justifications using sticky notes</v-list-item>
                                </v-list>
                            </span>
                        </div>
                    </div>
                </v-list-item>
                  <v-list-item class="rules-top">
                    <div class="list-layout">
                        <div class="number"><span>5</span></div>
                        <div>
                            <span style="background-color: #fafafa; z-index: 9999;">
                               Once the answer is selected, hand the card (and any sticky notes) back to the facilitator.
                            </span>
                        </div>
                    </div>
                </v-list-item>
                  <v-list-item class="rules-top">
                    <div class="list-layout">
                        <div class="number"><span>6</span></div>
                        <div>
                            <span style="background-color: #fafafa; z-index: 9999;">
                             The facilitator proceeds to the next question, and the process repeats until all five have been completed.

                            </span>
                        </div>
                    </div>
                </v-list-item>
                  <v-list-item class="rules-top">
                    <div class="list-layout">
                        <div class="number"><span>7</span></div>
                        <div>
                            <span style="background-color: #fafafa; z-index: 9999;">
                                Some answer cards may be marked as double or triple points — but points are only awarded if they are used in a relevant and appropriate way.
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

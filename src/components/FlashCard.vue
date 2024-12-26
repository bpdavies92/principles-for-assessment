<template>
    <v-card
        class="mx-auto pa-4 overflow-hidden"
        height="450px"
        width="330px"
        rounded="xl"
        :color="cardColour"
    >
            <v-sheet class="pa-3 d-flex flex-column" rounded='xl' color="#fafafa" height="100%" >

                <v-sheet v-if="question === 'q'" class="title-graphics-corner position-relative" :class="[question === 'q' ? 'mb-n10' : '']" color="transparent">
                    
                    <v-img 
                        class="title-graphic" 
                        src="../../public/images/shapes/question card title graphic.svg" 
                        height="100%"
                        width="auto">
                        <h3 class="text-h5"><slot name="h1Title"></slot></h3>
                    </v-img>
                </v-sheet>
                
                <v-img
                :src="svgUrl"
                width="80%"
                height="auto"
                class="mr-auto ml-auto"
                >
                </v-img>
                <v-card-text class="">
                    <p class="text-body-2"><slot name="bodyText"></slot></p>
                </v-card-text>
            </v-sheet>
    </v-card>
</template>

<script setup>
    const props = defineProps(['svgUrl', 'cardColour', 'question'])
</script>

<style>
    .title-graphic {
        position: absolute;
        content: '';
        right: 100%;
        left: 0%;
        top: -90%;
        bottom: 0%;     
        transform: scale(230%);
        transform: translate(-50, -50);

    }

    .title-graphics-corner {
       
        & .v-img h3 {  
            transform: scale(68%);
            position: absolute;
            content: '';
            width: 100%;
            height: 100%;
            top: 51%;
            bottom: 50%; 
            left: 10%;
            right:50%; 
            /* transform: translate(-50%, -50%); */
        }
    }
</style>
<template>
    <v-card
        class="mx-auto pa-4"
        height="450px"
        width="330px"
        rounded="xl"
        :color="cardColour"
    >
            <v-sheet class="pa-3 d-flex flex-column" rounded='xl' color="#fafafa" height="100%" >

                <v-sheet class="title-graphics-corner" color="transparent">
                <h3 class="position-absolute">dkjfalkdsjfaklj</h3>
                <v-img class="title-graphic" src="../../public/images/shapes/question card title graphic.svg" height="100%" width="auto">
                <h3>fjalfjakdfj</h3>
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
    const props = defineProps(['svgUrl', 'cardColour'])
</script>

<style>
    .title-graphic {
        position: absolute;
        right: 0;
        left: -10%;
        top: -40%;
        bottom: 0%;     
    }

    .title-graphics-corner {
        
    }
</style>
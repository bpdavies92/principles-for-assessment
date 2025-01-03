<template>
            <v-sheet color="transparent" class="cards-container"   height="450px" width="330px" :class="[topCard ? 'top-card' : '']" >
                <v-sheet color="transparent" class="card-inner" :class="{flip, flip}" height="450px" width="330px">
                    <v-card
                        class="mx-auto pa-4 overflow-hidden card-front"
                        height="450px" 
                        width = "330px"
                        rounded="xl"
                        :color="cardColour"
                        :elevation="dropshadow"
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
                                    <p class="text-body-1"><slot name="bodyText"></slot></p>
                                </v-card-text>
                            </v-sheet>
                    </v-card>
                    <v-card
                        class="mx-auto pa-4 overflow-hidden card-back"
                        height="450px" 
                        width = "330px"
                        rounded="xl"
                        :color="cardColour"
                    >
                            <v-sheet height="100%" color="transparent" class="d-flex flex-column justify-space-between align-space-between">
                                <v-img
                                src="../../public/images/branding/principles for assessment logo.svg"
                                width="50%"
                                height="auto"
                                class="mr-auto ml-auto"
                                >
                                </v-img>
                                <v-img
                                src="../../public/images/branding/clt logo with black text.svg"
                                width="50%"
                                height="auto"
                                class="mr-auto ml-auto"
                                >
                                </v-img>
                            </v-sheet>
                    </v-card>
                </v-sheet>
            </v-sheet>
</template>

<script setup>
    const props = defineProps(['svgUrl', 'cardColour', 'question', 'dropshadow', 'topCard', 'cardFlip', 'flip'])

    console.log('tis the one', props.flip)
</script>

<style lang="scss" scoped>

    .clearfix::after {
        content: "";
        clear: both;
        display: table;
    }

    .cards-container {
    position: absolute; /* This is fine */
    perspective: 1000px; /* Enables 3D flipping */
    &:hover {
    z-index: 100; /* Instantly moves to the top */
    }
    }

    .card-inner {
    position: relative;
    transform-style: preserve-3d;
    transition: all 1s ease;
    transform-origin: 50% 50%; /* Flip from center */
    transform: translateZ(0); /* Triggers GPU rendering */
    z-index: 1;


    }

    .top-card {
        z-index: 1 !important;
    }

    .card-front, .card-back {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
    }

    // .cards-container:hover .flip {
    // // transition: all 1s ease;
    // transform: rotateY(180deg); /* Flip the card */
    // }

    .cards-container .flip {
    // transition: all 1s ease;
    transform: rotateY(180deg); /* Flip the card */
    }


    .card-back {
    transform: rotateY(180deg); /* Back face starts rotated */
    }



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
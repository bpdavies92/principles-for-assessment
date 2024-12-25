<template>
    <v-card
        class="mx-auto pa-4"
        height="450px"
        width="330px"
        rounded="xl"
        :color="cardColour"
    >
            <v-sheet class="pa-3 d-flex flex-column" rounded='xl' background-color="primary" height="100%" >
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

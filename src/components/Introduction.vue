<template>
    <v-sheet color="#e0d6eb" class="introduction-container overflow-hidden">
        <v-row class="">
            <v-col cols="12" md="6" sm="12" class="pa-0 ma-0">
                <v-parallax
                src="../assets/images/photographs/cards layout out on table.jpg"
                cover
                alt=""
                width="100%"
                height="100%"
                aspect-ratio="16/9"
                ></v-parallax>
            </v-col>
            <v-col cols="12" md="6" sm="12" class="pa-12 d-flex align-center justify-center scroll-to-introduction" >
                <v-sheet max-width="600" color="transparent" height="min-content">
                    <h2 class="text-h2 mb-6">Introduction</h2>
                    <p class="text-body-1">This is not just a game, it’s an opportunity to <strong>reflect</strong>, <strong>learn</strong>, and <strong>innovate</strong> in your approach to assessment
                    </p>
                    <v-img
                    src="../assets/images/branding/principles for assessment logo.svg"
                    class="mr-auto ml-auto mt-12"
                    max-width="500"
                    alt="Principels for Assessment logo"
                    ></v-img>
                </v-sheet>
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script setup>
    import {ref} from 'vue'
    const envLink = ref(import.meta.env.VITE_LINK)
</script>
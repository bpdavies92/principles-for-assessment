<template>

<div class="text-center pa-4">
    <v-dialog
      v-model="dialog"
      max-width="400"
      persistent
    >
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn v-bind="activatorProps">
          Open Dialog
        </v-btn>

      </template>

      <v-card>        
        <v-card-text>
                <v-textarea
                class="pb-1 mb-1"
                clear-icon="mdi-close-circle"
                label="Type your answer"
                model-value="This is clearable text."
                clearable
                ></v-textarea>
        </v-card-text>

        <template v-slot:actions> 

        <v-spacer></v-spacer>
        <v-btn @click="dialog = false">
            Disagree
        </v-btn>

          <v-btn @click="dialog = false">
            Agree
          </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>

</template>

<script setup>
import { useCardStore } from '../stores/cardInfo';
import { storeToRefs } from 'pinia';
import {ref} from 'vue'

const props = defineProps(['userText'])

const store = useCardStore()

const {
    cardInfo
} = storeToRefs(store)

const dialog = ref(true) 

</script>
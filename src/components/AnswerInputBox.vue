<template>

<div class="text-center pa-4">
    <v-dialog
      v-model="modelOpenClose"
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
                v-model="modelText"
                class="pb-1 mb-1"
                clear-icon="mdi-close-circle"
                label="Type your answer"
                clearable
                ></v-textarea>
        </v-card-text>

        <template v-slot:actions> 

        <v-spacer></v-spacer>
          <v-btn @click="updateAnswer">
            Confirm answer
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

const props = defineProps(['userText', 'indexNum'])
const store = useCardStore()
const {
    cardInfo,
    modelOpenClose,
    userInputText
} = storeToRefs(store)

const modelText = ref('')

function updateAnswer() {
  cardInfo.value[props.indexNum].content =  modelText.value + cardInfo.value[props.indexNum].staticText
  modelOpenClose.value = false
}

</script>
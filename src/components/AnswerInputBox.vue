<template>

<div class="text-center pa-4">
    <v-dialog
      v-model="modelOpenClose"
      max-width="400"
      persistent
      class="elevation-8"
    >


      <v-card>        
        <v-card-text>
          <p class="text-body-1 mb-6">Answer the question by typing in the box below</p> 
                <v-textarea
                v-model="modelText"
                class="pb-1 mb-1 text-lowercase"
                clear-icon="mdi-close-circle"
                :label="cardInfo[indexNum].content ? cardInfo[indexNum].content : ''"
                clearable
                ></v-textarea>
        </v-card-text>

        <template v-slot:actions> 

        <v-spacer></v-spacer>
          <v-btn block prepend-icon="mdi-cards" color="#303030" ripple variant="flat" @click="updateAnswer">
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
const emit = defineEmits(['givePoints'])

const store = useCardStore()
const {
    cardInfo,
    modelOpenClose,
    userInputText
} = storeToRefs(store)


const modelText = ref('')

function updateAnswer() {

  if(cardInfo.value[props.indexNum].reverseStaticText === true) {
      cardInfo.value[props.indexNum].answer =  cardInfo.value[props.indexNum].staticText + modelText.value  
  } else {
      cardInfo.value[props.indexNum].answer =  modelText.value + cardInfo.value[props.indexNum].staticText
  }
  modelOpenClose.value = false    
  modelText.value = ''

  emit('givePoints', cardInfo.value[props.indexNum].points, props.indexNum, props.indexNum, false )

  // points, i, id, input

}

</script>
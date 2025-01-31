<template>
         
      <v-list-item  nav>
        <v-btn
          :slim="isSlim"
          :stacked="isStacked"
          :class="{'mb-12 mt-12' : isBlock}"
          :block="isBlock"
          :size="fontSize"
          variant="text"
          @click="goIntro('.scroll-to-introduction')"
          prepend-icon="mdi-cards-playing">
          Introduction
        </v-btn>
      </v-list-item>

      <v-list-item nav>
        <v-btn
          :slim="isSlim"
          :stacked="isStacked"
          :class="{'mb-12 mt-12' : isBlock}"
          :block="isBlock"
          variant="text"
           @click="goIntro('.scroll-to-rules')"
          :size="fontSize"
          prepend-icon="mdi-book-open-blank-variant">
          Rules
        </v-btn>
      </v-list-item>

      <v-list-item nav>
        <v-btn
          :slim="isSlim"
          :stacked="isStacked"
          :class="{'mb-12 mt-12' : isBlock}"
          :block="isBlock"
          variant="text"
           @click="allAnswers"
          :size="fontSize"
          prepend-icon="mdi-cards-playing"
        >
          Answers
        </v-btn>
      </v-list-item>

      <v-list-item nav>
        <v-btn
          :slim="isSlim"
          :stacked="isStacked"
          :class="{'mb-12 mt-12' : isBlock}"
          :block="isBlock"
          variant="text"
          @click="showPicksMenu()"
          :size="fontSize"
          prepend-icon="mdi-heart"
          
        >
          My picks
        </v-btn>
      </v-list-item>
</template>


<script setup>
  import { useCardStore } from '@/stores/cardInfo';
  import { storeToRefs } from 'pinia';
  import { useGoTo } from 'vuetify';
  import { ref } from 'vue';

  const store = useCardStore();
  const goTo = useGoTo();
  const openDownloads = ref(false)

  const props = defineProps(['lines', 'alignText', 'fontSize', 'isBlock', 'isSlim', 'isStacked'])


  const { showAllAnswers, showAllPicks, myQuestionAnswers, drawer } = storeToRefs(store);

  const goIntro = (place) => {
          drawer.value = false

          if(!place) return

          setTimeout(() => {
           return goTo(place, { offset: -60, duration: 300, easing: 'easeInOutCubic' }); 
          }, 10 )
  }

  function showPicksMenu() {
    drawer.value = false

    setTimeout(() => {
    if (myQuestionAnswers.value.length > 0) {
    return  showAllPicks.value = !showAllPicks.value;
    }
    }, 10)

  }

  function allAnswers() {
    drawer.value = false

    setTimeout(() => {
      return showAllAnswers.value = !showAllAnswers.value;
    }, 10)

  }
</script>


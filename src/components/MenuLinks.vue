<template>
    <v-list-item nav>
        <v-btn variant="text" prepend-icon="mdi-download" size="small">
        Download
          <v-menu activator="parent">
          <v-list>
            <v-list-item link>
              <v-list-item-title>Print ready PDF</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-title>PDF</v-list-item-title>
            </v-list-item>
          </v-list>
                </v-menu>
        </v-btn>
      </v-list-item>


      <v-list-item nav>
        <v-btn
          variant="texth"
          @click="$emit('someEvent'); goTo('.scroll-to-introduction', { offset: -60, duration: 300, easing: 'easeInOutCubic' })"
          size="small"
          prepend-icon="mdi-cards-playing"
        >
          Introduction
        </v-btn>
      </v-list-item>

      <v-list-item nav>
        <v-btn
          variant="texth"
          @click="goTo('.scroll-to-rules', { offset: -30, duration: 300, easing: 'easeInOutCubic' })"
          size="small"
          prepend-icon="mdi-book-open-blank-variant"
        >
          Rules
        </v-btn>
      </v-list-item>

      <v-list-item nav>
        <v-btn
          variant="texth"
          @click="showAllAnswers = !showAllAnswers"
          size="small"
          prepend-icon="mdi-cards-playing"
        >
          Answers
        </v-btn>
      </v-list-item>

      <v-list-item nav>
        <v-btn
          variant="texth"
          @click="showPicksMenu()"
          size="small"
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
  const drawer = ref(false)
  const openDownloads = ref(false)

  const { showAllAnswers, showAllPicks, myQuestionAnswers } = storeToRefs(store);

  function showPicksMenu() {
    if (myQuestionAnswers.value.length > 0) {
      showAllPicks.value = !showAllPicks.value;
    }
  }
</script>


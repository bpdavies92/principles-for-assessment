<template>
  <v-app>
    <v-app-bar scroll-behavior="inverted collapse hide" class="position-fixed top-0">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>Principles Towards Assessment</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <router-view class="" />
    </v-main>

    <!-- <AppFooter /> -->
  </v-app>
</template>

<script setup>
  //
</script>

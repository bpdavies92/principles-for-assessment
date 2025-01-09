<template>
  <v-app class="position-relative">
    <v-app-bar  :elevation="0" rounded class="position-fixed mb-n12">
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

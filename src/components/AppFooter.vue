<template>
  <v-footer class="pa-3 footer pa-12" width="1920" color="#303030" app>
      <v-img
      src='../assets/images/branding/clt logo with white text no outline.svg'
      class="footer-img"
      aspect-ratio="16/9"
      alt="Centre for Learning & Teaching logo"
      >
      </v-img>

      <v-img
      src="../assets/images/branding/lbu logo.svg"
      class="footer-img"
      aspect-ratio="16/9" 
      alt="Leeds Beckett University logo"
      >
      </v-img>

  </v-footer>
</template>

<script setup>
  import {ref} from 'vue'

    const envLink = ref(import.meta.env.VITE_LINK)

</script>



<script setup>

// RouterLink代表引入後可以在這個頁面去做超連結
// RouterView則可以顯示畫面

import { RouterView } from 'vue-router'
// import GoBackBtn from './components/GoBackBtn.vue'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  
  <div class="w-full h-screen max-w-[375px] font-semibold mx-auto flex flex-col relative">
    <RouterView />
  </div>

</template>

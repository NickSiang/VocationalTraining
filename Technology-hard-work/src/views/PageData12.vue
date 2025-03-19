<!-- 修改完成 -->

<script setup>
import LogoNav from '../components/LogoNav.vue';

</script>

<template>

    <LogoNav/>

    <main class="flex flex-col items-center justify-center gap-4 h-full">
        <p class="text-center text-black-500 text-2xl font-black">謝謝</p>
    
        <div class="text-center">
            <p class="text-lg font-medium text-black">您的取餐編號是：</p>
            <p id="order-number" class="text-4xl font-bold text-[#FCC305]"></p>
        </div>
    </main>


</template>
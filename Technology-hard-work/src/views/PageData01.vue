<!-- 修改完成 -->

<script setup>
import FirstFooter from '../components/FooterFirst.vue';
</script>

<template>
    <main class="h-full">
        <RouterLink to="/PageData02" class="relative">
            <img src="../assets/img/banner.png" alt="首頁圖片" class="object-cover h-full w-full">
            <div class="absolute bottom-0 w-full h-[30px] flex justify-center items-center  bg-[#1fb549] text-[white]">
                請點擊上方螢幕
            </div>
        </RouterLink>
    </main>

    <FirstFooter/>

</template>


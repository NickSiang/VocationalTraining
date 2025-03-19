<script setup>
import LogoNav from '../components/LogoNav.vue';
import GoBackBtn from '../components/GoBackBtn.vue';
</script>
<template>

    <LogoNav/>
    <GoBackBtn link-name="PageData08" />
    <main class="h-full">
        <!-- 標題文字 -->
        <div class="w-full h-[94px] p-16">
            <p class="text-center text-black-500 text-2xl font-black ">請感應行動支付</p>
        </div>
        <div class="h-[100%] flex justify-center ">
            <!-- 第一張卡 -->
            <div class="w-[284px] h-min flex flex-wrap gap-4">
                <img src="../assets/img/感應.png" alt="行動支付掃描">
            </div>
        </div>
    </main>


</template>
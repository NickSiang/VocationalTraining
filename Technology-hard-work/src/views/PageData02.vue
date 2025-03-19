<!-- 修改完成 -->

<script setup>
import LogoNav from '../components/LogoNav.vue';
import FirstFooter from '../components/FooterFirst.vue';
import CaaspGiep from '../components/CaaspGiep.vue';
</script>

<template>

    <LogoNav/>
    
    <main class="h-full">
        <img src="../assets/img/image 1.png" alt="廣告圖">
        <div class="h-[344px] py-[42px] flex justify-center flex-wrap gap-x-[12px]">
            <h2 class=" p-[10px] text-[18px]">請選擇用餐方式</h2>
            <div class="p-[20px] flex gap-[20px]">
                <div
                    class="card w-[140px] h-[160px] p-[8px] flex flex-col justify-center items-center border rounded-[5px] active:bg-[linear-gradient(144deg,_#FC6405_0%,_#E60013_103.82%)] active:text-white">
                    <RouterLink to="/PageData03" class="flex items-center flex-col">
                        <p>內用</p>
                        <img src="../assets/img/內用.png" alt="內用圖">
                    </RouterLink>
                </div>
                <div
                    class="card w-[140px] h-[160px] p-[8px] flex flex-col justify-center items-center border rounded-[5px] active:bg-[linear-gradient(144deg,_#FC6405_0%,_#E60013_103.82%)] active:text-white">
                    <RouterLink to="/PageData03" class="flex items-center flex-col">
                        <p>外帶</p>
                        <img src="../assets/img/外帶.png" alt="外帶圖">
                    </RouterLink>
                </div>
            </div>
        </div>
    </main>

    <FirstFooter/>


</template>
<script setup>
import LogoNav from '../components/LogoNav.vue';
import GoBackBtn from '../components/GoBackBtn.vue';
import YellowBtn from '../components/YellowBtn.vue';
import LastCard from '../components/LastCard.vue';

import img00 from'../assets/img/購物袋黑.png';
import img01 from'../assets/img/購物袋紅.png';
import img02 from'../assets/img/購物袋.png';

const DataList = [{
    img: img00,
    tittle: '百分百購物袋(黑)',
    text: '$49'
}, 
{
    img: img01,
    tittle: '百分百購物袋(紅)',
    text: '$49'
}, 
{
    img: img02,
    tittle: '塑膠袋',
    text: '$2'
},];


</script>

<template>

    <LogoNav />
    <GoBackBtn link-name="PageData05" />

    <main class="h-full overflow-hidden">

        <div class="w-full h-[94px] p-16">
            <p class="text-center text-black-500 text-2xl font-black ">請問需要購物袋嗎</p>
        </div>


        <div class="h-full flex justify-center ">

            <div class="w-[264px] h-min flex flex-wrap gap-4">
                <!-- 第一張卡 -->
                <LastCard v-for="(item,key) in DataList" :key="key" card-link-name="PageData07" >
                    <img class="w-[100px] " :src="item.img" alt="購物袋黑">
                    <div class="text-center px-2 ">
                        <p class="text-xs font-bold truncate">{{ item.tittle }}</p>
                        <p class="text-[8px] font-medium">{{ item.text }}</p>
                    </div>
                </LastCard>

            </div>
        </div>
    </main>

    <footer>
        <div class="w-full flex justify-center p-5">
            <!-- 連結到你的訂單內容 -->

            <YellowBtn class="w-[140px]" btn-link-name="PageData07">
                不需要,謝謝!
            </YellowBtn>

        </div>


    </footer>


</template>
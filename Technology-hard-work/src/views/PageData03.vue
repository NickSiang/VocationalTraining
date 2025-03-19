<!-- 修改完成 -->
 <!-- 擴充:小捲軸加入不同頁面-->

<script setup>
import LogoNav from '../components/LogoNav.vue';
import FooterSecond from '../components/FooterSecond.vue';
import CardBig03 from '../components/CardBig03.vue';
import CardSmall03 from '../components/CardSmall03.vue';
import YellowBtn from '../components/YellowBtn.vue';

import img0 from '../assets/img/QR.png'
import img00 from '../assets/img/image.png'
import img01 from '../assets/img/image(1).png'
import img02 from '../assets/img/image(2).png'
import img03 from '../assets/img/image(3).png'
import img04 from '../assets/img/image(4).png'
import img05 from '../assets/img/image(5).png'
import img06 from '../assets/img/image(6).png'
import img07 from '../assets/img/image(7).png'



const orderlist = [
    {
        title: '掃描商品券',
        img: img0,
    },
    {
        title: '極選系列',
        img: img00,
    },
    {
        title: '超值全餐',
        img: img01,
    },
    {
        title: '1+1星級點',
        img: img02,
    },
    {
        title: '飲料',
        img: img03,
    },
    {
        title: 'McCafé®',
        img: img04,
    },
    {
        title: '點心',
        img: img05,
    },
    {
        title: '麥當勞分享盒',
        img: img06,
    },
    {
        title: 'Happy Meal®',
        img: img07,
    },
];

const orderlist1 = [
    {},
    {},
    {},
 
    {},
    {},
    {},
    {},
    {},
    {},
]

console.log(orderlist);
</script>

<template>
    <LogoNav class="fixed"/>

    <RouterLink to="/PageData07" class="absolute right-5 top-2 z-10">
        <img src="../assets/img/購物車.png" alt="購物車圖">
    </RouterLink>

    <main class="pt-[75px] flex h-full overflow-hidden">
        <div
            class="w-[88px] overflow-y-scroll scrollbar-none text-[10px] py-3 px-3 pb-[100px] border-r border-black/[0.16] bg-white/50 flex flex-col items-center gap-2">
            <CardSmall03 v-for="(item, key) in orderlist" :key="key">
                <img :src="item.img" alt="商品圖">
                <p>{{ item.title }}</p>
            </CardSmall03>
        </div>

        <div class="w-[287px] p-0 pb-[100px] flex flex-col overflow-y-scroll scrollbar-none">
            <h3 class="w-full h-[68px] text-2xl py-5 px-[10px] flex justify-center items-center gap-[10px]">極選系列
            </h3>

            <div class="flex justify-center flex-wrap gap-3">
                <CardBig03 v-for="(item, key) in orderlist1" :key="key"></CardBig03>
            </div>
            
        </div>
    </main>

    <FooterSecond>
        <YellowBtn btn-link-name="PageData01">取消整筆訂單</YellowBtn>
        <YellowBtn btn-link-name="PageData03">友善模式</YellowBtn>
    </FooterSecond>


</template>

<style scoped>
* {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

::-webkit-scrollbar {
    display: none;
}
</style>
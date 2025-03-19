<script setup>
import LogoNav from '../components/LogoNav.vue';
import GoBackBtn from '../components/GoBackBtn.vue';
import MainCard from '../components/MainCard.vue';
import PackageOptions from '../components/PackageOptions.vue';

import img00 from '../assets/img/Rectangle 46.png';
import img01 from '../assets/img/Rectangle 46 (1).png';
import img02 from '../assets/img/Rectangle 46 (2).png';
import img03 from '../assets/img/Rectangle 46 (3).png';
import img04 from '../assets/img/Rectangle 46 (4).png';
import img05 from '../assets/img/Rectangle 46 (5).png';


const orderlist = [
    {
        img:img00,
        title: '單點',
        text1:'無須加購套餐',
        text2:'',
        price:'0元'
    },
    {
        img:img01,
        title: '經典配餐',
        text1:'中薯+$33冷/熱飲',
        text2:'',
        price:'65元'
    },
    {
        img:img02,
        title: '清爽配餐',
        text1:'四季沙拉(大)',
        text2:'+$33冷/熱飲',
        price:'70元'
    },
    {
        img:img03,
        title: '勁脆配餐',
        text1:'麥脆雞塊一塊(棒腿或',
        text2:'大腿)$33冷/熱飲',
        price:'84元'
    },
    {
        img:img04,
        title: '炫冰配餐',
        text1:'冰炫風(oreo)+小薯',
        text2:'+$33冷/熱飲',
        price:'99元'
    },
    {
        img:img05,
        title: '豪吃配餐',
        text1:'麥可雞塊(六塊)',
        text2:'小薯 +$33冷/熱飲',
        price:'81元'
    },


]

console.log(orderlist);

</script>

<template>

    <LogoNav class=" z-10"/>
    <GoBackBtn link-name="PageData03"></GoBackBtn>
    <MainCard />


    <div class="py-4 pb-12 gap-5 flex justify-center items-center flex-col ">

        <PackageOptions v-for="(item, key) in orderlist" :key="key">

            <img :src="item.img" alt="套餐加購圖片" class="w-[80px] h-[80px] rounded-[25px] p-3">
            <div class="w-[152px] h-full py-3 flex flex-col justify-center">
                <h3 class="text-[18px] font-semibold">{{ item.title }}</h3>
                <p class="text-xs font-semibold">{{ item.text1 }}</p>
                <p class="text-xs font-semibold">{{ item.text2 }}</p>
            </div>
            <div
                class="w-[56px] h-[80px] text-[14px] p-[10px] flex justify-center items-center rounded-[25px] bg-[#fcc205]">
                {{ item.price }}</div>
                
        </PackageOptions>

    </div>


</template>

<style></style>
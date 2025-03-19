<script setup>
import LogoNav from '../components/LogoNav.vue';
import LastCard from '../components/LastCard.vue';

import img00 from '../assets/img/紙本發票.png';
import img01 from '../assets/img/手機載具.png';
import img02 from '../assets/img/自然人憑證.png';



const DataList = [{
    img: img00,
    tittle: '紙本發票',
    text: ''
},
{
    img: img01,
    tittle: '手機載具',
    text: ''
},
{
    img: img02,
    tittle: '自然人憑證',
    text: ''
}, 

];
</script>
<template>

    <LogoNav />

    <router-link :to="{ name: 'PageData07' }">
        <img class="absolute top-[78px] left-[10px] w-[56px] " src="../assets/img/叉叉按鈕.png" alt="返回">
    </router-link>

    <main class="h-full ">

        <div class="w-full h-[94px] p-16">
            <p class="text-center text-black-500 text-2xl font-black ">請選擇發票方式</p>
        </div>


        <div class="flex justify-center ">

            <div class="w-[264px] h-min flex flex-wrap gap-4">

                <LastCard v-for="(item,key) in DataList" :key='key' card-link-name="PageData11">
                    <img class="w-[100px] " :src="item.img" :alt="item.tittle">
                    <div class="text-center px-2 ">
                        <p class="text-xs font-bold truncate">{{ item.tittle }}</p>
                        <p class="text-[8px] font-medium">{{ item.text }}</p>
                    </div>
                </LastCard>

            </div>
        </div>
    </main>




</template>
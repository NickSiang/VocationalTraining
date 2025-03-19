<script setup>
import LogoNav from '../components/LogoNav.vue';
import GoBackBtn from '../components/GoBackBtn.vue';
import LastCard from '../components/LastCard.vue';

import img00 from '../assets/img/line pay.png';
import img01 from '../assets/img/街口支付.png';
import img02 from '../assets/img/apple pay.png';
import img03 from '../assets/img/櫃台支付.png';

const DataList = [{
    img: img00,
    tittle: 'LINE Pay',
    text: ''
},
{
    img: img01,
    tittle: '街口支付',
    text: ''
},
{
    img: img02,
    tittle: 'Apple Pay',
    text: ''
}, 
{
    img: img03,
    tittle: '櫃台支付',
    text: ''
},

];


</script>

<template>

    <LogoNav />
    <GoBackBtn link-name="PageData07" />


    <main class="">

        <div class="w-full h-[94px] p-16">
            <p class="text-center text-black-500 text-2xl font-black ">請選擇付款方式</p>
        </div>

        <div class="h-[100%] flex justify-center ">

            <div class="w-[264px] h-min flex flex-wrap gap-4">
                <LastCard v-for="(item, key) in DataList" :key="key" card-link-name="PageData09">
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
<script setup>
import LogoNav from '../components/LogoNav.vue';
import GoBackBtn from '../components/GoBackBtn.vue';
import MainCard from '../components/MainCard.vue';
import FooterSecond from '../components/FooterSecond.vue';
import YellowBtn from '../components/YellowBtn.vue';
import ChoiceOptions from '@/components/ChoiceOptions.vue';
import SmallChoice from '@/components/SmallChoice.vue';
</script>
<template>

    <LogoNav />
    <MainCard></MainCard>
    <GoBackBtn link-name="PageData04" />

    <main class="flex-1 overflow-auto">

        <div class="w-[370px] flex flex-col gap-2 mt-4">
            <ChoiceOptions />
            <div class="grid grid-cols-4 gap-1">
                <SmallChoice />
                <SmallChoice />
                <SmallChoice />
                <SmallChoice />
            </div>
            <ChoiceOptions />
            <ChoiceOptions />
        </div>
    </main>

    <FooterSecond>
        <YellowBtn btn-link-name="PageData01">取消整筆訂單</YellowBtn>
        <YellowBtn btn-link-name="PageData06">下一步</YellowBtn>
    </FooterSecond>

</template>
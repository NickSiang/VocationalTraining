<script setup>
import LogoNav from '../components/LogoNav.vue';
import GoBackBtn from '../components/GoBackBtn.vue';
</script>
<template>

    <LogoNav/>
    <GoBackBtn link-name="PageData06"/>

    <main>
        <div class="w-full flex-col gap-3 px-4 mt-20">

            <div
                class="bg-white rounded-[20px] p-4 flex justify-between items-center shadow-sm border border-gray-100 mb-2">
                <div class="flex gap-4 items-center">
                    <img src="../assets/img/1.png" alt="選購餐點圖" class="w-16 h-16 object-cover">
                    <div>
                        <p class="font-bold text-base">帕瑪森主廚雞腿堡</p>
                        <p class="text-sm text-gray-500">無須加購套餐</p>
                        <div class="flex items-center gap-2 mt-1">
                            <button
                                class="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center">-</button>
                            <span class="mx-1">1</span>
                            <button
                                class="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center">+</button>
                        </div>
                    </div>
                </div>
                <span class="font-bold">$108</span>
            </div>

            <!-- 購物袋 -->
            <div class="bg-white rounded-[20px] p-4 flex justify-between items-center shadow-sm border border-gray-100">
                <div class="flex gap-4 items-center">
                    <img src="../assets/img/購物袋.png" alt="購物袋圖" class="w-16 h-16 object-cover">
                    <div>
                        <p class="font-bold text-base">塑膠袋</p>
                        <div class="flex items-center gap-2 mt-1">
                            <button
                                class="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center">-</button>
                            <span class="mx-1">1</span>
                            <button
                                class="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center">+</button>
                        </div>
                    </div>
                </div>
                <span class="font-bold">$49</span>
            </div>
        </div>
        <div class="w-full flex justify-end pr-6 mt-64 mb-4">
            <p class="font-bold text-base">總計: $157</p>
        </div>
    </main>

    <!-- Footer Section -->
    <footer>
        <div class=" flex justify-center gap-6">
            <RouterLink to="/PageData01">
                <button type="button" class=" w-[140px] h-[39px] bg-[rgb(252,195,5)] rounded-[10px] flex items-center
                        justify-center">取消整筆訂單</button>
            </RouterLink>
            <RouterLink to="/PageData08">
                <button type="button" class=" w-[140px] h-[39px] bg-[rgb(252,195,5)] rounded-[10px] flex items-center
                        justify-center">下一步</button>
            </RouterLink>
        </div>
    </footer>




</template>

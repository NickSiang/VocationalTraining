<script>
export default {
    props: {
        btnLinkName: {
            type: String,
            default: 'PageData01',
        }

    },

}
// default: 'PageData01',
// 預設值

</script>

<template>
    <router-link :to="{ name: $props.btnLinkName }"
        class="w-[120px] h-[39px] bg-[#FCC305] text-base font-semibold border-none rounded-[10px] flex justify-center items-center cursor-pointer">
        <slot></slot>
    </router-link>
</template>
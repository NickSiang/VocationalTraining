<!-- props -->
<!-- slot -->
<script>
export default {
    props: {
        linkName: {
            type: String,
            default: 'PageData01',
        }
    },
}
</script>

<template>
    <!-- {{ $props.linkName }} -->
    <router-link :to="{ name: $props.linkName }" class="absolute top-[78px] left-[10px] w-[56px] z-10">
        <img src="../assets/img/叉叉按鈕.png" alt="返回">
    </router-link>
</template>
<script>
export default{
    props:{
        cardLinkName:{
            type:String,
            default:'PageData01',

        }
    },
}



</script>

<template>
    <router-link :to="{ name: $props.cardLinkName }">
        <div
            class="w-[124px] h-[152px] bg-white rounded-[20px] flex flex-col items-center shadow-[0_0px_4px_0_rgba(0,0,0,0.25)] gap-y-2 p-3">
            <slot></slot>
        </div>
    </router-link>
</template>
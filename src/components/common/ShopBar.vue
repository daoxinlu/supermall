<template>
    <div class="shop-bar">
        <div class="bar-left">
            <slot name="bar-left"></slot>
        </div>
        <div class="bar-right">
            <slot name="bar-right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'ShopBar'
}
</script>

<style scoped>
    .shop-bar{
        width:100%;
        display:flex;
        position:fixed;
        bottom:0;
    }
    .bar-left{
        width:56%;
        
    }
    .bar-right{
        width:44%;
        
    }
</style>
<template>
    <div class="top-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
    name:'TopBar'
}
</script>

<style scoped>
    .top-bar{
        display:flex;
        line-height:44px;
        height:44px;
        text-align:center;
    }
    .left{
        width:60px;
        font-size:1.2em;
    }
    .center{
        flex:1;
    }
    .right{
        width:60px;

    }
</style>
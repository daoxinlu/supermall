<template>
    <div v-if="detailGoods!=null">
        <span>{{detailGoods.desc}}</span>
        <div><span>{{detailGoods.detailImage[0].key}}</span></div>
        <img class="detail-image" alt="商品展示" v-for="(item,index) in detailGoods.detailImage[0].list" :src="item" :key="index">
    </div>
</template>

<script>
export default {
    name:'DetailGoods',
    props:{
        detailGoods:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style>
    .detail-image{
        max-width:100%;
        margin-top:20px;
    }
</style>
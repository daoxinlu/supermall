<template>
  <div class="detail">
    <detail-top></detail-top>
    <detail-swiper :images="topImages"></detail-swiper>
    <detail-info :goods="goods"></detail-info>
  </div>
</template>

<script>
//导入模块
import {getDetail,DetailInfos} from 'network/detail.js'

import DetailSwiper from './DetailSwiper'
import DetailTop from './Detailtop'
import DetailInfo from './DetailInfo'
export default {
    name:'Detail',
    data(){
        return {
            
            topImages:[],
            goods:{}
        }
    },
    components:{
        DetailInfo,
        DetailSwiper,
        DetailTop,
    },
    created(){
        this.iid = this.$route.params.id 
        // console.log(this.iid)
        getDetail(this.iid).then(res=>{
            this.topImages = res.data.result.itemInfo.topImages.slice(0,6)
            this.goods = new DetailInfos(res.data.result.itemInfo,res.data.result.columns,res.data.result.shopInfo.services)
            console.log(this.goods)
        })
    },
    
}
</script>

<style scoped>
    .detail{
        /* height:2000px; */
    }
    
</style>
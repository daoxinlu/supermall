<template>
  <div class="detail-info">
      <div class="detail-title">
          <span>{{goods.title}}</span>
      </div>
      <div class="detail-price" >
          <span>￥{{goods.realPrice}}</span> 
          <span>{{goods.oldPrice}}</span> 
          <span>{{goods.discount}}</span>
      </div>
      <div class="detail-column" v-if="!isEmpty">
          <span>{{goods.columns[0]}}</span>
          <span>{{goods.columns[1]}}</span>
          <span>{{goods.services[goods.services.length-1].name}}</span>
      </div> 
      <div class="detail-service" v-if="!isEmpty">
          <span class="detail-service-item" v-for="index in goods.services.length-1" :key="index">
              <img :src="goods.services[index-1].icon" alt="">
              <span>{{goods.services[index-1].name}}</span>
          </span>
      </div>
  </div>
</template>

<script>
import {getDetail,DetailInfos} from 'network/detail.js'
export default {
    name:'DetailInfo',
    props:{
        id:{
            type:String,
            default:''
        }
    },
    data(){
        return {
            goods:{},
            isEmpty:true,
        }
    },
    created(){
        // console.log(this.id)
        getDetail(this.id).then(res=>{
            this.goods = new DetailInfos(res.data.result.itemInfo,res.data.result.columns,res.data.result.shopInfo.services)
            this.isEmpty = false
            // console.log(this.goods)
        })
    },
}
</script>

<style scoped>
    .detail-info{
        padding-bottom:20px;
        box-shadow:0 2px 0 2px #eee;
    }
    .detail-title{
        font-size:16px;
        font-weight:400;
        padding:10px 4px;
    }
    .detail-price{
        margin-bottom:16px;
    }
    .detail-price>span:nth-of-type(1){
        color:rgb(233, 146, 160);
        font-size:20px;
        margin:4px;
    }
    .detail-price>span:nth-of-type(2){
        font-size:12px;
        color:rgb(56, 52, 52);
        margin:2px;
        text-decoration: line-through;
    }
    .detail-price>span:nth-of-type(3){
        background-color:rgb(233, 146, 160);
        font-size:16px;
        border-radius:5px;
        margin:3px;
    }
    .detail-column{
        font-size:12px;
        color:rgb(56, 52, 52);
        display:flex;
        margin-bottom:20px;
    }
    .detail-column>span{
        flex:1;
        text-align:center;
    }
    .detail-service{
        display:flex;
        margin:10px 4px;
        font-size:14px;
    }
    .detail-service img{
        width:14px;
        height:14px;
    }
    .detail-service>span:nth-of-type(1){
        text-align:left;
        flex:1;
    }
    .detail-service>span:nth-of-type(2){
        text-align:right;
        flex:1;
    }
</style>
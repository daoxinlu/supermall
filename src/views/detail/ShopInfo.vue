<template>
  <div class="shop-info" v-if="shopInfos!=null">
      <div class="shop-name">
          <img :src="shopInfos.shopLogo" alt="logo" class="shop-logo">
          <span class="shop-title">{{shopInfos.name}}</span>
      </div>
      <div class="shop-goods">
          <div class="goods-related">
              <div class="sell-count"><span>{{shopInfos.cSells|filter}}<br/>总销量</span></div>
              <div class="good-count"><span>{{shopInfos.cGoods}}<br/>全部宝贝</span></div>
          </div>
          <i class="split-line"></i>
          <div class="shop-related" >
              <div v-for="(item,index) in shopInfos.score" :key="index">
                  <span>{{item.name}}</span>
                  <span class="item-score">{{item.score}}</span>
                  <span v-if="item.isBetter" class="assess-high assess">高</span>
                  <span v-else class="assess-low  assess">低</span>
              </div>
          </div>
      </div>
      <div  class="shopping"><span>进店逛逛</span></div>
  </div>
</template>

<style scoped>
    .shop-name{
        margin:32px 10px;
        position:relative;
    }
    .shop-logo{
        height:40px;
        width:40px;  
        
    }
    .shop-title{
        display:inline-block;
        position:absolute;
        font-size:16px;
        top:10px;
        margin-left:10px;
    }
    .shop-goods{
        display:flex;
        width:100%;
        
        margin-bottom:16px;
    }
    .goods-related{
        display:flex;
        width:50%;
        text-align:center;
        margin-top:8px;
    }
    .goods-related div{
        width:48%;
    }
    
    .shop-related{
        width:50%;
        margin-top:-16px;
    }
    .shop-related>div{
        line-height:26px;
    }
    .split-line{
        height:50px;
        width:2px;
        background: gray;
        border-radius:2px;
        margin-right:20px; 
    }
    .item-score{
        display:inline-block;
        width:60px;
        margin-left:10px;
    }
    .assess{
        color:white;
        font-size:16px;
    }
    .assess-high{
        background-color:rgb(238, 159, 172);
    }
    .assess-low{
        background-color:green;
    }
    .shopping{
        width:100%;
        text-align:center;
    }
    .shopping>span{
        display:block;
        position:relative;
        width:40%;
        border-radius:10px;
        height:20px; 
        padding:5px 0;
        background-color:#eee;
        left:50%;
        transform: translateX(-50%);
    }
</style>

<script>
import {getDetail} from 'network/detail.js'
export default {
    name:'ShopInfo',
    props:{
        id:{
            type:String,
            default:''
        }
    },
    data(){
        return{
            shopInfos:null
        }
    },
    created(){
        getDetail(this.id).then(res=>{
            this.shopInfos = res.data.result.shopInfo;
            console.log(this.shopInfos)
            
        })
    },
    filters:{
        filter(count){
            if(count>10000){
                return String((count/10000).toFixed(1))+'万'
            }
        }
    }
}
</script>


<template>
  <div class="detail">
    <detail-top></detail-top>
    <detail-swiper :images="topImages"></detail-swiper>
    <detail-info :id="iid"></detail-info>
    <shop-info :id="iid"></shop-info>
    <detail-goods :detail-goods="detailGoods" class="detail-goods"></detail-goods>
    <shop-bar class="shop-bar">
        <div slot="bar-left" class="bar-left">
            <div class="bar-left-item">
                <i class="iconfont">&#xe60e;</i>
                <span>客服</span>
            </div>
            <div class="bar-left-item">
                <i class="iconfont">&#xe736;</i>
                <span>店铺</span>
            </div>
            <div class="bar-left-item">
                <i class="iconfont">&#xe60f;</i>
                <span>收藏</span>
            </div>
        </div>
        <div slot="bar-right" class="bar-right">
            <span class="join-cart" @click="addToCart">加入购物车</span>
            <span class="buy-button">购买</span>
        </div>
    </shop-bar>

  </div>
</template>

<script>
//导入模块
import {getDetail,DetailInfos} from 'network/detail.js'

import DetailSwiper from './DetailSwiper'
import DetailTop from './Detailtop'
import DetailInfo from './DetailInfo'
import ShopInfo from './ShopInfo'
import DetailGoods from './DetailGoods'

import ShopBar from 'components/common/ShopBar'
export default {
    name:'Detail',
    data(){
        return {
            iid:'',
            topImages:[],
            detailGoods:null,
            goods:null,
            product:{},
            productInfo:null
        }
    },
    components:{
        DetailInfo,
        DetailSwiper,
        DetailTop,
        ShopBar,
        ShopInfo,
        DetailGoods,
    },
    created(){
        this.iid = this.$route.params.id 
        getDetail(this.iid).then(res=>{
            this.productInfo = res.data.result
            this.goods = new DetailInfos(res.data.result.itemInfo,res.data.result.columns,res.data.result.shopInfo.services)
            //保存到购物车    
            this.topImages = res.data.result.itemInfo.topImages.slice(0,6)
            this.product.price = this.goods.realPrice
            this.product.desc = this.productInfo.detailInfo.desc
            this.product.title = this.productInfo.itemInfo.title
            this.product.image = this.topImages[0]
            this.product.iid = this.iid
            
            // console.log(this.$store.state.cartList)
            this.detailGoods = res.data.result.detailInfo;
        })
    },
    methods:{
        addToCart(){
            this.$store.commit('addCart',this.product)
            var tip = document.getElementById('tips')
            tip.innerHTML = '加入购物车成功'
            tip.setAttribute('class','visible')
            setTimeout(()=>{
                tip.setAttribute('class','disvisible')
            },1200)
            this.product.img = this.goods 
        }
    }
    
}
</script>

<style scoped>

    @import '~assets/css/svg/iconfont.css';
    .detail{
        /* height:2000px; */
        padding-bottom:52px;
    }
    .shop-bar{
        height:52px;
        background-color:#eee;
        text-align:center;
    }
    .detail-not{
        display:none !important;
    }
    .bar-left{
        display:flex;
        width:100%;
        margin-top:8px;
        font-size:14px;
        
    }
    .bar-left-item{
        flex:1;
    }
    .bar-right{
        display:flex;
        width:100%;
        font-size:16px;
        line-height:52px;
    }
    .join-cart{
        flex:1;
        background-color:yellow;
    }
    .buy-button{
        flex:1;
        background-color:rgb(233, 146, 160);
    }
    .bar-left-item>i{
        display:block;
    }
    .detail-goods{
        margin-top:20px;
        box-shadow:0 -3px 2px 1px #eee;
        padding-top:20px;
    }
</style>
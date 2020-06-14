<template>
  <div id="home">
    <top-bar class='home-top'><div slot="center">首页</div></top-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <week-hot></week-hot>
    <content-bar :titles="category" class="content-bar" :show="goodsShow"  @changeShow="changeShow"></content-bar>
    <goods-list :pops="this.goods.pop" :sells="this.goods.sell" :news="this.goods.new" :show="goodsShow"></goods-list>
    
  </div>
</template>

<script>
//1 公共组件
import TopBar from 'components/common/Topbar'
import ContentBar from 'components/content/Contenttab'
import GoodsList from 'components/common/Goodslist'
//2 子组件
import HomeSwiper from './Homeswiper'
import HomeRecommend from './Homerecommend'
import WeekHot from './Homeweekhot'

//3 公共接口
import {Getgoods} from '@/network/goods'
import {Multidata} from '@/network/multidata'

export default {
    name:'Home',
    components:{
      TopBar,
      ContentBar,
      GoodsList,
      HomeSwiper,
      HomeRecommend,
      WeekHot,

    },
    data(){
      return{
        banners:[],
        recommends:[],
        goods:{
          pop:{page:1,list:[]},
          new:{page:1,list:[]},
          sell:{page:1,list:[]},
        },
        goodsShow:new Array(3).fill(false),
        category:['热门','流行','新款']
      }
    },
    created(){
      this.multidata();
      this.getSellGoods();
      this.getNewGoods();
      this.getPopGoods();
      this.goodsShow[0] = true;
    },
    methods:{
      multidata(){
        Multidata(5000).then(res=>{
          // console.log("mutidata")
          // console.log(res.data)
          this.banners = res.data.data.banner.list
          this.recommends = res.data.data.recommend.list
          // console.log(this.recommends)
        }).catch(err=>{console.log(err)})
      },
      getSellGoods(){
        Getgoods('sell',1,10000).then(res=>{
          // console.log(res.data.data.list)
          this.goods.sell.list.push(res.data.data.list)
          // console.log(this.goods.pop.list)        
        }).catch(err=>{console.log(err)})
      },
      getNewGoods(){
        Getgoods('new',1,10000).then(res=>{
          // console.log('new')
          // console.log(res.data)
          this.goods.new.list.push(res.data.data.list)
        }).catch(err=>{console.log(err)})
      },
      getPopGoods(){
        Getgoods('pop',1,10000).then(res=>{
          // console.log('sell')
          // console.log(res.data)
          this.goods.pop.list.push(res.data.data.list)   
        }).catch(err=>{console.log(err)})
      },
      changeShow(index){
        
        this.goodsShow = [false,false,false]
        this.goodsShow[index] = true
        
      }
    }
}
</script>

<style>
  #home{
    padding-bottom:80px;
  }
  .home-top{
    width:100%;
    color:#fff;
    background-color:pink;
    box-shadow:0 1px 1px 1px rgba(100,100,100,0.1);
    position:sticky;
    z-index:100;
    top:0;
    
  }
  .content-bar{
    position:sticky;
    top:44px;
    width:100%;
  }
</style>
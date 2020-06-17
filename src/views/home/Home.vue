<template>
  <div id="home" @touchmove="debounce" @mousewheel="debounce"> 
    <top-bar class='home-top'><div slot="center">首页</div></top-bar>
    <home-swiper :banners="banners" class="home-swiper"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <week-hot></week-hot>
    <content-bar :titles="category" class="content-bar" :show="goodsShow"  @changeShow="changeShow"></content-bar>
    <goods-list :pops="this.goods.pop" :sells="this.goods.sell" :news="this.goods.new" :show="goodsShow" id="goods-list"></goods-list>
    
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
          pop:{page:1,list:[],name:'pop'},
          new:{page:1,list:[],name:'new'},
          sell:{page:1,list:[],name:'sell'},
        },
        goodsShow:new Array(3).fill(false),
        category:['流行','新款','热销'],
        siteY:'',         //只有通过实践监听器才能够在切换组件的情况下保存
        goodsHeight:0,
        aa:''
      }
    },
    created(){
      
      this.multidata();
      this.getSellGoods();
      this.getNewGoods();
      this.getPopGoods();
      this.goodsShow[0] = true;
    },
    mounted(){
      console.log('home')
      window.scrollTo(0,this.siteY)
      // var goodslist = document.getElementById('goods-list')
      // setTimeout(()=>{
      //   var height = parseInt(getComputedStyle(goodslist).height)
      //   console.log(height);
      //   this.goodsHeight = height
      // },1000)
      window.addEventListener('scroll', this.handleScroll, true)
    },
    activated(){
      // console.log('回来'+this.siteY)
      window.scrollTo(0,this.siteY)
      // console.log(this.$refs.Home)
      window.addEventListener('scroll', this.handleScroll, true)
      
      

    },
    deactivated(){
      
      window.removeEventListener('scroll', this.handleScroll, true)
      
        
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
        Getgoods('sell',this.goods.sell.page,10000).then(res=>{
          // console.log(res.data.data.list)
          this.goods.sell.page++
          this.goods.sell.list.push(res.data.data.list)
          // console.log(this.goods.pop.list)        
        }).catch(err=>{console.log(err)})
      },
      getNewGoods(){
        Getgoods('new',this.goods.new.page,10000).then(res=>{
          // console.log('new')
          // console.log(res.data)
          this.goods.new.page++
          this.goods.new.list.push(res.data.data.list)
        }).catch(err=>{console.log(err)})
      },
      getPopGoods(){
        Getgoods('pop',this.goods.pop.page,10000).then(res=>{
          // console.log('sell')
          // console.log(res.data)
          this.goods.pop.page++
          this.goods.pop.list.push(res.data.data.list)   
        }).catch(err=>{console.log(err)})
      },
      changeShow(index){
        
        this.goodsShow = [false,false,false]
        this.goodsShow[index] = true
        
      },
      
      getNewData(){
        var show = this.goodsShow;
        var index;
        for(var i=0;i<show.length;i++){
          if(show[i]){
            index = i;
            break;
          }
        }
        var keys = Object.keys(this.goods)
        if(this.goods[keys[index]].page<=3){
          var keys = Object.keys(this.goods)
          Getgoods(keys[index],this.goods[keys[index]].page,10000).then(res=>{
            // console.log(res.data.data.list)
            this.goods[keys[index]].page++
            this.goods[keys[index]].list[0].push(...res.data.data.list)
            // this.$nextTick(()=>console.log(1))
                  
          }).catch(err=>{console.log(err)})
        }else{
          alert('已加载完全部商品')
        }
        
      },
      debounce(e){
        clearTimeout(this.timeout)
        this.timeout = setTimeout(()=>{
          
          if(parseInt(getComputedStyle(document.documentElement).height)-window.innerHeight-window.scrollY<20&&-1!=this.$route.path.indexOf('home')){
            console.log('到底了');
            this.getNewData();
          }
        },1000)
        
      },
      handleScroll(){
        // this.$nextTick(()=>{
        this.siteY = document.body.scrollTop || document.documentElement.scrollTop || window.pageXOffset
        
	      // })
      }
      
    },
    watch:{
      goods(newV){
        console.log(this.goods.sell.list)
        return newV;
      }
    },

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
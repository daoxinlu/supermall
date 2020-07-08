<template>
  <div id="category">
    <top-bar class="cate-top">
      <div slot="center">分类</div>
    </top-bar>
    <div id="cate-content">
      <goods-cate class="cate-list" :catelist="catelist" v-if="catelist.length>0"></goods-cate>
      <cate-content id="cate-content"></cate-content>
      
    </div>
    
  </div>
  
</template>

<script>
//导入better-scroll
import BScroll from 'better-scroll'
//导入组件
import TopBar from 'components/common/Topbar'
import GoodsCate from 'components/common/Goodscate.vue'
import CateContent from './CateContent'
//导入接口
import {CateGory} from '@/network/category'

export default {
    name:'Category',
    components:{
      TopBar,
      GoodsCate,
      CateContent,
    },
    data(){
      return {
        catelist:[],
      }
    },
    created(){
      CateGory().then(res=>{
        this.catelist = res.data.data.category.list
        
      })
    },
    mounted(){
      // new BScroll('.cate-list',{
      //   scrollY:true,
      //   click:true
      // })


    },methods:{
      test(){
            var li = document.getElementById('li')
            console.log('scroll')
            
            li.scrollIntoView()
            
        }
    }
}
</script>

<style scoped>
  #cate-content{
    /* display:flex; */
  }
  .cate-top{
    width:100%;
    color:#fff;
    background-color:pink;
    box-shadow:0 1px 1px 1px rgba(100,100,100,0.1);
    
    z-index:100;
    top:0;
    
  }
  
  .cate-list{
    height:640px;
    background: #eee;
    overflow-y:scroll;
    width:40%;
    
    float:left;
  }
  #cate-content{
    
    float:right
  }
</style>
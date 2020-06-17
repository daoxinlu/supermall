<template>
  <div id="category">
    <top-bar class="cate-top">
      <div slot="center">分类</div>
    </top-bar>
    <div id="cate-content">
      <goods-cate class="cate-list"></goods-cate>
      <div id="cate-content" @click="test">content</div>
    </div>
    
  </div>
  
</template>

<script>
//导入better-scroll
import BScroll from 'better-scroll'
//导入组件
import TopBar from 'components/common/Topbar'
import GoodsCate from 'components/common/Goodscate.vue'

export default {
    name:'Category',
    components:{
      TopBar,
      GoodsCate,
      
    },
    data(){
      return {
        
      }
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

<style>
  #cate-content{
    display:flex;
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
        height:570px;
        background: seagreen;
        overflow-y:scroll;
        
        width:30%;
        padding-top:3px;
    }
</style>
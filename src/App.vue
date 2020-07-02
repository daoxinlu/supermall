<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    
    <tab-bar></tab-bar>
    <to-top @click.native="backToTop"></to-top>
    <my-tips></my-tips>
  </div>
</template>

<script>

import TabBar from 'components/content/Tabbar.vue'
import ToTop from 'components/common/Totop'
import MyTips from 'components/common/Mytips'
export default {
  name: 'App',
  components: {
    TabBar,
    ToTop,
    MyTips,
  },
  data(){
    return {
      siteY:0
    }
  },
  methods:{
    backToTop(){
      window.scrollTo({
        top:0,
        behavior:'smooth'
      })
    }
  },
  mounted(){
    console.log(JSON.parse(localStorage.getItem('cart')))
    var payload = JSON.parse(localStorage.getItem('cart'))
    if(payload == null){
      localStorage.setItem('cart','[]')
      this.$store.commit('init',[])
    }
    else{
      this.$store.commit('init',payload)
    }
         //启动项目后载入购物车数据
  },
  beforeDestroy(){
    localStorage.setItem('cart',[])
    console.log('a')
  }
  
}
</script>

<style>
  @import 'assets/css/base.css';
</style>

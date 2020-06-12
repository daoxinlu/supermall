<template>
  <div id="home">
    <top-bar class='home-top'>
      <div slot="left">></div>
      <div slot="center">首页</div>
      <div slot="right"></div>
    </top-bar>
  </div>
</template>

<script>
import TopBar from 'components/common/Topbar.vue'
export default {
    name:'Home',
    components:{
      TopBar,
    }
}
</script>

<style>
  .home-top{
    color:#fff;
    background-color:pink;
    box-shadow:0 1px 1px 1px rgba(100,100,100,0.1)
  }
</style>
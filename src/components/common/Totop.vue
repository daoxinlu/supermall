<template>
  <div class="to-top">
      <div id="to-top"><i class="iconfont">&#xe679;</i></div>
  </div>
</template>

<script>
export default {
    name:'ToTop'
}
</script>

<style>
    @import '~assets/css/svg/iconfont.css';
    .to-top{ 
        position:fixed;
        background-color:#eee;
        /* opacity:0.8; */
        right:10px;
        bottom:100px;
        z-index:1000;
        /* height:30px; */
        width:40px;
        height:40px;
        text-align:center;
        line-height: 40px;
        box-shadow:0 0 1px 1px gray;
        border-radius:20px;
        
    }
    .iconfont{
        font-size:20px;
    }
</style>
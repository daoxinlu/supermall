<template>
  <div class="to-top">
      <div id="to-top"><span class="arrow">︽</span>回到顶部</div>
  </div>
</template>

<script>
export default {
    name:'ToTop'
}
</script>

<style>
    .to-top{ 
        position:fixed;
        background-color:#eee;
        /* opacity:0.8; */
        right:0;
        padding:10px;
        padding-top:0px;
        bottom:100px;
        z-index:1000;
        /* height:30px; */
        width:16px;
        border-radius: 3px;
        box-shadow:0 0 1px 1px;
        
    }
    .arrow{
        display:inline-block;
    }
</style>
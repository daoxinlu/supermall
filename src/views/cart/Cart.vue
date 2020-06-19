<template>
  <div id="cart">
    <top-bar class='cart-top'><div slot="center">首页</div></top-bar>
    <cart-list class="cart"></cart-list>
  </div>
  
</template>

<script>
import TopBar from 'components/common/Topbar'
import CartList from './CartList'
export default {
    name:'Cart',
    components:{
      CartList,
      TopBar,
    }
}
</script>

<style>
  .cart-top{
    width:100%;
    color:#fff;
    background-color:pink;
    box-shadow:0 1px 1px 1px rgba(100,100,100,0.1);
    position:sticky;
    z-index:100;
    top:0;
  }
  #cart{
    width:100%;
  }
  .cart{
    width:100%;
  }
</style>
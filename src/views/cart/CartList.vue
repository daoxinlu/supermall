<template>
  <div class="cart-list">
      <div class="cart-item"  v-for="(item,index) in $store.state.cartList" :key="index">
        <div class="checkbox"><input type="checkbox" name="checkbox" id=""></div>
        <img src="" alt="图片被意大利轰走了" class="cart-item-img">
        <div>
            <span>{{item.title}}</span>
            <span>{{item.desc}}</span>
            <span>price:￥{{item.price}}</span>
            <span>count:{{item.count}}</span>
        </div>
        
      </div>
  </div>
</template>

<script>
export default {
    name:'CartList',
    
}
</script>

<style scoped>
    .cart-list{      
        width:100%;
        box-shadow:0 2px 1px 1px gray;
        padding:12px 0px;
    }
    .cart-item{
        margin:5px 12px;
        display:flex;
    }
    
    
</style>
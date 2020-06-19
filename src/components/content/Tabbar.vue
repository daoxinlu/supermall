<template>
  
  <div id="tab-bar" v-if="!shopbar">    
      <tab-bar-item path='/home' curColor='green'>
      <!-- 需要使用watch属性监听route变化 -->
        <img src="~assets/img/tabbar/home.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/home_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img src="~assets/img/tabbar/category.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/category_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" curColor='red'>
        <img src="~assets/img/tabbar/shopcart.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/shopcart_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" curColor='yellowgreen'>
        <img src="~assets/img/tabbar/profile.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">我的</div>
      </tab-bar-item>
      
  </div>
</template>

<script>
import TabBarItem from 'components/common/Tabbaritem.vue'
export default {
    name:'TabBar',
    components:{
        TabBarItem,
    },
    data(){
      return{
        shopbar:false,
      }
    },
    created(){
      
      this.shopbar = this.$route.path.indexOf('detail')!=-1
    },
    watch:{
      '$route':function(){
       
        if(this.$route.path.indexOf('detail')==-1){
          this.shopbar = false;
        }else{
          this.shopbar = true;
        }
      }

    }
}
</script>

<style scoped>
    #tab-bar{
        display:flex;
        position:fixed;
        bottom:0;
        left:0;
        right:0;
        box-shadow:0 -1px 1px 1px rgba(0,0,0,0.1);
       
    }
    
</style>
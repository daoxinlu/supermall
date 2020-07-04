<template>
  <div class="cart-list">
      <div class="cart-item" v-for="(item,index) in $store.state.cartList" :key="index">
        <div class="checkbox"><input type="checkbox" name="checkbox" id=""  @click="select($event,item.iid)" :checked="item.checkstate"></div>
        <img :src="item.image" alt="图片被意大利轰走了" class="cart-item-img">
        <div class="cart-item-tdpc">
            <div class="cart-item-title">{{item.title}}</div>
            <div class="cart-item-desc">{{item.desc}}</div>
            <span class="cart-item-price">单价:￥{{item.price}}</span>
            <span class="cart-item-count">数量: 
            <button @click="reduceGood(item.iid)">-</button> {{item.count}} 
            <button @click="addGood(item.iid)">+</button></span>
        </div>
        
      </div>
  </div>
</template>

<script>
import bus from '@/bus.js'
export default {
    name:'CartList',
    created(){
        bus.$on('clickSettle',data=>{
            console.log(data)
        })
    },
    updated(){
        bus.$on('clickSettle',data=>{
            console.log(data)
        })
    },
    methods:{
        select(e,iid){
             console.log(e.target.checked)
             console.log(iid)
            this.$store.commit('select',{
                    checked:e.target.checked,
                    iid,
                }
            )

        },
        addGood(iid){
            this.$store.commit('addGood',iid)
            var p = new Promise(
                res=>{res(localStorage.setItem('cart',JSON.stringify(this.$store.state.cartList)))}
            )
            p.then(res=>{
                console.log(localStorage.getItem('cart'))
            })
        },
        reduceGood(iid){
            this.$store.commit('reduceGood',iid)
            var p = new Promise(
                res=>{res(localStorage.setItem('cart',JSON.stringify(this.$store.state.cartList)))}
            )
            p.then(res=>{
                console.log(localStorage.getItem('cart'))
            })
        }

    }
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
    .cart-item-img{
        width:20%;
        margin:10px;
        height:100%;
    }
    .cart-item-tdpc>div{
        margin:10px;
        
    }
    .cart-item-title,.cart-item-desc{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        word-break:break-all;
        -webkit-line-clamp:2;
        display:-webkit-box;
        -webkit-box-orient: vertical;
    }
    .cart-item-price,.cart-item-count{
        display:inline-block;
    }
    .cart-item-price{
        color:red;
    }
    .cart-item-count{
        position:absolute;
        right:40px;
    }
</style>
<template>
  <div class="settle">
      <input type="checkbox" name="cart" id="" @click="selectAll($event)"><label for="cart">全选</label>
      <div>合计：{{totalPrice}}</div>
      <button class="settle-btn">结算</button>
  </div>
</template>

<script>
// import bus from '@/bus.js'
export default {
    name:'CartSettle',
    methods:{
        // settle(){
        //     bus.$emit('clickSettle','clickSettle')
        // }
        selectAll(e){
            this.$store.commit('selectAll',{checked:e.target.checked})
        }
    },
    computed:{
        totalPrice(){
            var list = this.$store.state.cartList
            console.log(list)
            var price = 0;
            for(var item of list){
                price+=Number(item.price)*item.checkstate*item.count
            }
            return price.toFixed(2);
        }
    }
}
</script>

<style>

</style>
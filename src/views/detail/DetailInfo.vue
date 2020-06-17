<template>
  <div class="detail-info">
      <div class="detail-title">
          {{goods.title}}
      </div>
      <div class="detail-price">
          {{goods.realPrice}} {{goods.oldPrice}} {{goods.services['0'].name}}
      </div>
      <div class="detail-service">

      </div>
  </div>
</template>

<script>
export default {
    name:'DetailInfo',
    props:{
        goods:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    created(){
        setTimeout(()=>{this.goods=this.goods;console.log(this.goods)},100)
    }
}
</script>

<style>

</style>
<template>
  <div class="recommend">
      <div class="recomend-item" v-for="(item,index) in recommends" :key="index">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
    .recommend{
        box-sizing:border-box;
        display:flex;
        width:100%;
        position:relative;
        padding:8px 0 20px 0;
        border-top:10px solid #eee;
        border-bottom:10px solid #eee;
    }
    .recomend-item{
        flex:1;
        text-align:center;
        /* background: chartreuse; */
        

    }
    .recomend-item img{
        width:66px;
        height:66px;
    }
</style>
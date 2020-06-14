<template>
  <div class="content-tab">
      <div class="content-tab-item" v-for="(item,index) in titles" :key="item" :class='{active:index === titleIndex}' @click="changeIndex(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:"ContentTab",
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        },
        show:{
            type:Array,
            default(){return [true,false,false]}
        }
    },
    data(){
        return{
            titleIndex:0,
        }
    },
    methods:{
        changeIndex(index){
            
            this.titleIndex = index;
            this.$emit('changeShow',index)
        }
    },
    
}
</script>

<style scoped>
    .content-tab{
        display:flex;
        text-align:center;
        font-size:16px;
        background-color:#fff;
    }
    .content-tab-item{
        flex:1;
        height:40px;
        line-height: 40px;
    }
    .active>span{
        border-bottom:3px solid rgb(236, 143, 159);
        padding:5px;
        color:rgb(236, 143, 159);
    }
    
</style>
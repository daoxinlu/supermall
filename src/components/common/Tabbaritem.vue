<template>
  <div class="tab-bar-item" @click="changePath">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <slot v-else name="item-icon-active"></slot>
      <div :style="curStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
    name:'TabBarItem',
    props:{
        path:String,
        curColor:{
            type:String,
            default:'red'
        }
    },
    data(){
        return{
            // isActive
        }
    },
    methods:{
        changePath(){
            
            this.$router.push(this.path)
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1
        },
        curStyle(){
            return this.isActive?{color:this.curColor}:{}
        }
    }
}
</script>

<style scoped>
    .tab-bar-item{
        flex:1;
        text-align:center;
        height:49px;
        background-color:#f6f6f6;
        font-size:12px;
        margin-top:6px;
    }
    /* .tab-bar-item>div>img{
        height:24px;
        width:24px;
    } */
    .tab-bar-item img{
        height:24px;
        width:24px;
    }
    
</style>
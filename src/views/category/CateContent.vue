<template>
  <div class="cate-content" v-if="imagelist">
        <div v-for="(item,index) in imagelist" :key="index">
            <img :src="item.img" alt="图片" class="cate-img">
        </div>
  </div>
</template>

<script>
import {CateContent} from "@/network/category"
export default {
    name:'CateContent',
    data(){
        return{
            imagelist:[]
        }
    },
    created(){
        CateContent().then(res=>{
            
            this.imagelist = res.data
            console.log(this.imagelist)
        })
    }
}
</script>

<style scoped>
   .cate-content{
       display:flex;
       flex-wrap: wrap;
       width:60%;
       height:640px;
       overflow: scroll;
   }
   .cate-content>div{
       /* overflow-y:scroll; */
   }
   .cate-img{
       width:80px;
       margin:10px;
   }
</style>
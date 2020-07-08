<template>
  <div class="goods-cate">
      <ul class="cate-lsit"  >
          <li class="list" v-for="(item,index) in catelist" :key="index">{{item["title"]}}</li>
      </ul>
      <ul class="cate-lsit"  >
          <li class="list" v-for="(item,index) in catelist" :key="index">{{item["title"]}}</li>
      </ul>
      <ul class="cate-lsit"  >
          <li class="list" v-for="(item,index) in catelist" :key="index">{{item["title"]}}</li>
      </ul>
      
  </div>
</template>

<script>
export default {
    name:"GoodsCate",
    props:{
        catelist:{
            type:Array,
            
        }
    },
    methods:{
        test(){
            var li = document.getElementById('li')
            console.log('scroll')
            
            li.scrollIntoView()
            
        }
    },
    created(){
        
    }
}
</script>

<style scoped>
    .list{
        margin:10px;
    }
    .cate-lsit{
        padding:0 12px;
        text-align: center;
    }
</style>
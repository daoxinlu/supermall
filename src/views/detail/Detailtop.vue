<template>
  <top-bar class="detail-top">
        <div slot="left" @click="back"><i class="iconfont">&#xe608;</i></div>
        <div slot="center" class="detail-title">
            <div class="detail-title-item" v-for="(item,index) in titles" @click="showIndex(index)"  :key="item">
                <a :href="anchors[index]" :class="{active:currentIndex==index}">{{item}}</a>
            </div>
        </div>
        <div slot="right"></div>
    </top-bar>
</template>

<script>
//导入组件

import TopBar from 'components/common/Topbar'
export default {
    name:'DetailTop',
    components:{
        TopBar
    },
    data(){
        return {
            titles:['商品','参数','评论','推荐'],
            anchors:['#'],
            iid:'',
            currentIndex:0,
            topImages:[],
        }
    },
    methods:{
        back(){
            this.$router.back()
        },
        showIndex(index){
            this.currentIndex = index
        }
    },
    
}
</script>

<style>
    .detail-top{
        width:100%;
        
        background-color:#eee;
        box-shadow:0 1px 1px 1px rgba(100,100,100,0.1);
        position:sticky;
        z-index:100;
        top:0;
        font-size:13px;
    }
    .detail-title{
        display:flex;

    }
    .detail-title-item{
        flex:1;
    }
    .active{
        color:red;
    }
</style>
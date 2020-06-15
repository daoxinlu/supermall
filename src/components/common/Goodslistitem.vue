<template>
  <div class="list-item">
        <ul class="goods-list-pop goods-list-item" >
            <li v-for="(items,index) in items.list[0]" :key="items.iid+index+1" >
                <a :href="items.link">
                    <img :src="items.show.img" alt="" :title="items.title">
                    <div class="goods-title-words">{{items.title}}</div>
                    <div class="goods-item-price">
                        <span>￥{{items.price}}</span> 
                        <span v-if="collection" @click="collect" @click.stop="stop">☆{{items.cfav}} </span>
                        <span v-else @click="disCllect" @click.stop="stop">★{{items.cfav}} </span>
                        <span class="primary-price">原价：{{items.orgPrice}}</span>
                    </div>
                </a>
            </li>
        </ul>
  </div>
</template>

<script>
export default {
    name:'GoodsListItem',
    props:{
        items:{
            type:Object
        }
    },
    data(){
        return {
            collection:true,
        }
    },
    methods:{
        collect(){
            this.collection = true;
            return false;
        },
        disCollect(){
            this.collection = false;
            return false;
        },
        stop(e){
            console.log(e)
        }
    }
    // mounted(){
    //     console.log(this.items)
    // },
    // created(){
    //     console.log(this.items)
    // }
}
</script>

<style scoped>
    .goods-list-item{
        display: -webkit-box; /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
        display: -moz-box; /* 老版本语法: Firefox (buggy) */
        display: -ms-flexbox; /* 混合版本语法: IE 10 */
        display: -webkit-flex; /* 新版本语法: Chrome 21+ */
        display: flex; /* 新版本语法: Opera 12.1, Firefox 22+ */
        flex-wrap: wrap;
        justify-content:center;
        
        width:100%;
        padding:0;
    }
    .goods-list-item>li{

        list-style-type: none;
        width:38%;
        margin-top:20px;
        margin-left:20px;
        margin-right:20px;
        
        
    }
    .goods-list-item img{
        width:100%;
        height:60%;
        box-shadow:0 0 1px 1px gray;
    }
    .goods-list-item div{
        margin-top:12px;
        
    }
    .goods-item-price{
        
        font-size:12px;
        
    }
    .goods-item-price>span:nth-of-type(1){
        color:red;
        font-size:14px;
    }
    .goods-item-price>span:nth-of-type(2){
        font-size:20px;
    }
    .goods-title-words{
        line-height:20px;   
        overflow:hidden;
        -webkit-line-clamp: 3;
        display:-webkit-box;
        -webkit-box-orient: vertical;
        text-overflow:ellipsis;
        font-size:14px;
        white-space: pre-wrap;
    }
    .primary-price{
        text-decoration: line-through;
    }
</style>
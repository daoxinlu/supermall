<template>
    <div class="goods-list">
        <ul class="goods-list-pop goods-list-item" >
            <li v-for="(item,index) in pops.list[0]" :key="item.iid+index+1" v-show="show[0]">
                <a :href="item.link">
                    <img :src="item.show.img" alt="" :title="item.title">
                    <div class="goods-title-words">{{item.title}}</div>
                    <div class="goods-item-price">
                        <span>￥{{item.price}}</span> 原价 <span>{{item.orgPrice}}</span>
                    </div>
                </a>
            </li>
        </ul>
        <ul class="goods-list-new goods-list-item" >
            <li v-for="(item,index) in news.list[0]" :key="item.iid+index+2"  v-show="show[1]">
                <a :href="item.link">
                    <img :src="item.show.img" alt="" :title="item.title">
                    <div class="goods-title-words">{{item.title}}</div>
                    <div class="goods-item-price">
                        <span>￥{{item.price}}</span> 原价 <span>{{item.orgPrice}}</span>
                    </div>
                </a>
            </li>
        </ul>
        <ul class="goods-list-sell goods-list-item" >
            <li v-for="(item,index) in sells.list[0]" :key="item.iid+index+3"  v-show="show[2]">
                <a :href="item.link">
                    <img :src="item.show.img" alt="" :title="item.title">
                    <div class="goods-title-words">{{item.title}}</div>
                    <div class="goods-item-price">
                        <span>￥{{item.price}}</span> 原价 <span>{{item.orgPrice}}</span>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'GoodsList',
    props:{
        pops:{type:Object},
        news:{type:Object},
        sells:{type:Object},
        show:{
            type:Array,
            default(){return [true,false,false]}
        }
    },
    // mounted(){
    //     setTimeout(()=>{console.log(this.pops)},100)
    // },
    // updated(){
    //     setTimeout(()=>{console.log(this.pops)},100)
    // }
    
}
</script>

<style scoped>
    .goods-list-item{
        
        display:flex;
        flex-wrap: wrap;
        justify-content:space-evenly;
        width:100%;
        padding:0;
    }
    .goods-list-item>li{
        list-style-type: none;
        width:40%;
        margin-top:20px;
        
    }
    .goods-list-item img{
        width:100%;
        height:60%;
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
</style>
<template>
    <div class="goods-list">
        <goods-list-item v-show="show[0]" :items="pops"></goods-list-item>
        <goods-list-item v-show="show[1]" :items="news"></goods-list-item>
        <goods-list-item v-show="show[2]" :items="sells"></goods-list-item>
        <!-- <ul class="goods-list-pop goods-list-item" >
            <li v-for="(item,index) in pops.list[0]" :key="item.iid+index+1" v-show="show[0]" >
                <a :href="item.link">
                    <img :src="item.show.img" alt="" :title="item.title">
                    <div class="goods-title-words">{{item.title}}</div>
                    <div class="goods-item-price">
                        <span>￥{{item.price}}</span> <span>☆★{{item.cfav}} </span><span class="primary-price">原价：{{item.orgPrice}}</span>
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
                        <span>￥{{item.price}}</span> <span>☆★{{item.cfav}} </span><span class="primary-price">原价：{{item.orgPrice}}</span>
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
                        <span>￥{{item.price}}</span> <span>☆★{{item.cfav}} </span><span class="primary-price">原价：{{item.orgPrice}}</span>
                    </div>
                </a>
            </li>
        </ul>-->
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
    components:{
        GoodsListItem :()=>import ('./Goodslistitem')
    },
    mounted(){
        // setTimeout(()=>{console.log(this.pops)},100)
    },
    // updated(){
    //     setTimeout(()=>{console.log(this.pops)},100)
    // }
    
}
</script>

<style scoped>
    
</style>
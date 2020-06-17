<template>
  <div class="list-item">
        <ul class="goods-list-pop goods-list-item" ref="bbb">
            <li v-for="(items,index) in items.list[0]" :key="items.iid+index+1" >
                <!-- <a :href="items.link"> -->
                    <img :src="items.show.img" alt="" :title="items.title" @click="itemClick(items.iid)">
                    <div class="goods-title-words">{{items.title}}</div>
                    <div class="goods-item-price">
                        <span>￥{{items.price}}</span> 
                        <span id="star" @click="starThis">☆</span>
                        <span>{{items.cfav}} </span>
                        <span class="primary-price">原价：{{items.orgPrice}}</span>
                    </div>
                <!-- </a> -->
            </li>
        </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'GoodsListItem',
    props:{
        items:{
            type:Object
        }
    },
    data(){
        return {
            collection:true,        //点击星星切换
            star:['☆','★']
        }
    },
    methods:{
        collect(e){
            this.collection = true;
            e.preventDefault()
            return false;
        },
        disCollect(e){
            this.collection = false;
            e.preventDefault()
            return false;
        },
        stop(e){
            console.log(e)
        },
        itemClick(iid){
            // e.preventDefault()
            // console.log('----')
            this.$router.push('detail/'+iid)
            // setTimeout(()=>{this.$router.go(-1)},2000)
        },
        starThis(e){
            var tip = document.getElementById('tips')
            
            if(e.target.innerHTML == this.star[0]){
                tip.innerHTML = '收藏成功'
                tip.setAttribute('class','visible')
                setTimeout(()=>{
                    tip.setAttribute('class','disvisible')
                },1200)
                e.target.innerHTML = this.star[1]
            }else{
                if(window.confirm('取消收藏吗？'))
                e.target.innerHTML = this.star[0]
                tip.innerHTML = '取消收藏'
                tip.setAttribute('class','visible')
                setTimeout(()=>{
                    tip.setAttribute('class','disvisible')
                },1200)
            }
            
        }

    },
    mounted(){
        // setTimeout(()=>{new BScroll(this.$refs.bbb,{

        // })},1000)
    },
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
        /* overflow: hidden; */
        width:100%;
        padding:0;
        /* height:100%; */
        /* background-color:chartreuse; */
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
        font-size:30px;
    }
    .goods-item-price>span:nth-of-type(3){
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
<template>
    <mt-swipe class="mint-swiper"  :speed=800>
        <mt-swipe-item v-for="(item) in images"  :key="item">
            <img :src="item" class="image-swiper" alt="">
        </mt-swipe-item>
        
    </mt-swipe>
</template>

<script>
// import Vue from 'vue'

import { Swipe, SwipeItem } from 'mint-ui';

// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);

// import 'mint-ui/lib/style.css'
export default {
    name:'DetailSwiper',
    components:{
        'mt-swipe':Swipe,
        'mt-swipe-item':SwipeItem,
    },
    props:{
        images:{
            type:Array,
            default(){
                return []
            }
        }
    }
    
}
</script>

<style>
    .mint-swiper{
        height:300px;
        width:100%;
    }
    .image-swiper{
        max-width:100%;
    }
    .mint-swipe-indicator.is-active{
        background-color:blue;
        width:20px;
        height:20px;
        opacity: 0.5;
    }
</style>
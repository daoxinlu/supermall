<template>
  <div id="home-swiper">
      <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
      </div>
      <slot name="indicator"></slot>
      <div class="indicator">
          <slot name="indicator" v-if="showIndicator && slideCount>1">
              <div class="indi-item" v-for="(item,index) in slideCount" :class="{active: index === currentIndex-1}" :key="index"></div>
          </slot>
      </div>
  </div>
</template>

<script>
export default {
    name:'Swiper1',
    props:{
        interval:{
            type:Number,
            default:3000,
        },
        animDuration:{
            type:Number,
            default:200
        },
        moveRatio:{
            type:Number,
            default:0.25
        },
        showIndicator:{
            type:Boolean,
            default:true
        }
    },
    data(){
        return{
            slideCount:0,
            totalWidth:0,
            swiperStyle:{},
            currentIndex:1,
            scrolling:false,       //滚动情况
        }
    },
    mounted(){
        setTimeout(()=>{
            this.handleDom();
            this.startTimer();
        },100)
    },
    methods:{
        startTimer(){
            this.playTimer = window.setInterval(()=>{
                this.currentIndex++;
                this.scrollContent(-this.currentIndex*this.totalWidth)
            },this.interval)
        },
        stopTimer(){
            window.clearInterval(this.playTimer)
        },
        //滚动到合适的位置
        scrollContent(currentPosition){
            this.scrolling = true;
            this.swiperStyle.transition = 'transform '+this.animDuration+'ms'
            this.setTransform(currentPosition)
            this.checkPosition();
            this.scrolling = false;
        },
        checkPostion(){
            window.setTimeout(()=>{
                this.swiperStyle.transition = '0ms';
                if(this.currentIndex>this.slideCount+1){
                    this.currentIndex = 1;
                    this.setTransform(-this.currentIndex*this.totalWidth)
                }else if(this.currentIndex<=0){
                    this.currentIndex = this.slideCount;
                    this.setTransform(-this.currentIndex*this.totalWidth)
                }

                this.$emit('transitionEnd',this.currentIndex-1);
            },this.animDuration)
        },
        setTransform(position){
            this.swiperStyle.transform = `translate3d(${position}px),0,0`;
            this.swiperStyle['-webkit-transform'] = `translate3d(${position}px),0,0`;
            this.swiperStyle['-ms-transform'] = `translate3d(${position}px),0,0`;
        
        },
        handleDom(){
            let swiperEl = document.querySelector('.swiper');
            let slidesEls = swiperEl.getElementsByClassName('slide')
            this.slideCount = slidesEls.length;
            if(this.slideCount>1){
                let cloneFirst = slidesEls[0].cloneNode(true);
                let cloneLast = slidesEls[this.slideCount-1].cloneNode(true)
                swiperEl.insertBefore(cloneLast,slidesEls[0])
                swiperEl.appendChild(cloneFirst);
                this.totalWidth = swiperEl.offsetWidth;
                this.swiperStyle = swiperEl.style;
            }
            this.setTransform(-this.totalWidth);
        },
        //处理拖动事件
        touchMove(e){
            this.currentzX = e.touches[0].pageX;
            this.distance = this.currentX - this.startX;
            let currentPosition = -this.currentIndex*this.totalWidth
            let moveDistance = this.distance + currentPosition

            this.setTransfor(moveDistance);
        },
        touchEnd(e){
            let currentMove = Math.abs(this.distance);

            if(this.distance === 0){
                return 
            }else if(this.distance>0 && currentMove>this.totalWidth* moveRatio ){
                this.currentIndex--
            }else if(this.distance<0 && currentMove > this.totalWidth*moveRatio){
                this.currentIndex++
            }
            this.scrollContent(-this.currentIndex * this.totalWidth)

            this.startTimer();
        },
        //控制左右箭头
        previous(){
            this.changeItem(-1);
        },
        next(){
            this.changeItem(1);
        },
        changeItem(num){
            this.stopTimer()

            this.currentIndex+=num;
            this.scrollContent(-this.currentIndex*this.totalWidth)

            this.startTimer();
        }
    }
}
</script>

<style scoped>
    #home-swiper{
        overflow:hidden;
        position:relative;
    }
    .swiper{
        display:flex;
    }
    .indicator{
        display:flex;
        justify-content:center;
        position:absolute;
        width:100%;
        bottom:8px;
    }
    .indi-item{
        box-sizing:border-box;
        width:8px;
        border-radius:4px;
        background-color:#fff;
        line-height:8px;
        text-align:center;
        font-size:12px;
        margin:0 5px;

    }
    .indi-item.active{
        background-color:rgba(212,62,46,1.0);
    }
</style>
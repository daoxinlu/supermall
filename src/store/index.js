import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store =new Vuex.Store( {
    state: {
        cartList:[]
    },
    mutations:{
        addCart(state,args){
            var cur = '';
            console.log(state.cartList)
            if(state.cartList.some((item,index)=>{cur = index;return item.iid==args.iid})){
                state.cartList[cur].count+=1;
                console.log('some')
            }
            else{
                var payload = JSON.parse(JSON.stringify(args))
                payload.count=1;
                payload.checkstate=true;
                state.cartList.push(payload)
                
            }
            
            // localStorage.setItem('cart',JSON.stringify(state.cartList))
            // console.log(localStorage.getItem('cart'))
            
        },
        init(state,args){
            state.cartList = args
        },
        select(state,payload){
            
            var index = state.cartList.findIndex((item)=>{return item.iid==payload.iid})
            console.log(index)
            state.cartList[index].checkstate = payload.checked
            console.log(state.cartList)
        },
        selectAll(state,payload){
            console.log(payload)
            for(let item of state.cartList){
                item.checkstate = payload.checked
            }
        },
        addGood(state,iid){
            var index = state.cartList.findIndex((item)=>{return item.iid==iid})
            state.cartList[index].count++;

        },
        reduceGood(state,iid){
            var index = state.cartList.findIndex((item)=>{return item.iid==iid})
            if(state.cartList[index].count>1){
                state.cartList[index].count--
            }else{
                if(confirm('该商品数量为0，是否删除此商品')){
                    state.cartList.splice(index,1)
                }
            }
        }
    }
})
export default store
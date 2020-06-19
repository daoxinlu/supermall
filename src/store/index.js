import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store =new Vuex.Store( {
    state:{
        cartList:[]
    },
    mutations:{
        addCart(state,args){
            var cur = '';
            if(state.cartList.some((item,index)=>{cur = index;return item.iid==args.iid})){
                state.cartList[cur].count+=1;
                console.log('some')
            }else{
                var payload = JSON.parse(JSON.stringify(args))
                payload.count=1;
                state.cartList.push(payload)
                
            }
            localStorage.setItem('cartList',JSON.stringify(state.cartList))
        },
        init(state,args){
            state.cartList = args
            
        }
    }
})
export default store
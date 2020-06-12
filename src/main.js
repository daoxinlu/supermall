import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {request} from './network/request'

Vue.config.productionTip = false

new Vue({
  router,
  
  render: h => h(App),
}).$mount('#app')

//请求全局api数据
var baseConfig = {
  baseURL:'http://123.207.32.32:8000/',
  timeout:5000,
  url:'api/m3/home/data',
  params:{    //针对get请求，post请求用data:{key:value}
    type:'sell',
    page:2,
  }
}
request(baseConfig).then(res=>{console.log(res)}).catch(err=>{console.log(err)})
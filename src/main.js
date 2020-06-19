import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.config.productionTip = false

import 'mint-ui/lib/style.css'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

//请求全局api数据

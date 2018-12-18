import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/index'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(Vuex);
Vue.use(iView);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

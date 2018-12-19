import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        products:[
            {name:'鼠标',price:'20'},
            {name:'键盘',price:'40'},
            {name:'耳机',price:'60'},
            {name:'显示屏',price:'80'},
        ],
        testMsg:'原始文本',
        childTest: '子组件原始文本'
    },
    getters:{
        saleProducts:(state)=>{
            let saleProducts = state.products.map(product =>{
                return{
                    name:product.name,
                    price:product.price/2
                }
            });
            return saleProducts;
        }
    },
    mutations:{
        minusPrice(state,payload){
            let newPrice = state.products.forEach(product=>{
                product.price -= payload
            })
        },
        changeTextMsg(state,str){
            state.testMsg = str;
        },
        changeChildText(state,str){
            state.childTest = str;
        }
    },
    actions:{
        minusPriceAsync(context,payload){
            setTimeout(()=>{
                context.commit('minusPrice',payload);
            },2000)
        }
    }
})

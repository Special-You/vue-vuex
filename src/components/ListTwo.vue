<template>
    <div class="listTwo">
        <h2>Product List Two</h2>
        <ul>
            <li v-for="(product,index) in products" :key="index">
                <span>{{product.name}}</span>
                <span class="price">${{product.price}}</span>
            </li>
            <Button type="info" style="margin-top: 10px" @click="minusPrice">减少价格</Button>
            <Button type="dashed" style="margin: 10px 0 0 20px" @click="minusPriceAsync">异步减少价格</Button>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ListTwo",
        // props: ['products'],
        data() {
            return {
                products: this.$store.state.products
            }
        },
        methods:{
            minusPrice(){
                this.$store.commit('minusPrice',2);
            },
            minusPriceAsync(){
                this.$store.dispatch('minusPriceAsync',5);
            }
        }
    }
</script>

<style scoped>
    .listTwo {
        background: #D1E4FF;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
        margin: 30px;
        padding: 10px 20px;
    }

    .listTwo li {
        list-style: none;
        margin-right: 10px;
        margin-top: 10px;
        padding: 20px;
        background: rgba(255,255,255,0.7);
        font-size: 16px;
    }
    .price{
        font-weight: bold;
        color: #860CE8;
        display: inline-block;
        margin-left: 5px;
    }
</style>

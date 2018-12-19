<template>
    <div class="listOne">
        <h2>Product List One</h2>
        <ul>
            <li v-for="(product,index) in products" :key="index">
                <span>{{product.name}}</span>
                <span class="price">￥{{product.price}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ListOne",
         // props: ['products'],
        data() {
            return {
                products: this.$store.getters.saleProducts
            }
        }
    }
</script>

<style scoped>
    .listOne {
        background: #FFF8B1;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
        margin: 50px 0;
        padding: 10px 20px;
    }

    .listOne li {
        display: inline-block;
        margin-right: 10px;
        margin-top: 10px;
        padding: 20px;
        background: rgba(255,255,255,0.7);
        font-size: 16px;
    }
    .price{
        font-weight: bold;
        color: #E8800C;
        margin-left: 5px;
    }
</style>

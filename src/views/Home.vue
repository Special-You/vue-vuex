<template>
    <div class="home">
        <!--<img alt="Vue logo" src="../assets/logo.png">-->
        <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <ListOne></ListOne>
        <ListTwo></ListTwo>
    </div>
</template>

<script>
    // @ is an alias to /src
    import ListOne from '@/components/Home/ListOne.vue'
    import ListTwo from '@/components/Home/ListTwo.vue'

    export default {
        name: 'home',
        components: {
            ListOne,
            ListTwo
        },
        data() {
            return{

            }
        }
    }
</script>

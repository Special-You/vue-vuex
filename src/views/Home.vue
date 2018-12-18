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
    import HelloWorld from '@/components/HelloWorld.vue'
    import ListOne from '@/components/ListOne.vue'
    import ListTwo from '@/components/ListTwo.vue'

    export default {
        name: 'home',
        components: {
            HelloWorld,
            ListOne,
            ListTwo
        },
        data() {
            return{

            }
        }
    }
</script>

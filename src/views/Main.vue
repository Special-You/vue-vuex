<template>
    <div class="main">
        <Header></Header>
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'

    export default {
        name: "Main",
        components: {
            Header
        }
    }
</script>

<style scoped>

</style>

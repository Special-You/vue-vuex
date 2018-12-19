<template>
    <div>
        <div class="control">
            <h3 style="margin: 30px">这是父组件</h3>
            <Button  style="margin: 0 20px" @click="change1">修改自己文本</Button>
            <Button type="dashed" @click="change2">修改子组件文本</Button>
            <div class="test">Test: {{msg}}</div>
        </div>
        <Child></Child>
    </div>
</template>

<script>
    import Child from '../components/Control/Child'

    export default {
        name: "Control",
        components: {
            Child
        },
        computed:{
            msg(){
                return this.$store.state.testMsg;
            }
        },
        methods:{
            change1(){
                this.$store.commit('changeTextMsg', '父组件修改自己之后的文本')
            },
            change2(){
                this.$store.commit('changeChildText', '父组件修改子组件之后的文本')
            }
        }
    }
</script>

<style scoped>
    .control {
        background-color: #d9fadf;
        box-shadow: 3px 1px 4px rgba(0, 0, 0, 0.4);
        padding: 20px;
        margin: 20px 100px;
    }
    .test{
        margin-top: 20px;
        font-size: 16px;
        font-weight: bold;
    }
</style>

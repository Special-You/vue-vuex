<template>
    <div class="child">
        <h3 class="title">这是子组件</h3>
        <Button  style="margin: 0 20px" @click="change1">修改父组件文本</Button>
        <Button type="dashed" @click="change2">修改自己文本</Button>
        <div class="test">Text: {{msg}}</div>
    </div>
</template>

<script>
    export default {
        name: "Child",
        computed: {
            msg() {
                return this.$store.state.childTest;
            }
        },
        methods: {
            change1() {
                this.$store.commit('changeTextMsg', '子组件修改父组件之后的文本')
            },
            change2() {
                this.$store.commit('changeChildText', '子组件修改自己之后的文本')
            }
        }
    }
</script>

<style scoped>
    .child {
        background-color: aliceblue;
        box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.5);
        padding: 30px;
        margin: 20px 100px;
    }

    .title {
        margin-bottom: 20px;
    }
    .test{
        margin-top: 20px;
        font-size: 16px;
        font-weight: bold;
    }
</style>

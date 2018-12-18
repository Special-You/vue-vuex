<template>
    <div class="header">
        <Menu theme="dark" mode="horizontal">
            <Row>
                <Col span="2" offset="6">
                    <MenuItem name="1" to="/home">
                        <Icon type="ios-paper" />
                        Home
                    </MenuItem>
                </Col>
                <Col  span="2">
                    <MenuItem name="2" to="/about">
                        <Icon type="ios-people" />
                        About
                    </MenuItem>
                </Col>
            </Row>
        </Menu>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <div class="header">
        <Menu theme="light" mode="horizontal">
            <Row>
                <Col :xs="2" :sm="4" :md="6" :lg="4" offset="6">
                    <MenuItem name="1" to="/home">
                        <Icon type="ios-paper" />
                        Home
                    </MenuItem>
                </Col>
                <Col  :xs="4" :sm="4" :md="4" :lg="6">
                    <MenuItem name="2" to="/about">
                        <Icon type="md-color-palette" />
                        About
                    </MenuItem>
                </Col>
                <Col  :xs="4" :sm="4" :md="4" :lg="6">
                    <MenuItem name="3" to="/control">
                        <Icon type="ios-build" />
                        Control
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

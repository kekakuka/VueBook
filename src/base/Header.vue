<template>
    <div class="header"><span @click="backToHome" v-if="back">←</span><slot></slot></div>
</template>

<script>
    export default {
        props:{
            back:{
                type:Boolean,
                default:false
            },
            detail:{
                type:Boolean,
                default:false
            }
        },
        created() {

        },
        methods: {
            backToHome(){
                if (this.detail){
                this.$router.push('/list');
                }else { this.$router.push('/');}
            },
        },
        computed: {},
        components: {}
    }
</script>

<style scoped lang="less">
.header{

    background-color: lightgoldenrodyellow;
    width: 100%;
    position: fixed;
    text-align: center;
    height: 27px;
    span{
        font-size:35px ;
        position: absolute;
        left: 10px;
        top: -18px;

    }
}
</style>

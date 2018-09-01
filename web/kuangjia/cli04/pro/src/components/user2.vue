<template>
    <div>
        <h1 v-for="v in msg1" :key="v">{{v}}</h1>
        <button @click="a()">more</button>
        <h2>{{m}}</h2>
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg1:[
                'abc',
                'def',
                'ghi'
            ]
        }
    },
    methods:{
        a:function(){
            this.$emit('kk',this.msg1)
        }
    },
    props:['m']
}
</script>

<style scoped>

</style>
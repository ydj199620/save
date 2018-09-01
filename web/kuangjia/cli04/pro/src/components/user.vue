<template>
    <div>
        <h1 v-for="v in msg" :key="v">{{v}}</h1>
        <aa @kk='b' :m='msg2'></aa>
        <h1>{{count}}</h1>
    </div>
</template>

<script>
    import aa from './user2'
    import store from '@/vuex/store'
    import {mapState} from 'vuex'
    export default {
        components:{aa},
        store,
        data(){
           return{
            msg:['123','456','789'],
            msg2:'老师你真美'
           }
        },
        methods:{
            b:function(c){
                this.msg=c
            }
        },
        computed:{
            ...mapState(['count'])
        }
    }
</script>
 
<style scoped>
    h1{
        color: red;
    }
</style>

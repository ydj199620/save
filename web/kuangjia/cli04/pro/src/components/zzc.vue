<template>
    <div>
        <button @click="a()">点击</button>
        <aa v-if="isshow"></aa>
    </div>
</template>

<script>
import store from '@/vuex/store'
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'
import aa from './zzc2'
    export default {
        components:{aa},
        store,
        methods:{
            ...mapMutations(['a'])
        },
        computed:{
            ...mapState(['isshow'])
        }
    }
</script>

<style scoped>
    
</style>
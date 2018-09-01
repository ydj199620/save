import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
const state={
    count:10,
    isshow:false
}
const mutations ={
    a(state){
        state.isshow=!state.isshow
    }
}
export default new vuex.Store({
    state,
    mutations
})
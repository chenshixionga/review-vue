import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
  count:1
}

const mutations={
  add(state,n){
    state.count+=n;
  },
  reduce(state){
    state.count--;
  }
}

const getters = {
  countTemp:function(state){
    return state.count +=100;
  }
}

const actions ={
  addAction(context,n){
    context.commit('add',n)
    // setTimeOut(()=>{context.commit(reduce)},3000);
    // console.log('我比reduce提前执行');
  },

  reduceAction({commit}){
    commit('reduce')
  }
}

export default new Vuex.Store({
  state,mutations,getters,actions
})

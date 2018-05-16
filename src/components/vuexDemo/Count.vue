
<template>
  <div>
    <h2>{{msg}}</h2>
    <hr/>
    <h3>{{$store.getters.countTemp}}-{{countTemp}}</h3>
    <h3>{{$store.state.count}}-{{count}}</h3>

    <div>
      <button @click="$store.commit('add',10)">+</button>
      <button @click="$store.commit('reduce')">-</button>
      <!--使用mapMutations-->
      <button @click="add(5)">+Mutations</button>
      <button @click="reduce()">-Mutations</button>
    </div>
    <p>
      <button @click="addAction(5)">+actions</button>
      <button @click="reduceAction()">-actions</button>
    </p>
  </div>
</template>
<script>
  import { mapState,mapMutations,mapGetters,mapActions} from 'vuex'
  export default{
    data(){
      return{
        msg:'Hello Vuex',
      }
    },
//    使用state中的值
    computed:{
        ...mapState(["count"]),
        ...mapGetters(["countTemp"]),
        /*count(){
            return this.$store.state.count
        }*/
    },
   /* computed:mapState({
      count:state=>state.count
    }),*/
//    computed:mapState(["count"]),
    methods:{
      ...mapMutations(['add','reduce'    ]),
      ...mapActions(['addAction','reduceAction'])

    }
  }
</script>

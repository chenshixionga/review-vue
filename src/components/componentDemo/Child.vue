
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>标题：{{propDemo}}</h1>
    <button @click="changeProps">逆转</button>
  </div>
</template>

<script>
  export default {
    name: 'hi',
    data () {
      return {
        msg: 'Hi, I am childComponent!'
      }
    },
//    props:["propDemo"],
    props:{
        propDemo:String
    },
    methods:{
        changeProps(){
//            this.propDemo=this.propDemo+"111111"
        }
    }
  }
</script>


<style scoped>

</style>

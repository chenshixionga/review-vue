
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>username：{{ $route.params.username }}</h1>
    <button @click="go()">hi2</button>
    <table>
      <parent-componet></parent-componet>
    </table>

  </div>
</template>

<script>
  import Parent from '@/components/componentDemo/Parent'
  export default {
    name: 'hi',
    data () {
      return {
        msg: 'Hi, I am Hi1',
        path:'www.baidd.com'
      }
    },
    methods: {
      go(){
        this.$router.push({name: 'hi3', params: {userId: 123}})
      }
    },
    components:{
      'parentComponet':Parent
    },
  }
</script>


<style scoped>

</style>


<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>username：{{ $route.params.username }}</h1>
    <h1>userId: {{$route.params.userId}}</h1>
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
        path:'www.baidd.com',
        userId:null
      }
    },
    created(){
      this.userId=this.$route.params.userId
    },
    methods: {

    },
    components:{
      'parentComponet':Parent
    },
  }
</script>


<style scoped>

</style>

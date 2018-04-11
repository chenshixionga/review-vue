
<template>
  <div class="hello">
    <input v-model="msg"/>
    <button v-on:click="change">发送事件</button>
  </div>
</template>

<script>
  export default {
    name: 'hi',
    data () {
      return {
        msg: 'Hi, I am ChildEvent!'
      }
    },
    methods:{
        change(){
          console.log('子组件启动')
          this.$emit('change',{message:this.msg})
        }
    }
  }
</script>


<style scoped>

</style>

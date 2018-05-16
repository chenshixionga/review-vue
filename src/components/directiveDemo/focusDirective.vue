<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-focus/>
    <!--<input v-global/>-->
    <!-- <input v-focus/> -->
    <input v-globalDirective />
  </div>
</template>

<script>
  export default {
    name: 'hi',
    data () {
      return {
        msg: 'Hi, I am focusDirective!'
      }
    },
    methods:{
    },
    directives: {
      focus: {
        // 指令的定义
        inserted: function (el) {
          el.focus()
        }
      }
    }
  }
</script>


<style scoped>

</style>

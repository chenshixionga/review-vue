
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <slot text="作用域插槽1111！">这里是slot默认值</slot>
    <slot name="desk"><div>这里是名字为desk的Slot</div></slot>
  </div>
</template>

<script>
  export default {
    name: 'hi',
    data () {
      return {
        msg: 'Hi, I am slotTest!'
      }
    },
    methods:{
    }
  }
</script>


<style scoped>

</style>

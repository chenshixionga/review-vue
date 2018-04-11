<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span>
      <input
        ref="input"
        v-bind:value="value"
        v-on:input="updateValue($event.target.value)">
    </span>
  </div>
</template>

<script>
  export default {
    name: 'hi',
    data () {
      return {
        msg: 'Hi, I am v-model component'
      }
    },
    props: ['value'],
    methods: {
      updateValue(val){
        this.$emit('input', val)
        console.log(this.$refs.input.value)
      }
    }
  }
</script>


<style scoped>

</style>

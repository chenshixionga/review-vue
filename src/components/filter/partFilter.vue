
<template>
  <div class="hello">
    <h1>{{ msg | capitalize }}</h1>
    <h1>{{ test | globalFilter }}</h1>

  </div>
</template>

<script>
  export default {
    name: 'hi',
    data () {
      return {
        msg: 'hi, I am childComponent!',
        test: 'global filter'
      }
    },
    methods:{
    },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    }
  }
</script>


<style scoped>

</style>

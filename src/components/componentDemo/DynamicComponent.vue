
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
  import Parent from '@/components/componentDemo/Parent'
  import Child from '@/components/componentDemo/Child'
  import ChildEvent from '@/components/componentDemo/ChildEvent'
  export default {
    name: 'hi',
    data () {
      return {
        msg: 'Hi, I am dynamicComponent!',
        currentComponent:'childComponent'
      }
    },
    components: {
      'parentComponet': Parent,
      'childComponent': Child,
      'childEvent': ChildEvent,
    },
    methods:{
    }
  }
</script>


<style scoped>

</style>

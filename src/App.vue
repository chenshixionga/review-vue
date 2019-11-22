<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  /*路由过渡效果*/
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 2s;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-leave-active {
    opacity: 0;
    transition: opacity 2s;
  }

  .test{
    float: left;
  }
</style>

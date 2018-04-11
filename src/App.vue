<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>导航
      <router-link to="/">首页</router-link>
      <router-link to="/hi">欢迎页</router-link>
      <!--子路由-->
      <router-link to="/hi/hi1">Hi1页</router-link>
      <!--路由传参-->
      <router-link :to="{name:'hi1',params:{username:'jspang'}}">Hi1页传参</router-link>
      <router-link to="/hi/hi2">Hi2页路由传参</router-link>
      <br>
      <!--url形式传参-->
      <router-link to="url/123145">url传参</router-link>
      <!--多个<router-link></router-link>-->
      <router-link to="/Hi11">Hi11</router-link>
      <router-link to="/Hi22">Hi22</router-link>
      <!--重定向:优势重定向到当前页面仍然能够显示，若不用重定向，直接用组件无法显示-->
      <router-link to="/redirect">Redirect</router-link>
      <router-link to="/redirect/redirectParams"> Redirect传参</router-link>
      <!--别名alias-->
      <router-link to="/aliasTest">别名</router-link>
    </p>
    <p>
      <button @click="goBack()">回退</button>
      <button @click="goHome()">首页</button>
      <router-link to="/count">Count组件</router-link>
    </p>
    <router-view/>
    <transition name="fade" mode="out-in">
      <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
    </transition>
    <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
    <!--<parent-componet></parent-componet>-->
   <!-- <child-component :propDemo="msg"></child-component>
    <ul>
      <li v-for="m in messages">{{m}}</li>
    </ul>
    <child-event @change="changeExecute" v-on:mouseover.native="hoverNative"></child-event>
    <p>{{vmodelTest}}</p>
    <vmodel-child v-model="vmodelTest"></vmodel-child>-->
   <!-- <slot-child>
      <span slot-scope="prop">父组件插入的内容！{{prop.text}}</span>
      &lt;!&ndash;<p slot-scope="{text}">解构形式展示：{{text}}</p>&ndash;&gt;
      <div slot="desk">
        <p>名字：kankan</p>
        <p>年龄：18</p>
      </div>
    </slot-child>
    <dynamic-component></dynamic-component>-->
    <focus-directive></focus-directive>
  </div>
</template>

<script>
//  组件
  import Parent from '@/components/componentDemo/Parent'
  import Child from '@/components/componentDemo/Child'
  import ChildEvent from '@/components/componentDemo/ChildEvent'
  import VmodelChild from '@/components/componentDemo/VmodelChild'
//  import SlotChild from '@/components/componentDemo/SlotChild'
  import DynamicComponent from '@/components/componentDemo/DynamicComponent'
//  指令
  export default {
    name: 'App',
    data(){
      return {
        msg: '1234',
        messages: [],
        vmodelTest:''
      }
    },
    components: {
      'parentComponet': Parent,
      'childComponent': Child,
      'childEvent': ChildEvent,
      'vmodelChild':VmodelChild,
//      'slotChild':SlotChild,
      'dynamicComponent':DynamicComponent
    },
    methods: {
      goBack(){
        console.log("goback")
        this.$router.go(-1);
      },
      goHome(){
        this.$router.push("/");
      },
      changeExecute(payload){
        console.log('父组件接收到事件11111111')
//        console.log(payload)
        this.messages.push(payload.message)
      },
      hoverNative(){
          console.log('native')
      }
    }
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
</style>

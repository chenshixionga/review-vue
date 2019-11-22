<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--<img src="/assets/logo.png">-->
    <div v-html="html"></div>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
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
      <button @click="goBack()" class="test">回退</button>
      <button @click="goHome()">首页</button>
      <router-link to="/count">Count组件</router-link>
    </p>
    <router-view/>
    <transition name="fade" mode="out-in">
      <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
    </transition>
    <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
    <div>好人</div>
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
    <part-filter></part-filter>
    <button @click="axiosTest">testAxios</button>
    <button @click="lazyTest">lazyTest</button>
    <button @click="lazyTest1">lazyTest1</button>
    <button @click="lazyTest2">lazyTest2</button>
    <button @click="contact">contact</button>
  </div>
</template>

<script>
  //  组件
  import Parent from '@/components/componentDemo/Parent'
  import Child from '@/components/componentDemo/Child'
  import ChildEvent from '@/components/componentDemo/ChildEvent'
  import VmodelChild from '@/components/componentDemo/VmodelChild'
  import PartFilter from '@/components/filter/partFilter'
  //  import SlotChild from '@/components/componentDemo/SlotChild'
  import DynamicComponent from '@/components/componentDemo/DynamicComponent'
  import { test } from '@/util/remoteData'
  //  指令
export default {
  name: 'HelloWorld',
  data(){
    return {
      msg: '1234',
      messages: [],
      vmodelTest:'',
      html: `<p style="text-align: center; border: 0px; margin-top: 0.63em; margin-bottom: 1.8em; padding: 0px; font-size: 16px; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; color: rgb(25, 25, 25); font-family: &quot;PingFang SC&quot;, Arial, 微软雅黑, 宋体, simsun, sans-serif;"><font style="font-size: 48px;"><b>手</b></font><font style="color: rgb(247, 173, 107); font-size: 48px;"><b>册</b></font></p><p style="text-align: left; border: 0px; margin-top: 0.63em; margin-bottom: 1.8em; padding: 0px; font-size: 16px; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; color: rgb(25, 25, 25); font-family: &quot;PingFang SC&quot;, Arial, 微软雅黑, 宋体, simsun, sans-serif;">厦门靓万家网络科技有限公司是一家为广大客户提供整体家装解决方案的互联网家装公司，公司通过互联网平台及3D技术将地产商、家具家居用品制造商、家装公司、设计师、广大业主紧密地联系在一起，不断在传统家装与互联网+模式中进行探索，搭建了一套全新的家装项目服务流程，为顾客提供从免费在线家装设计、高品质VR软装体验、家居物品采购等一站式家装解决方案，是一家技术创新型的高新技术企业。&nbsp; &nbsp; &nbsp; &nbsp;</p><p style="text-align: center; border: 0px; margin-top: 0.63em; margin-bottom: 1.8em; padding: 0px; font-size: 16px; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; color: rgb(25, 25, 25); font-family: &quot;PingFang SC&quot;, Arial, 微软雅黑, 宋体, simsun, sans-serif;"><br></p><p style="border: 0px; margin-top: 0.63em; margin-bottom: 1.8em; padding: 0px; font-size: 16px; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; color: rgb(25, 25, 25); font-family: &quot;PingFang SC&quot;, Arial, 微软雅黑, 宋体, simsun, sans-serif;"><img src="http://img.mp.itc.cn/upload/20161206/ac65716a10b74442a736af4fbbfecd42_th.jpeg" style="margin: 10px auto 0px; padding: 0px; display: block; max-width: 100%; height: auto;"></p><p style="border: 0px; margin-top: 0.63em; margin-bottom: 1.8em; padding: 0px; font-size: 16px; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; color: rgb(25, 25, 25); font-family: &quot;PingFang SC&quot;, Arial, 微软雅黑, 宋体, simsun, sans-serif;"><span style="border: 0px; margin: 0px; padding: 0px;">厦门靓万家网络科技有限公司董事长 罗文波</span></p><p style="border: 0px; margin-top: 0.63em; margin-bottom: 1.8em; padding: 0px; font-size: 16px; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; color: rgb(25, 25, 25); font-family: &quot;PingFang SC&quot;, Arial, 微软雅黑, 宋体, simsun, sans-serif;">在软装这个领域里面，我们掌握了两个核心的基本要素，一个是我们的供应链，一个是我们的技术平台。比如说供应链我们整合了有100多个品牌，而且现在品牌的数量每天都逐步在增加，之所以这些品牌愿意跟我们合作，是因为我们能够反向的协助这些厂家，这些品牌，能够支持他们在业绩上在渠道上做更好的发展。</p><p style="border: 0px; margin-top: 0.63em; margin-bottom: 1.8em; padding: 0px; font-size: 16px; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; color: rgb(25, 25, 25); font-family: &quot;PingFang SC&quot;, Arial, 微软雅黑, 宋体, simsun, sans-serif;">我们自己开发的3D设计软件，在全国的技术至少排在前五名。我们在传统的设计师的基础上，把效率提升了至少100倍以上，也就是说我们正常2个小时左右就可以出一套完整的3D立体的户型效果图。</p><p style="border: 0px; margin-top: 0.63em; margin-bottom: 1.8em; padding: 0px; font-size: 16px; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; color: rgb(25, 25, 25); font-family: &quot;PingFang SC&quot;, Arial, 微软雅黑, 宋体, simsun, sans-serif;"><span style="border: 0px; margin: 0px; padding: 0px;">&nbsp;</span></p><p style="border: 0px; margin-top: 0.63em; margin-bottom: 1.8em; padding: 0px; font-size: 16px; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; color: rgb(25, 25, 25); font-family: &quot;PingFang SC&quot;, Arial, 微软雅黑, 宋体, simsun, sans-serif;"><img src="http://img.mp.itc.cn/upload/20161206/a7a4fdf3074a447fa9ac56e5022d6580_th.jpeg" style="margin: 10px auto 0px; padding: 0px; display: block; max-width: 100%; height: auto;"></p><p style="border: 0px; margin-top: 0.63em; margin-bottom: 1.8em; padding: 0px; font-size: 16px; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; color: rgb(25, 25, 25); font-family: &quot;PingFang SC&quot;, Arial, 微软雅黑, 宋体, simsun, sans-serif;"><span style="border: 0px; margin: 0px; padding: 0px;">“所见即所得”是靓万家一直推崇的理念，通过前端的电商平台与后台的3D设计软件的无缝链接，设计师免费为客户设计出家装效果图。</span></p><p style="border: 0px; margin-top: 0.63em; margin-bottom: 1.8em; padding: 0px; font-size: 16px; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; color: rgb(25, 25, 25); font-family: &quot;PingFang SC&quot;, Arial, 微软雅黑, 宋体, simsun, sans-serif;"><img src="http://img.mp.itc.cn/upload/20161206/04358cd6dc794c47a6ca2310aa6b8357_th.jpeg" style="margin: 10px auto 0px; padding: 0px; display: block; max-width: 100%; height: auto;"></p><p style="border: 0px; margin-top: 0.63em; margin-bottom: 1.8em; padding: 0px; font-size: 16px; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; color: rgb(25, 25, 25); font-family: &quot;PingFang SC&quot;, Arial, 微软雅黑, 宋体, simsun, sans-serif;"><span style="border: 0px; margin: 0px; padding: 0px;">由于设计方案里的每一件物品都是真实的商品，因此效果图一旦确认，预算即可确定，无需再为预算编制及采购商品大费周折。顾客只需选择好自己的小区和户型，就可以根据需求挑选不同风格的家装设计方案。</span></p><p style="border: 0px; margin-top: 0.63em; margin-bottom: 1.8em; padding: 0px; font-size: 16px; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; color: rgb(25, 25, 25); font-family: &quot;PingFang SC&quot;, Arial, 微软雅黑, 宋体, simsun, sans-serif;"><img src="http://img.mp.itc.cn/upload/20161206/ebb42d3e60ea4532b3deb47ae15c6c62_th.jpeg" style="margin: 10px auto 0px; padding: 0px; display: block; max-width: 100%; height: auto;"></p><p style="border: 0px; margin-top: 0.63em; margin-bottom: 1.8em; padding: 0px; font-size: 16px; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; color: rgb(25, 25, 25); font-family: &quot;PingFang SC&quot;, Arial, 微软雅黑, 宋体, simsun, sans-serif;">互联网装修领域应该说是一个不太透明，并且很耗时间，而且很讲究一个效果的行业，也就是说你的家庭必须布置的漂亮，就必须得有设计，要买到合适的商品，性价比高的商品就必须要有一个供应的渠道。你要把整个家庭配齐，按原有的传统渠道是要花很多时间的，正常都要3-4个月时间，我们是解决便利性的问题，我们其实是实现一条龙的服务，我们45天就能全部配齐，在过程中，我们的客户是不需要有任何的操心，也不需要有任何的时间上的浪费。</p><p style="border: 0px; margin-top: 0.63em; margin-bottom: 1.8em; padding: 0px; font-size: 16px; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; color: rgb(25, 25, 25); font-family: &quot;PingFang SC&quot;, Arial, 微软雅黑, 宋体, simsun, sans-serif;"><span style="border: 0px; margin: 0px; padding: 0px;">&nbsp;</span></p><p style="border: 0px; margin-top: 0.63em; margin-bottom: 1.8em; padding: 0px; font-size: 16px; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; color: rgb(25, 25, 25); font-family: &quot;PingFang SC&quot;, Arial, 微软雅黑, 宋体, simsun, sans-serif;"><img src="http://img.mp.itc.cn/upload/20161206/c50f3fb0f6a944f78fa8d9258c7d3fbe_th.jpeg" style="margin: 10px auto 0px; padding: 0px; display: block; max-width: 100%; height: auto;"></p><p style="border: 0px; margin-top: 0.63em; margin-bottom: 1.8em; padding: 0px; font-size: 16px; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; color: rgb(25, 25, 25); font-family: &quot;PingFang SC&quot;, Arial, 微软雅黑, 宋体, simsun, sans-serif;"><img src="http://img.mp.itc.cn/upload/20161206/de6f83da77134ba0a7b4b12070889500_th.jpeg" style="margin: 10px auto 0px; padding: 0px; display: block; max-width: 100%; height: auto;"></p><p style="border: 0px; margin-top: 0.63em; margin-bottom: 1.8em; padding: 0px; font-size: 16px; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; color: rgb(25, 25, 25); font-family: &quot;PingFang SC&quot;, Arial, 微软雅黑, 宋体, simsun, sans-serif;"><span style="border: 0px; margin: 0px; padding: 0px;">在靓万家位于湾悦城二楼的体验店我们可以看到，顾客对于</span><span style="border: 0px; margin: 0px; padding: 0px;">720</span><span style="border: 0px; margin: 0px; padding: 0px;">度</span><span style="border: 0px; margin: 0px; padding: 0px;">VR</span><span style="border: 0px; margin: 0px; padding: 0px;">空间展示非常感兴趣。他们认为这种全新的家装体验能够有效降低家装过程中的决策成本，让消费者享受到安心且舒心的家装体验。</span></p><p style="border: 0px; margin-top: 0.63em; margin-bottom: 1.8em; padding: 0px; font-size: 16px; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; color: rgb(25, 25, 25); font-family: &quot;PingFang SC&quot;, Arial, 微软雅黑, 宋体, simsun, sans-serif;"><img src="http://img.mp.itc.cn/upload/20161206/0ef6fb580bb34ea59acce23c38ada77e_th.jpeg" style="margin: 10px auto 0px; padding: 0px; display: block; max-width: 100%; height: auto;"></p><p style="border: 0px; margin-top: 0.63em; margin-bottom: 1.8em; padding: 0px; font-size: 16px; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; color: rgb(25, 25, 25); font-family: &quot;PingFang SC&quot;, Arial, 微软雅黑, 宋体, simsun, sans-serif;"><span style="border: 0px; margin: 0px; padding: 0px;">&nbsp;</span></p><p style="border: 0px; margin-top: 0.63em; margin-bottom: 1.8em; padding: 0px; font-size: 16px; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; color: rgb(25, 25, 25); font-family: &quot;PingFang SC&quot;, Arial, 微软雅黑, 宋体, simsun, sans-serif;">正常一个客户进来到体验厅的话，我们要根据客户这个需求，比如说客户目前有没有装修房子，我们会跟他说我们会有这么一款设备，一款软件，就是我们的VR，客户就会说目前给客户做一个设计，设计完之后，客户通过VR看到装修完以后实际效果，效果就会跟实际基本上是一致的，因为我们这个VR里面所有内容都是我们提前就已经把这个模型一比一做好，做进去的，所以就保证说所见即所得。</p><p style="border: 0px; margin-top: 0.63em; margin-bottom: 1.8em; padding: 0px; font-size: 16px; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; color: rgb(25, 25, 25); font-family: &quot;PingFang SC&quot;, Arial, 微软雅黑, 宋体, simsun, sans-serif;">很多客户过来体验说，很吃惊，觉得哇，好真实啊，因为我们现在技术是用UE4来做的，基本是目前做一些大型游戏，都是用这个平台来做，所以包括我们这款软件也是加在这个上面来做，真实度也比较真实。他们（顾客）觉得这种做法是一个很新的体验方式。</p><p style="border: 0px; margin-top: 0.63em; margin-bottom: 1.8em; padding: 0px; font-size: 16px; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; color: rgb(25, 25, 25); font-family: &quot;PingFang SC&quot;, Arial, 微软雅黑, 宋体, simsun, sans-serif;"><span style="border: 0px; margin: 0px; padding: 0px;">——厦门靓万家网络科技有限公司设计师 郑翔滩</span></p><div></div>`,
      options: [{
        value: '选项2',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  },
  components: {
    'parentComponet': Parent,
    'childComponent': Child,
    'childEvent': ChildEvent,
    'vmodelChild':VmodelChild,
    'dynamicComponent':DynamicComponent,
    'partFilter' :PartFilter
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
    },
    axiosTest(){
      //  this.$axios.get('/sxtstu/blueberrypai/getchengpinDetails.php')
      let url = this.api +"/v2/movie/top250"
      console.log(url)
      this.$axios.get(url,{
        params:{
          start:0,
          count:10
        }
      })
    },
    lazyTest(){
      this.$router.push('/lazy')
    },
    lazyTest1(){
      this.$router.push('/lazy1')
    },
    lazyTest2(){
      this.$router.push('/lazy2')
    },
    contact(){
      const val=test('contact')
      console.log('val='+val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

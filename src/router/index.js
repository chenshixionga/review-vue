import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/routerDemo/HelloWorld'
import Hi from '@/components/routerDemo/Hi'
import Hi1 from '@/components/routerDemo/Hi1'
import Hi2 from '@/components/routerDemo/Hi2'
import Hi11 from '@/components/routerDemo/Hi11'
import Hi22 from '@/components/routerDemo/Hi22'
import Error from '@/components/routerDemo/Error'
import Count from '@/components/vuexDemo/Count'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hi',
      name: 'Hi',
      component: Hi,
      alias:'/aliasTest',
      children:[
        {path:'/',component:Hi},
        {
          path: 'hi1',
          name:'hi1',
          component: Hi1
        },
        {
          path: 'hi2',
          component: Hi2
        }
      ]
    },
    {
      path: '/Hi11',
      components: {
        default:HelloWorld,
        left:Hi11,
        right:Hi22
      }
    },{
      path: '/Hi22',
      components: {
        default:HelloWorld,
        left:Hi22,
        right:Hi11
      }
    },{
       path:'/url/:username',
       component:Hi1,
      beforeEnter:(to,from,next)=>{
        console.log('我进入了params模板');
        console.log(to);
        console.log(from);
        next();
       }
    },{
      path:'/redirect',
      redirect:'/hi'
    },{
       path:'/redirect/:username',
       redirect:'/url/:username'
    },{
      path:'*',
      component:Error
    },{
      path:'/count',
      component:Count
    }
  ]
})

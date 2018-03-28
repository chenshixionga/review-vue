import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Hi11 from '@/components/Hi11'
import Hi22 from '@/components/Hi22'

Vue.use(Router)

export default new Router({
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
       component:Hi1
    },{
      path:'/redirect',
      redirect:'/hi'
    },{
       path:'/redirect/:username',
       redirect:'/url/:username'
    }
  ]
})

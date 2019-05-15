import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constRouters = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', noCache: true, affix: true }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '*',
    redirect: '/'
  }
]

const generateRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constRouters
})

const router = generateRouter()
export default router

export function createRouter(menus){
  if( menus == false){
    return constRouters
  }
  let routes = []

  for(let menu of menus){
    console.info("menu = " + JSON.stringify(menu))
    let route = {

      path: menu.url,
      component: Layout,
      redirect: menu.url,
      children: [
        {
          path: menu.url + "/index",
          component: () => import('@/views' + menu.url + "/index"),
          name: menu.name,
          meta: { title: menu.title, icon: menu.icon, noCache: menu.noCache === 1 }
        }
      ]
    }
    routes.push(route)
  }
  router.addRoutes(routes)
  return constRouters.concat(routes)
}

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = generateRouter();
  console.log(router)
  router.matcher = newRouter.matcher // reset router
}

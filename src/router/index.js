import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Live from '@/views/Live'
import Divisions from '@/views/Divisions'
import Team from '@/views/Team'
import Schedule from '@/views/Schedule'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/live',
      name: 'Home',
      component: Full,
      children: [
        {
          path: 'live',
          name: 'Live',
          component: Live
        },
        {
          path: 'divisions',
          name: 'Divisions',
          component: Divisions
        },
        {
          path: '/team/:id',
          name: 'Team',
          component: Team
        },
        {
          path: 'schedule',
          name: 'Schedule',
          component: Schedule
        }
      ]
    }
  ]
})

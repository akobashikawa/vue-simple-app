import Home from './Home.js';
import About from './About.js';

const router = new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
});

export default router;
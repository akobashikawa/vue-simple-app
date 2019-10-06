const Home = () => import('./Home.js');
const About = () => import('./About.js');

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
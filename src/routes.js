const Home = () => import('./components/home.vue');
const NotFound = () => import('./components/not-found.vue');

export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '*',
    component: NotFound,
  },
];

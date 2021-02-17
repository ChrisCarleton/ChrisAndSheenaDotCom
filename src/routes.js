const Diving = () => import('./components/diving/diving.vue');
const Home = () => import('./components/home.vue');
const NotFound = () => import('./components/not-found.vue');

export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/diving/:trip',
    component: Diving,
  },
  {
    path: '*',
    component: NotFound,
  },
];

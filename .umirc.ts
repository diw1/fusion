import { defineConfig } from '@umijs/max';

// @ts-ignore
export default defineConfig({
  antd: {},
  access: {},
  dva: {},
  model: {},
  initialState: {},
  request: {
    dataField: 'results',
  },
  layout: {
    title: 'SOFIHUB',
  },
  routes: [
    {
      path: '/',
      redirect: '/login',
    },

    {
      name: 'Login',
      path: '/login',
      component: './Login',
      layout: false,
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
      component: './Dashboard',
    },
  ],
  npmClient: 'yarn',
  base: '/fusion/',
  publicPath: '/fusion/',
});

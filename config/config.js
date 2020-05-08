export default {
  treeShaking: true,
  routes: [
    {
      path: '/home',
      component: '../layouts/index',
      routes: [
        { path: '/home', redirect: '/home/borderContent' },
        { path: '/home/borderContent', component: '../pages/home/borderContent' },
        { path: '/home/transition', component: '../pages/home/transition' },
        { path: '/home/animation', component: '../pages/home/animation' },
      ],
    },
    {
      path: '/',
      routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', component: '../pages/login' },
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'umiDva',
        dll: false,

        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};

const b = () => import("../components/PersonalCenter/PersonalCenter.vue");

const routes = [
  //实现路由重定向，当进入网页时，路由自动跳转到/a路由
  //{
  //	path:'/',
  //    redirect:'/a'
  // },

  {
    name: "b",
    path: "/gerenxinxi",
    component: b,
  },
];

export default routes;

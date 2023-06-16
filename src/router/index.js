import { createRouter, createWebHistory } from "vue-router";

import routes from "./routes";
const router = createRouter({
  routes,
  history: createWebHistory(),
});
// 全局前置路由守卫----初始化的时候，每次路由切换之前被调用

// router.beforeEach((to, from, next) => {
//   console.log("@", to, from);
//   if ((to.path = "/gerenxinxi")) {
//     // 判断是否登录
//     if (localStorage.getItem("name") == "lmh") {
//       next();
//     } else {
//       alert("用户名不对，无权限查看");
//     }
//   } else {
//     next();
//   }
// });
export default router;

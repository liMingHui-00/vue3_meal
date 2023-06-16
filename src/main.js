import { createApp } from "vue";
import App from "./App.vue";
// 引入路由
import router from "../src/router/index";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";

import "./assets/main.css";
const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(ElementPlus);
app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import request from "./utils/request";
import api from "./api";

const app = createApp(App)

app.use(router);
app.use(store);
app.config.globalProperties.$request = request;
app.config.globalProperties.$api = api;
app.mount('#app');

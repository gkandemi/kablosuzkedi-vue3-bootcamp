import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "@/assets/style.css";
const app = createApp(App);
app.use(store);
// app.config.globalProperties.$axios = axios;
app.mount("#app");

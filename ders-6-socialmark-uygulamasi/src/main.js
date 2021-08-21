import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { appAxios } from "@/utils/appAxios";
import "@/assets/style.css";

import appHeader from "@/components/Shared/appHeader";
import appBookmarkList from "@/components/Shared/appBookmarkList";

const app = createApp(App);
app.component("AppHeader", appHeader);
app.component("appBookmarkList", appBookmarkList);
app.use(router);
app.use(store);
app.config.globalProperties.$appAxios = appAxios;
app.mount("#app");

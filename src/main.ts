// eslint-disable-next-line @typescript-eslint/no-var-requires
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { IonicVue } from "@ionic/vue";
import axios from "axios";
import store from "./store";

import "./assets/tailwind.css";
import "./assets/transisi.css";

// eslint-disable-next-line no-constant-condition
axios.defaults.baseURL = false
    ? "http://10.102.6.20:8000/api"
    : "https://inspecsi.projekalpha.com/api";

const app = createApp(App).use(IonicVue).use(store).use(router);

router.isReady().then(() => {
    app.mount("#app");
});

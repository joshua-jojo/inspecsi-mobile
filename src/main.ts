import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';
import axios from "axios";
import store from './store';

axios.defaults.baseURL = 'https://inspecsi.projekalpha.com/api'
// axios.defaults.baseURL = 'http://10.10.20.55:8000/api'

import './assets/tailwind.css';
import './assets/transisi.css';

const app = createApp(App)
  .use(IonicVue)
  .use(store)
  .use(router);
  
router.isReady().then(() => {
  app.mount('#app');
});
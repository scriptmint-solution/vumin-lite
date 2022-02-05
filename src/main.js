import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import router from "./route.js"
import store from "./store.js"
import './app.css'

const app = createApp(App);

app.use(router);
app.use(store);

import components from '@components/index.js'
components(app)

app.mount('#app');

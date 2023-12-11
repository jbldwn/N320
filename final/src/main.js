import './assets/main.css'
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'

import SessionData from './components/SessionData.vue';
import MySessionData from './components/MySessionData.vue';

const app = createApp(App);
app.component('session-data', SessionData);
app.component('my-session-data', MySessionData);

app.use(router)

app.mount('#app')

// import './assets/main.css'

import router from './router'
import { createApp } from 'vue'
import App from './App.vue'

import MemberData from './components/MemberData.vue';

const app = createApp(App);
app.component('member-data', MemberData);

app.use(router)

app.mount('#app')

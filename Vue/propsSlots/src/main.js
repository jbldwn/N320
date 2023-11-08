import PropsOne from './components/propsOne.vue'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.component('props-one', PropsOne);
app.mount('#app')

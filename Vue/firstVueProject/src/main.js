import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import ShoppingList from './components/ShoppingList.vue'

const app = createApp(App);

app.component('shopping-list', ShoppingList)

app.mount('#app')

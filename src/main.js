console.log('%c BillsBoards', 'font: 2em sans-serif; color: #ff0000;')

if (!window.location.pathname === "/") {
  window.location.href = "/";
}

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
import './bootstrap';
import { createApp } from 'vue'
// import the root component App from a single-file component.
import App from './App.vue';
import Home from './components/Home.vue';

createApp(App).mount('#app')
createApp(Home).mount('#home')




import './assets/css/tailwind.css';
import "vue-toastification/dist/index.css";
import {
    createApp
} from 'vue';
import {
    Toast,
    options
} from './libs/toast';
import {
    createPinia
} from 'pinia';
import App from './App.vue';
import router from './router';
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(Toast, options)
app.mount('#app');
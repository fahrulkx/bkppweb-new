import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { createBootstrap } from 'bootstrap-vue-next';

// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';

// <!-- Vendor CSS Files -->
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/aos/aos.css';
import './assets/vendor/fontawesome-free/css/all.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';

// Main CSS file
import './assets/css/main.css';

const app = createApp(App);
app.use(createBootstrap()); // Important
app.use(router);
app.mount('#app');

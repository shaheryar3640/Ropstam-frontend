import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'vue-toast-notification/dist/theme-sugar.css';

import "bootstrap/dist/css/bootstrap.min.css";
// import "datatables.net-bs5";
// import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
// import "jszip";
// import "pdfmake";
// import "datatables.net-buttons-bs5";
// import "datatables.net-buttons-bs5/css/buttons.bootstrap5.min.css";
// import "datatables.net-buttons/js/buttons.colVis";
// import "datatables.net-buttons/js/buttons.flash";
// import "datatables.net-buttons/js/buttons.html5";
// import "datatables.net-buttons/js/buttons.print";

// import Vue from 'vue'
// import Vuelidate from 'vuelidate'
import { VuelidatePlugin } from '@vuelidate/core'
// Vue.use(Vuelidate)

import router from '../src/router'
createApp(App).use(store).use(VuelidatePlugin).use(router).mount('#app')

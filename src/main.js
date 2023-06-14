import PrimeVue from 'primevue/config';

import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from "firebase/app";

import App from './App.vue'
import router from './router'

const firebaseConfig = {
    apiKey: "AIzaSyCHKLOWEAEZ7jxyZ4Ox4UTO6mFvW8ETZ2A",
    authDomain: "jwt-auth-876f0.firebaseapp.com",
    projectId: "jwt-auth-876f0",
    storageBucket: "jwt-auth-876f0.appspot.com",
    messagingSenderId: "1097889143682",
    appId: "1:1097889143682:web:25a8a85a279a017d724d9b",
    measurementId: "G-Q825R8RZWY"
};

initializeApp(firebaseConfig);

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);

app.mount('#app')

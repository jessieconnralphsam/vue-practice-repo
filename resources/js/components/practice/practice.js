import { createApp } from 'vue/dist/vue.esm-bundler.js';
import Practice from './Practice.vue';
import '../../../css/app.css';

const prac = createApp({});

prac.component('practice-component', Practice);

prac.mount("#practice");
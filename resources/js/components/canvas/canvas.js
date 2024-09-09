import { createApp } from 'vue/dist/vue.esm-bundler.js';
import Home from './canvas.vue';
import '../../../css/app.css';

const app = createApp({});

app.component('canvas-component', Home);

app.mount("#canvas");
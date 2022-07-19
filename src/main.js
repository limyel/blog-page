import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import hljs from 'highlight.js';

const app = createApp(App);

const pinia = createPinia();
VMdPreview.use(githubTheme, {
    Hljs: hljs,
});

app.use(pinia);
app.use(router);
app.use(VMdPreview);
app.mount('#app');

import { createApp } from "vue";
import App from "./App.vue";
import xqui from "../packages";
const app = createApp(App);
app.use(xqui);
app.mount("#app");

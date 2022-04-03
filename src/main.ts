import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import { store } from "@/store";
import vSelect from "vue-select";

createApp(App)
  .component("v-select", vSelect)
  .use(store)
  .use(router)
  .mount("#app");

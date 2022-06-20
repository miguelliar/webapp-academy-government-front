import "reflect-metadata";
import { xPlugin } from "@empathyco/x-components";
import Vue from "vue";
import { adapter } from "@/adapter/adapter";
import router from "@/router";
import store from "@/store";
import App from "@/App.vue";

Vue.config.productionTip = false;

Vue.use(xPlugin, { adapter, store });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

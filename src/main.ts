import Vue from "vue";
import vueCompositionApi from "@vue/composition-api";
import router from "@/router";

import App from "./App.vue";

import VueRouter from "vue-router";
import Meta from "vue-meta";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(vueCompositionApi);
Vue.use(Meta);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

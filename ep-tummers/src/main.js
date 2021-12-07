import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./app.css";

import {
  faSearch, faUserAlt, faUser, faHeart, faShoppingCart, faBars
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faSearch, faUserAlt, faUser, faHeart, faShoppingCart, faBars
);

Vue.config.productionTip = false;

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  el: "#app",
  router: Routes,
  render: (h) => h(App),
});

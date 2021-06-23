import Vue from "vue";
import Vuex from "vuex";
import auth from "../store/auth";
import gallery from "../store/gallery";
import user from "../store/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    gallery,
    user,
  },
});

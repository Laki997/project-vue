import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

const store = {
  namespaced: true,
  state: () => ({
    galleries: [],
    pagination: {},
    page: 1,
  }),
  actions,
  getters,
  mutations,
};

export default store;

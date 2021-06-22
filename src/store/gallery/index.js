import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

const store = {
  namespaced: true,
  state: () => ({
    galleries: [],
    pagination: {},
    page: 1,
    searchTerm: "",
  }),
  actions,
  getters,
  mutations,
};

export default store;

import userService from "../../services/userService";

export const actions = {
  async getOne(store, id) {
    const data = await userService.get(id);
    console.log(data);
    store.commit("setOneUser", data);
  },
};

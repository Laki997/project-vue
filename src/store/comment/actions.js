import commentService from "../../services/commentService";

export const actions = {
  async addComment(store, body) {
    const { data } = await commentService.add(body);
    console.log(body);

    store.commit("addComment", data);
  },
};

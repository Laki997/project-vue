import commentService from "../../services/commentService";

export const actions = {
  async addComment(store, body) {
    const { data } = await commentService.add(body);

    store.commit("addComments", data);
  },

  async getCommentsForGallery(store, id) {
    return await commentService.getComments(id);
  },
};

import galleryService from "../../services/galleryService";

export const actions = {
  async addGallery(store, body) {
    const { data } = await galleryService.add(body);

    store.commit("addGallery", data);
  },
};

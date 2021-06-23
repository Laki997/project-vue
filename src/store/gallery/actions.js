import galleryService from "../../services/galleryService";

export const actions = {
  async addGallery(store, body) {
    const { data } = await galleryService.add(body);

    store.commit("addGallery", data);
  },

  async getAll(store, page) {
    const data = await galleryService.getAll(page, store.state.searchTerm);
    console.log(data);
    console.log(page);
    store.commit("getGalleries", data.data);
    store.commit("pagination", data);
  },

  async getOne(store, id) {
    const gallery = await galleryService.getOne(id);

    store.commit("setOneGallery", gallery);
  },
};

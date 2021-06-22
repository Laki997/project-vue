export const mutations = {
  addGallery(state, payload) {
    state.galleries = state.galleries.push(payload);
    console.log(payload);
  },

  getGalleries(state, payload) {
    state.galleries = payload;
  },

  pagination(state, payload) {
    state.pagination = payload;
  },
};

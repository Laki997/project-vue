export const mutations = {
  addGallery(state, payload) {
    state.galleries = state.galleries.push(payload);
    console.log(payload);
  },
};

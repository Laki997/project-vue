export const mutations = {
  addGallery(state, payload) {
    state.galleries.push(payload);
    console.log(payload);
  },

  getGalleries(state, payload) {
    const temp = [...state.galleries];
    console.log(temp);
    payload.map((p) => {
      temp.push(p);
    });
    console.log("MILOS" + temp);
    state.galleries = temp;
  },

  pagination(state, payload) {
    state.pagination = payload;
  },

  setSearchTerm(state, payload) {
    state.searchTerm = payload;
  },

  setPage(state, payload) {
    state.page = payload;
  },

  setOneGallery(state, payload) {
    state.gallery = payload;
    console.log(payload);
  },
};

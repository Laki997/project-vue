export const mutations = {
  addComments(state, payload) {
    state.comments.push(payload);
    console.log(payload);
  },
};

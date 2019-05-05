export const state = () => ({
  list: []
})

export const mutations = {
  set(state,list) {
    state.list = list;
  }
};
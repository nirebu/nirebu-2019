export const state = () => ({
  list: [],
  pages: {
    total: 1,
    current: 1
  }
})

export const mutations = {
  set(state,list) {
    state.list = list.sort( (a,b) => {
      return a.ctime < b.ctime;
    });
  }
};
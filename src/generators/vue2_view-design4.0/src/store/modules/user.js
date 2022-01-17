// initial state
const state = () => ({
  locale: 'zh_CN',
});

// getters
const getters = {
  locale: (state) => state.locale,
};

// actions
const actions = {
  updateLocale({ commit }, locale) {
    commit('setLocale', locale);
  },
};

// mutations
const mutations = {
  setLocale(state, locale) {
    state.locale = locale;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

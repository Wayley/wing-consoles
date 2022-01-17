import { getToken, getDefaultLocale } from '@/util';

// initial state
const state = () => ({
  locale: getDefaultLocale(),
  token: getToken(),
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

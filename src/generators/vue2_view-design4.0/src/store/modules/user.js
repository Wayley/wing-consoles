import {
  getToken,
  setToken,
  getLocale,
  getDefaultLocale,
  setLocale,
  getUserId,
  setUserId,
  getUserName,
  setUserName,
} from '@/util';

// initial state
const locale = getLocale() || getDefaultLocale();
const state = () => ({
  locale,
  token: getToken(),
  userName: getUserName(),
  userId: getUserId(),
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
  loggedIn({ commit }, { access_token, userId, username }) {
    commit('setToken', access_token);
    commit('setUserId', userId);
    commit('setUserName', username);
  },
};

// mutations
const mutations = {
  setLocale(state, locale) {
    state.locale = locale;
    setLocale(locale);
  },
  setToken(state, token) {
    state.token = token;
    setToken(token);
  },
  setUserId(state, userId) {
    state.userId = userId;
    setUserId(userId);
  },
  setUserName(state, userName) {
    state.userName = userName;
    setUserName(userName);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

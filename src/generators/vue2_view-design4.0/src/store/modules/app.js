// initial state
const state = () => ({
  channel: {
    channelId: 1,
    channelModelId: 2,
  },
});

// getters
const getters = {
  channel: (state) => state.channel,
  channelId: (state) => state.channel.channelId,
  channelModelId: (state) => state.channel.channelModelId,
};

// actions
const actions = {};

// mutations
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

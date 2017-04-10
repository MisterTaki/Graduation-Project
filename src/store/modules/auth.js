import { client } from '../../helpers';
import apiMap from '../../api';

const LOGIN = 'auth/LOGIN';
// const LOGOUT = 'auth/LOGOUT';
// const UPDATE = 'auth/UPDATE';
const SET_USER = 'auth/SET_USER';

export default {
  state: {
    user: {},
    info: {}
  },
  actions: {
    async [LOGIN] ({ commit }, { data }) {
      commit(LOGIN, await client.post(apiMap.login, { data }));
    }
  },
  mutations: {
    [LOGIN] (state, { data }) {
      state.info = data;
    },
    [SET_USER] (state, { user }) {
      state.user = user;
    }
  }
};
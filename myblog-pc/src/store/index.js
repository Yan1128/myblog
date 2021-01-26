import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    loginUser:""
  },
  mutations: {
    storeLoginUser(state, user){
      state.loginUser = user;
      //console.log(loginUser[0].user_id)
    },
  },
  actions: {
    setToken: (state, token) => {
      state.token = token;
      // 存储token
      localStorage.setItem("mytoken", token);
    },
    logout: state => {
      state.token = null;
      localStorage.removeItem('mytoken');
    }
  },
  modules: {}
});

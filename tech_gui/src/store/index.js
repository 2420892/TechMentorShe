import { createStore } from 'vuex'
import axios from 'axios'

const api = 'http://localhost:3300/'
export default createStore({
  state: {
    users:null,
    user:null,
    careers:null,
    career:null,
    token:null,
    msg:null
  },
  getters: {
  },
  mutations: {
    setUsers(state, users){
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setCareers(state, careers) {
      state.careers = careers;
    },
    setCareer(state, career) {
      state.career = career;
    }
  },
  actions: {
    async fetchCareers(context) {
      try {
        const { data } = await axios.get(`${api}careers`);
        context.commit("setCareers", data.results);
      } catch (e) {
        context.commit("setMsg", "An error occurred");
      }
    },
    async fetchUsers(context){
      try{
        const {data} = await axios.get(`${api}users`);
        context.commit("setUsers",data.results);
      }catch(e){
        context.commit("setMsg","An error occured")
      }
    }
  },
  modules: {
  }
})

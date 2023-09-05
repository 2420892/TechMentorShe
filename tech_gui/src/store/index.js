import { createStore } from 'vuex'
import axios from 'axios'

const api = 'https://techmentorshe.onrender.com';

export default createStore({
  state: {
    mentees: null,
    mentee: null,
    mentors: null,
    mentor: null,
    token: null,
    msg: null
  },
  mutations: {
    setMentees(state, mentees) {
      state.mentees = mentees;
    },
    setMentee(state, mentee) {
      state.mentee = mentee;
    },
    setMentors(state, mentors) {
      state.mentors = mentors;
    },
    setMentor(state, mentor) {
      state.mentor = mentor;
    },
    setMsg(state, msg) {
      state.msg = msg;
    }
  },
  actions: {
    async fetchMentors(context) {
      try {
        const { data } = await axios.get(`${api}/mentors`); 
        context.commit("setMentors", data.results);
      } catch (e) {
        context.commit("setMsg", "An error occurred");
      }
    },
    async fetchMentees(context) {
      try {
        const { data } = await axios.get(`${api}/mentees`); 
        context.commit("setMentees", data.results);
      } catch (e) {
        context.commit("setMsg", "An error occurred");
      }
    }
  },
  modules: {}
});

import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2';
import { useCookies } from "vue3-cookies"
const {cookies} = useCookies()
import router from '@/router'
import authUser from '@/services/AuthenticateUser'
const api = 'https://techmentorshe.onrender.com';

export default createStore({
  state: {
    mentees: null,
    mentee: null,
    mentors: null,
    mentor: null,
    reservation: null,
    token: null,
    msg: null,
    reservations:[],
  },
  mutations: {
    setReservations(state, reservation) {
      state.reservation = reservation;
    },
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
    },
    setErrorMessage(state, message) {
      state.errorMessage = message;
    },
  
    addReservation(state, reservation) {
      state.reservations.push(reservation);
    },
    removeReservation(state, resID) {
      state.reservations = state.reservations.filter((reservation) => reservation.resID !== resID);
    },
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
    async fetchMentor(context, mentorID) {
      try {
        const { result } = (await axios.get(`${api}/mentor/${mentorID}`)).data;
        context.commit("setMentor", result[0]); 
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
    },
    async fetchMentee(context) {
      try {
        const { data } = await axios.get(`${api}/mentee/${menteeID}`); 
        context.commit("setMentee", data.result);
      } catch (e) {
        context.commit("setMsg", "An error occurred");
      }
    },
  async register({ commit}, mentorData) {
    console.log(mentorData)
    try {
      const res = await axios.post(`${api}/register`, mentorData);
      console.log(res)
      const mentor = res.data;
      commit("setMentor", mentor);
      if (mentor.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "You have successfully registered.",
        });
        router.push("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: "An error occurred during registration.",
        });
      }
    } catch (error) {
      console.error("Registration failed:", error);

    }
  },
  async deleteMentor({ commit }, mentorID) {
    try {
      const res = await axios.delete(`${api}/mentor/${mentorID}`);
      console.log(res);
      if (res.status === 200) { 
        Swal.fire({
          icon: "success",
          title: "Mentor Deleted",
          text: "The mentor has been successfully deleted.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Deletion Failed",
          text: "An error occurred during mentor deletion.",
        });
      }
    } catch (error) {
      console.error("Mentor deletion failed:", error);
    }
  },
  async addMentee({ commit}, menteeData) {
    console.log(menteeData)
    try {
      const res = await axios.post(`${api}/addMentee`, menteeData);
      console.log(res)
      const mentee = res.data;
      commit("setMentee", mentee);
      if (mentee.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "You have successfully registered.",
        });
        router.push("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: "An error occurred during registration.",
        });
      }
    } catch (error) {
      console.error("Registration failed:", error);

    }
  },
  async deleteMentee({ commit }, menteeID) {

    try {
      const res = await axios.delete(`${api}/mentee/${menteeID}`);
      if (res.status === 200) { 
        Swal.fire({
          icon: "success",
          title: "Mentee Deleted",
          text: "The mentee has been successfully deleted.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Deletion Failed",
          text: "An error occurred during mentee deletion.",
        });
      }
    } catch (error) {
      console.error("Mentee deletion failed:", error);
    }
   
  },
  async updateMentee({commit},menteeID){
    try{
const res =await axios.put(`${api}/mentee/${menteeID}`);
if(res.status === 200){
  Swal.fire({
    icon:'success',
    title:"Mentee  updated",
    text:"Your information has been updated"
  });
}else{
  Swal.fire({
    icon:"error",
  title:"Update failed",
  text:"An error occured during update"
  })
}
    }catch(error){
      console.error("Mentee dupdate failed:", error);
    }
  },
  // mentee
  async login(context, payload) {
    try {
      const { msg, token, result } = (await axios.post(`${api}/mentee/login`, payload)).data;
   
  
      if (result) {
        context.commit('setMentee', { result, msg });
        cookies.set('LegitUser', { token, msg, result });
        authUser.applyToken(token);
        Swal.fire({
          title: msg,
          text: `Welcome back ${result?.firstName} ${result.lastName}`,
          icon: "success",
          timer: 2000
        });
        router.push("/");
      } else {
        Swal.fire({
          title: msg,
          text: `You are not registered, or provided wrong register details`,
          icon: "success"
        });
        router.push("/logIn");
      }
    } catch (error) {
      console.error("Mentee login failed:", error);
    }
  },
  // mentor
  async login2(context, payload2) {
    try {
      const { msg, token, result } = (await axios.post(`${api}/mentor/login2`, payload2)).data;
   
  
      if (result) {
        context.commit('setMentor', { result, msg });
        cookies.set('LegitMentor', { token, msg, result });
        authUser.applyToken(token);
        Swal.fire({
          title: msg,
          text: `Welcome back ${result?.firstName} ${result.lastName}`,
          icon: "success",
          timer: 2000
        });
        router.push("/");
      } else {
        Swal.fire({
          title: msg,
          text: `You are not registered, or provided wrong register details`,
          icon: "failed"
        });
        router.push("/logIn");
      }
    } catch (error) {
      console.error("Mentor login failed:", error);
    }
  },
  // reservations
  async fetchReservations({ commit }, menteeID) {
    try {
      const response = await axios.get(`/mentee/${menteeID}/reservations`);
      commit('setReservations', response.data.results);
    } catch (error) {
      console.error(error);
    }
  },
  async addReservation(context,payload){
try{
  const {msg ,token,result} = (await axios.post(`${api}/reservation`,payload)).data;
  if (result) {
    cookies.set("setMentor", { msg, token, result });
    authenticateUser.applyToken(token);
    sweet({
      title: "msg",
      text: `Registered under user ${result?.menteeID} ` ,
      icon: "success",
      timer: 4000,
    });
    context.dispatch("fetchReservations");
    router.push({ name: "/" });
  } else {
    sweet({
      title: "Error",
      text: msg,
      icon: "error",
      timer: 4000
    });
  }

}catch(e){
  context.commit("setMsg","An error has occured")
}
  },
  async removeReservation({ commit }, { menteeID, resID }) {
    try {
      await axios.delete(`/mentee/${menteeID}/reservation/${resID}`);
      commit('removeReservation', resID);
    } catch (error) {
      console.error(error);
    }
  },
  // logout
  async logOut(context) {
    context.commit("setMentor");
    cookies.remove("ActualMentor");
    context.commit("setMentee");
    cookies.remove("ActualMentee");
  },

 
  async makeReservation(context, payload) {
    try {
      const { msg, token, result } = (await axios.post(`${api}/reservation`, payload)).data;
      cookies.set("LegitUser", { msg, token, result });
      authUser.applyToken(token);
      if (result) {
        Swal.fire({
          title: "Success",
          text: "Reservation booked",
          icon: "success",
          timer: 4000,
        });
        context.dispatch("fetchReservations");
        router.push("/reservations");
      } else {
        Swal.fire({
          title: "Error",
          text: msg,
          icon: "error",
          timer: 4000
        });
      }
    } catch (e) {
      context.commit("setMsg", "An error has occurred");
    }
  },

  },
  modules: {}
});
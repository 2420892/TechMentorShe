<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">TMS</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/"><i class="bi bi-house-add-fill"></i>Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about"><i class="bi bi-file-person"></i>About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/mentors"><i class="bi bi-mortarboard-fill"></i>OurMentors</router-link>
            </li>
          
            <li class="nav-item" >
              <router-link to="/reservations"><i class="bi bi-motherboard-fill"></i>Reservations</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Register
              </a>
              <ul class="dropdown-menu ">
                <li><router-link to="/SignupMentor" class="dropdown-item" >Become a Mentor</router-link></li>
                <li><router-link to="/SignupMentee" class="dropdown-item" >Become a Mentee</router-link></li>
                <li><router-link to="/LogIn" class="dropdown-item" >LogIn</router-link></li>
              </ul>
            </li>
            <li class="nav-item" v-show="isAdmin">
              <router-link to="/admin"><i class="bi bi-motherboard-fill"></i>Admin</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact"><i class="bi bi-person-lines-fill"></i>Contact</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/profilelog" ><i class="bi bi-person-lines-fill"></i>profile</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { useCookies } from "vue3-cookies"
const {cookies} = useCookies()


export default {
  computed: {
  mentee() {
    return this.$store.state.mentee || cookies.get("LegitUser");
  },
  mentor() {
    return this.$store.state.mentor || cookies.get("LegitMentor");
  },
  result() {
    if (this.mentee?.result?.length) {
      return this.mentee?.result;
    } else {
      return cookies.get("LegitUser")?.result;
    }
  },
  isMentor() {
    return this.result?.mentorRole?.toLowerCase() === "mentor";
  },
  isMentee() {
    return this.result?.menteeRole?.toLowerCase() === "mentee";
  },
  isAdmin() {
    // Check if the user has an admin role
    return this.result?.mentorRole?.toLowerCase() === "admin" && this.isMentor();
  }
},
};
</script>

<style scoped>
i{
  animation:flipInY;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

</style>


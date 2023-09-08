<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">S.Zweni</a>
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
          
            <li class="nav-item">
              <router-link to="/reservations"><i class="bi bi-motherboard-fill"></i>Reservations</router-link>
              <!-- I should hide this to non-users -->
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Register
              </a>
              <ul class="dropdown-menu ">
                <li><router-link to="/profile" class="dropdown-item" >Become a Mentor</router-link></li>
                <li><router-link to="/SignupMentee" class="dropdown-item" >Become a Mentee</router-link></li>
                <li><router-link to="/LogIn" class="dropdown-item" >LogIn</router-link></li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link to="/admin"><i class="bi bi-motherboard-fill"></i>Admin</router-link>
              <!-- I should hide this to non-users -->
            </li>
            <li class="nav-item">
              <router-link to="/contact"><i class="bi bi-person-lines-fill"></i>Contact</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/"><i class="bi bi-person-lines-fill"></i>logout</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/profilelog"><i class="bi bi-person-lines-fill"></i>profile</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
i{
  animation:flipInY;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

</style>

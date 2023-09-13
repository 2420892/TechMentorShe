<template>
    <div class="registerMentor">
        <section class=" bg-image" style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');">
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style="border-radius: 15px;">
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Create a Mentee account</h2>
  
              <form @submit.prevent="addMentee">
  
                <div class="mb-4">
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your firstName" v-model="form.firstName" required>
                  </div>
                  <div class="mb-4">
                    <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Your lastName" v-model="form.lastName" required>
                  </div>
                  <div class="mb-4">
                    <input type="email" class="form-control" id="exampleFormControlInput3" placeholder="name@example.com" v-model="form.emailAdd" required>
                  </div>
                  <div class="mb-4">
                    <input type="password" class="form-control" id="exampleFormControlInput4" placeholder="Enter your Password" v-model="form.menteePass" required> 
                  </div>
                  <div class="mb-4">
                    <input type="number" class="form-control" id="exampleFormControlInput5" placeholder="Your Age" v-model="form.menteeAge" required>
                  </div>
                  <div class="mb-4">
                    <input type="text" class="form-control" id="exampleFormControlInput6" placeholder="Your role" v-model="form.menteeRole" required>
                  </div>
                  <div class="mb-4">
                    <input type="text" class="form-control" id="exampleFormControlInput11" placeholder="Image url" v-model="form.image" required>
                  </div>
                <div class="form-check d-flex justify-content-center mb-5">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <!-- <label class="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label> -->
                </div>
  
                <div class="d-flex justify-content-center">
                  <button type="submit" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
  
                </div>
                <p class="text-center text-muted mt-5 mb-0">
                  Already have an account? <router-link to="/" class="fw-bold text-body"><u>Login here</u></router-link>
                </p>
              </form>
              <p v-if="registrationError" class="error">{{ registrationError }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  
    </div>
  </template>
  
  <script>
    export default {
      data() {
    return {
      form:{
        firstName:"",
        lastName:"",
        emailAdd:"", 
        menteePass:"", 
        menteeAge:"",
        image:"", 
        },
        registrationError:null
      };
    },
    methods: {
  addMentee() {
  this.$store.dispatch("addMentee", this.form);
  },
  },
    }
  </script>
  
  <style scoped>
  .gradient-custom-3 {
  
    background: #84fab0;
    
    background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5));
    
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5))
    }
    .gradient-custom-4 {
    /* fallback for old browsers */
    background: #84fab0;
    
    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1));
    
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1))
    }
  </style>
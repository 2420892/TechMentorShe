<template>
  <div class="registerMentor">
      <section class=" bg-image" style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');">
<div class="mask d-flex align-items-center h-100 gradient-custom-3">
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-9 col-lg-7 col-xl-6">
        <div class="card" style="border-radius: 15px;">
          <div class="card-body p-5">
            <h2 class="text-uppercase text-center mb-5">Create an account</h2>

            <form @submit.prevent="register">

              <div class="mb-4">
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your firstName" v-model="form.firstName">
                </div>
                <div class="mb-4">
                  <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Your lastName" v-model="form.lastName">
                </div>
                <div class="mb-4">
                  <input type="email" class="form-control" id="exampleFormControlInput3" placeholder="name@example.com" v-model="form.emailAdd">
                </div>
                <div class="mb-4">
                  <input type="password" class="form-control" id="exampleFormControlInput4" placeholder="Enter your Password" v-model="form.mentorPass">
                </div>
                <div class="mb-4">
                  <input type="text" class="form-control" id="exampleFormControlInput5" placeholder="Your tech field" v-model="form.techField">
                </div>
                <div class="mb-4">
                  <input type="text" class="form-control" id="exampleFormControlInput6" placeholder="Your Age" v-model="form.mentorAge">
                </div>
                <div class="mb-4">
                  <input type="text" class="form-control" id="exampleFormControlInput7" placeholder="Your current position" v-model="form.techPosition">
                </div>
                <div class="mb-4">
                  <label for="exampleFormControlTextarea1" class="form-label"> Career Desciption:</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="form.describtion"></textarea>
                </div>
                <div class="mb-4">
                  <input type="date" class="form-control" id="exampleFormControlInput8" placeholder="available on this date" v-model="form.availDate">
                </div>
                <div class="mb-4">
                  <input type="time" class="form-control" id="exampleFormControlInput9" placeholder="Your tech field" v-model="form.startTime">
                </div>
                <div class="mb-4">
                  <input type="time" class="form-control" id="exampleFormControlInput10" placeholder="Your tech field" v-model="form.endTime">
                </div>
                <div class="mb-4">
                  <input type="text" class="form-control" id="exampleFormControlInput11" placeholder="Your tech field" v-model="form.image">
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
      mentorPass:"", 
      mentorAge:"",
      mentorRole:"", 
      image:"",
      techField:"",
      techPosition:"",
      describtion:"",
      availDate:"",
      startTime:"",
      endTime:"" 
      },
      registrationError:null
    };
  },
  methods: {
register() {
this.$store.dispatch("register", this.form);
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
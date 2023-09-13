<template>
    <section class="h-100 gradient-form" style="background-color: #eee;">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
              <div class="card rounded-3 text-black">
                <div class="row g-0">
                  <div class="col-lg-6">
                    <div class="card-body p-md-5 mx-md-4">
      
                      <div class="text-center">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          style="width: 185px;" alt="logo">
                        <h4 class="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                      </div>
      
                      <form >
                        <p>Please login to your Mentee account</p>
      
                        <div class="form-outline mb-4">
                          <input v-model="payload.emailAdd" type="email" id="form2Example11" class="form-control"
                            placeholder="Phone number or email address" />
                          <label class="form-label" for="form2Example11">Username</label>
                        </div>
      
                        <div class="form-outline mb-4">
                          <input v-model="payload.menteePass" type="password" id="form2Example22" class="form-control" />
                          <label class="form-label" for="form2Example22">Password</label>
                        </div>
      
                        <div class="text-center pt-1 mb-5 pb-1">
                          <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" @click.prevent="login">Log
                            in</button>
                        </div>
                        <div class="d-flex align-items-center justify-content-center pb-4">
                          <p class="mb-0 me-2">Don't have an account?</p>
                          <router-link :to="{name: 'SignupMentee'}">
                            <button type="button" class="btn btn-outline-danger">Create new</button>
                          </router-link>
                        </div>
                        <!-- MENTOR LOGIN -->
                        <p>Please login to your Mentor account</p>
                        <div class="form-outline mb-4">
                          <input v-model="payload2.emailAdd" type="email" id="form3Example11" class="form-control"
                            placeholder="Phone number or email address" />
                          <label class="form-label" for="form3Example11">Username</label>
                        </div>
      
                        <div class="form-outline mb-4">
                          <input v-model="payload2.mentorPass" type="password" id="form3Example22" class="form-control" />
                          <label class="form-label" for="form3Example22">Password</label>
                        </div>
      
                        <div class="text-center pt-1 mb-5 pb-1">
                          <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" @click.prevent="login2">Log
                            in</button>
                        </div>
                        <div class="d-flex align-items-center justify-content-center pb-4">
                          <p class="mb-0 me-2">Don't have an account?</p>
                          <router-link :to="{name: 'SignupMentor'}">
                            <button type="button" class="btn btn-outline-danger">Create new</button>
                          </router-link>
                        </div>
                      </form>
      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
import SignupMentee from './SignupMentee.vue';

    export default {
        data() {
    return {
        payload: {
        emailAdd: '',
        menteePass: '',
     
      },
      payload2: {
        emailAdd: '',
        mentorPass: '',
     
      },
    };
  },
  computed:{
    mentee(){
        return this.$store.state.mentee
    },
    mentor(){
        return this.$store.state.mentor
    },
  
  },
  methods: {
    login() {  
  this.$store.dispatch("login", this.payload);

    },
    login2() {  
  this.$store.dispatch("login2", this.payload2);

    }
  }
    }
</script>

<style scoped>
.gradient-custom-2 {
    /* fallback for old browsers */
    background: #fccb90;
    
    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
    
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
    }
    
    @media (min-width: 768px) {
    .gradient-form {
    height: 100vh !important;
    }
    }
    @media (min-width: 769px) {
    .gradient-custom-2 {
    border-top-right-radius: .3rem;
    border-bottom-right-radius: .3rem;
    }
    }
</style>
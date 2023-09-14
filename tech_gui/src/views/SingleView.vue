<template>
    <div class="d-flex justify-content-center align-items-center vh-100"> 
      <div class="logout-button">
        <LogOutVue />
      </div>
      <div v-if="mentor" class="card mb-3" style="max-width: 1000px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img
            :src="mentor.image"
              :alt="mentor.firstName"
              class="img-fluid rounded-start h-100"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body custom-card-body-height">
              <h4 class="card-title">My Name is {{ mentor.firstName }} {{ mentor.lastName }}. <br> I am {{mentor.mentorAge}} years old.</h4>
              <p class="card-text">
                I studied {{mentor.techField}}. And now I am currently working as {{mentor.techPosition}}.I am excited to mentor you and guide you in tech. I am  Looking forward to ouor Journey.
              </p>
              <p class="card-text">
                <small class="text-muted"> You can email me at {{ mentor.emailAdd }} .</small>
              </p>
              <a href="">Make a reservation</a>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>yhoo sorry my dear</p>
      </div>
    </div>
  </template>
  
  <script>
  import LogOutVue from '@/components/LogOut.vue';
 export default {
  components:{
    LogOutVue,
  },
  computed:{
    mentor(){
      return this.$store.state.mentor
    }
  },
  mounted() {
    const mentorID= this.$route.params.mentorID; 
    console.log(mentorID);
    this.$store.dispatch("fetchMentor", mentorID)
  },
 
};
  </script>
  
  <style scoped>
  .custom-card-body-height {
    height: 400px; 
  }
  .card-text{
    font-size: 20px;
  }
  .logout-button {
    position: absolute;
    top:60px;
    right: 10px; 
  }
  </style>

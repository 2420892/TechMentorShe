<template>
  <div>
    <!-- Mentee Profile Card -->
    <div v-if="mentee" class="container text-center"> 
      <div class="card mb-3" v-for="mentee in mentee" :key="mentee.menteeID" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="mentee.image" class="img-fluid rounded-start" alt="Mentee Image">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Mentee Information</h5>
              <p class="card-text">Mentee Name: {{ mentee.firstName }}</p>
              <p class="card-text">Mentee Surname: {{ mentee.lastName }}</p>
              <p class="card-text">Mentee Age: {{ mentee.menteeAge }}</p>
              <p class="card-text">Mentee Email: {{ mentee.emailAdd }}</p>
              <button @click="updateMentee(mentee.menteeID)" class="btn btn-primary">Update Profile</button>
              <button @click="deleteMentee(mentee.menteeID)" class="btn btn-danger">Delete Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mentor Profile Card -->
    <div v-if="mentor" class="container text-center"> 
      <div class="card mb-3" v-for="mentor in mentor" :key="mentor.mentorID" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="mentor.image" class="img-fluid rounded-start" alt="Mentor Image">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Mentor Information</h5>
              <p class="card-text">Mentor Name: {{ mentor.firstName }}</p>
              <p class="card-text">Mentor Surname: {{ mentor.lastName }}</p>
              <p class="card-text">Mentor Age: {{ mentor.mentorAge }}</p>
              <p class="card-text">Mentor Email: {{ mentor.emailAdd }}</p>
              <p class="card-text">Metor Field: {{ mentor.techField}}</p>
              <p class="card-text">current Position: {{ mentor.techPosition}}</p>
              <p class="card-text">Mentor Bio: {{ mentor.describtion }}</p>
              <button @click="deleteMentor(mentor.mentorID)" class="btn btn-danger">Delete Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <p>User not found or not logged in.</p>
    </div>
  </div>
</template>


<script>
export default {
  computed: {
    mentee() {
      return this.$store.state.mentee;
    },
    mentor(){
      return this.$store.state.mentor
    }
  },
  mounted() {
    this.$store.dispatch('fetchMentee');
    this.$store.dispatch('fetchMentor')
  },
  methods:{
    updateMentee(menteeID) {
  this.$store.dispatch('updateMentee', menteeID);

},
deleteMentee(menteeID) {
  this.$store.dispatch('deleteMentee', menteeID);
  window.location.reload();
},
deleteMentor(mentorID){
  this.$store.dispatch('deleteMentor',mentorID);
  window.location.reload();
}
  }
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>

<template>
    <div>
      <div v-if="mentor" class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{{ mentor.firstName }} {{ mentor.lastName }}</h5>
        
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div v-else>
        <p>yhoo sorry my dear</p>
      </div>
    </div>
  </template>
  
  <script>
 export default {
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
 
  </style>
  
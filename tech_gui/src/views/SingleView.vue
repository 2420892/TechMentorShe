<template>
    <div>
      <div v-if="mentor" class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{{ mentor.firstName }} {{ mentor.lastName }}</h5>
        
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div v-else>
        <p>{{ errorMessage }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      mentor() {
        return this.$store.state.mentor;
      },
      errorMessage() {
        return this.$store.state.errorMessage;
      },
    },
    methods: {
      fetchMentor() {
        const mentorID = this.$route.params.mentorID;
        this.$store.dispatch('fetchMentor', mentorID);
      },
    },
    created() {
      this.fetchMentor();
    },
  };
  </script>
  
  <style scoped>
  /* Add your CSS styles here */
  </style>
  
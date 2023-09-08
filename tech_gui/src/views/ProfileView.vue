<template>
    <div>
    
      <div v-if="mentee"> 
        <div class="yho" v-for="mentee in mentee" :key="mentee.menteeID">
        <h2>{{ mentee.firstName }} {{ mentee.lastName }}</h2>
        <p>Email: {{ mentee.emailAdd }}</p>
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
        return this.$store.state.mentee 
      },
    },
    methods:{
        mounted() {
    this.$store.dispatch('fetchMentee');
  
  },
    }
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  
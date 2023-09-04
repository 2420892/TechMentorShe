<template>
  <div class="mentors">
    <h2>Mentors Page</h2>
    <div v-for="career in careers" class="card" style="width: 18rem;" :key="career.careerID">
      <img :src="getUserImage(career.userID)" class="card-img-top" alt="mentoImage">
      <div class="card-body">
        <h5 class="card-title">{{ getUserFullName(career.careerID) }}</h5>
        <p class="card-title">{{ career.techField }}</p>
        <p class="card-title">{{ career.techPosition }}</p>
        <p class="card-text"><i class="bi bi-quote" style="font-size: 2rem; color: #00CED1;"></i>{{ career.describtion }}</p>
        <p>{{ career.availDate }}</p>
        <p>from: {{ career.startTime }}</p>
        <p>TO:{{ career.endTime }}</p>
        <a href="#" class="btn btn-primary">Make a reservation</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    careers() {
      return this.$store.state.careers;
    },
  },
  methods: {
    getUserFullName(careerID) {
  const user = this.$store.state.users.find(user => user.userID === careerID);
  if (user) {
    return `${user.firstName} ${user.lastName}`;
  } else {
    return '';
  }
},

getUserImage(careerID) {
  const user = this.$store.state.users.find(user => user.userID === careerID);
  if (user && user.image) {
    return user.image;
  } else {
    return 'default-image-path.jpg'; 
  }
},

  },
  mounted() {
    this.$store.dispatch('fetchCareers');
    this.$store.dispatch('fetchUsers'); 
  },
};
</script>

<style scoped>

</style>

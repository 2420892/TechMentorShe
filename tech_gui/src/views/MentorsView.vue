<template>
  <div class="mentors">
    <h2>Mentors Page</h2>
    <div v-if="careers">
      <div class="row">
        <div
          v-for="career in careers"
          class="col-md-4 mb-4"
          :key="career.careerID"
        >
          <div class="card" style="width: 20rem;">
            <img
              :src="getUserImage(career.userID)"
              class="card-img-top rounded-circle img-fluid"
              alt="mentorImage"  style="height: 250px;" 
            />
            <div class="card-body">
              <h5 class="card-title">{{ getUserFullName(career.careerID) }}</h5>
              <p class="card-title">{{ career.techField }}</p>
              <p class="card-title">{{ career.techPosition }}</p>
              <p class="card-text">
                <i
                  class="bi bi-quote"
                  style="font-size: 2rem; color: #00CED1;"
                ></i>
                {{ career.describtion }}
              </p>
              <p>Available on:{{ formattedAvailDate(career.availDate) }}</p>
              <p>from: {{ career.startTime }}</p>
              <p>TO:{{ career.endTime }}</p>
              <a href="#" class="btn btn-primary">Make a reservation</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="row">
      <spinner-comp-vue />
    </div>
  </div>
</template>


<script>
import SpinnerCompVue from '../components/SpinnerComp.vue';

export default {
  components: {
    SpinnerCompVue,
  },
  computed: {
    careers() {
      return this.$store.state.careers;
    },
  },
  methods: {
    getUserFullName(careerID) {
      const user = this.$store.state.users
        ? this.$store.state.users.find(user => user.userID === careerID)
        : null;

      return user ? `${user.firstName} ${user.lastName}` : '';
    },
    getUserImage(careerID) {
      const user = this.$store.state.users
        ? this.$store.state.users.find(user => user.userID === careerID)
        : null;

      return user && user.image ? user.image : 'default-image-path.jpg';
    },
    formattedAvailDate(availDate) {
      if (availDate) {
        const dateParts = availDate.split('T');
        return dateParts[0];
      }
      return '';
    },
  },
  mounted() {
    this.$store.dispatch('fetchUsers');
    this.$store.dispatch('fetchCareers');
  },
};
</script>
<style scoped>

</style>

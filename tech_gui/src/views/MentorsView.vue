<template>
  <div class="mentors">
    <h2>Mentors Page</h2>
    <div v-if="mentors">
      <div class="row">
        <div
          v-for="mentor in mentors"
          class="col-md-4 mb-4"
          :key="mentor.mentorID"
        >
          <div class="card" style="width: 20rem;">
            <img
              :src="mentor.image"
              class="card-img-top rounded-circle img-fluid"
              alt="mentorImage"  style="height: 250px;" 
            />
            <div class="card-body">
              <h5 class="card-title">{{mentor.firstName}} {{mentor.lastNamaae}}</h5>
              <p class="card-title">{{ mentor.techField }}</p>
              <p class="card-title">{{ mentor.techPosition }}</p>
              <p class="card-text">
                <i
                  class="bi bi-quote"
                  style="font-size: 2rem; color: #00CED1;"
                ></i>
                {{ mentor.describtion }}
              </p>
              <p>Available on:{{ formattedAvailDate(mentor.availDate) }}</p>
              <p>from: {{ mentor.startTime }}</p>
              <p>TO:{{ mentor.endTime }}</p>
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
    mentors() {
      return this.$store.state.mentors;
    },
  },
  methods: {
    formattedAvailDate(availDate) {
      if (availDate) {
        const dateParts = availDate.split('T');
        return dateParts[0];
      }
      return '';
    },
  },
  mounted() {
    this.$store.dispatch('fetchMentors');
  
  },
};
</script>
<style scoped>
.card{
  background-color:transparent!important;
  border:none;
}
</style>

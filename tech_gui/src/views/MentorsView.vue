<template>
  <div class="mentors">
    <h2>Mentors Page</h2>
    <div>
      <label for="techFieldFilter">Filter by Tech Field:</label>
      <select id="techFieldFilter" v-model="filterCriteria.techField" @change="filterMentors">
        <option value="">All</option>
        <option v-for="techField in techFields" :key="techField">{{ techField }}</option>
      </select>
    </div>
    <div>
      <label for="availabilityFilter">Filter by Availability:</label>
      <select id="availabilityFilter" v-model="filterCriteria.availability" @change="filterMentors">
        <option value="">All</option>
        <option value="before12">Before 12:00:00</option>
        <option value="after12">After 12:00:00</option>
      </select>
    </div>

    <div v-if="filteredMentors.length > 0">
      <div class="row">
        <div v-for="mentor in filteredMentors" :key="mentor.mentorID" class="col-md-4 mb-4">
          <div class="card" style="width: 20rem;">
            <img
              :src="mentor.image"
              class="card-img-top rounded-circle img-fluid"
              alt="mentorImage"
              style="height: 250px;"
            />
            <div class="card-body">
              <h5 class="card-title">{{ mentor.firstName }} {{ mentor.lastName }}</h5>
              <p class="card-title">{{ mentor.techField }}</p>
              <p class="card-title">{{ mentor.techPosition }}</p>
              <p class="card-text">
                <i
                  class="bi bi-quote"
                  style="font-size: 2rem; color: #00CED1;"
                ></i>{{ mentor.describtion }}
              </p>
              <p>Available on:{{ formattedAvailDate(mentor.availDate) }}</p>
              <p>from: {{ mentor.startTime }}</p>
              <p>TO:{{ mentor.endTime }}</p>
          
              <router-link :to="{ name: 'SingleView', params: { mentorID: mentor.mentorID } }">
                View More
              </router-link>



          


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
import  SpinnerCompVue from '../components/SpinnerComp.vue';

export default {
  components: {
    SpinnerCompVue,
  },
  data() {
    return {
      filterCriteria: {
        techField: '',
        availability: '',
      },
      techFields: [],
      filteredMentors: [],
    };
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
    filterMentors() {
      this.filteredMentors = this.mentors.filter((mentor) => {
        const techFieldMatch = !this.filterCriteria.techField || mentor.techField === this.filterCriteria.techField;
        const availabilityMatch = !this.filterCriteria.availability || 
          (this.filterCriteria.availability === 'before12' && mentor.startTime < '12:00:00') ||
          (this.filterCriteria.availability === 'after12' && mentor.startTime >= '12:00:00');

        return techFieldMatch && availabilityMatch;
      });
    },
  },
  async beforeMount() {
    await this.$store.dispatch('fetchMentors');
    this.techFields = [...new Set(this.mentors.map((mentor) => mentor.techField))];
    this.filterMentors(); 
  },
};
</script>

<style scoped>
.card {
  background-color: transparent !important;
  border: none;
}
</style>

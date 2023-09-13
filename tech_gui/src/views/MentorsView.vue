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
    <div>
      <label for="mentorNameFilter">Search by Mentor Name:</label>
      <input type="text" id="mentorNameFilter" v-model="filterCriteria.mentorName" @input="filterMentors" />
      <button @click="sortByName">Sort by Age</button>
    </div>
    <div v-if="filteredMentors.length > 0"> 
      <div id="Testimonials" class="container">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          <div class="col mb-4" v-for="mentor in filteredMentors" :key="mentor.mentorID">
            <div class="card h-100">
              <div class="card-body d-flex">
                <div class="left-column">
                  <img :src="mentor.image" class="img-fluid rounded-circle" loading="lazy" :alt="mentor.firstName"   style="height: 100px; width: 100px; border: 3px solid rgba(222, 227, 229, 255); object-fit: center;"
                  /> <br>
                  <h6 class="card-subtitle mb-2 text-muted text-center">
                    Available on: {{ formattedAvailDate(mentor.availDate) }} 
                    from: {{ mentor.startTime }} TO: {{ mentor.endTime }}
                  </h6>
                </div>
                <div class="right-column">
                  <h5 class="card-title">{{ mentor.firstName }} {{ mentor.lastName }}</h5>
                  <p class="card-title">Field: {{ mentor.techField }} <br> Position: {{ mentor.techPosition }}</p>
                  <p class="card-text"><i class="bi bi-quote"></i>{{ mentor.describtion }}</p>
                  <router-link :to="{ name: 'SingleView', params: { mentorID: mentor.mentorID } }">
                    <button>View More</button>
                  </router-link>
                  <!-- <router-link :to="{ name: 'reservations' }"> -->
                    <button @click="makeRes(mentor)"> Add to wishlist</button>
                  <!-- </router-link> -->
                </div>
              </div>
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
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
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
        mentorName: '',
      },
      techFields: [],
      filteredMentors: [],

      payload:{
        mentorID:"",
        menteeID:""
      }
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
    makeRes(mentor){
      const cookieValue = cookies.get("LegitUser");
    const { result } = cookieValue;
    this.payload.mentorID = mentor.mentorID,
    this.payload.menteeID = result.menteeID
    this.$store.dispatch('makeReservation',this.payload);
  },
    filterMentors() {
      this.filteredMentors = this.mentors.filter((mentor) => {
        const techFieldMatch = !this.filterCriteria.techField || mentor.techField === this.filterCriteria.techField;
        const availabilityMatch = !this.filterCriteria.availability || 
          (this.filterCriteria.availability === 'before12' && mentor.startTime < '12:00:00') ||
          (this.filterCriteria.availability === 'after12' && mentor.startTime >= '12:00:00');
          const mentorNameMatch =
      !this.filterCriteria.mentorName ||
      (mentor.firstName + ' ' + mentor.lastName).toLowerCase().includes(this.filterCriteria.mentorName.toLowerCase());
    
      return techFieldMatch && availabilityMatch && mentorNameMatch;
      });
    },
    sortByName() {
  this.filteredMentors.sort((a, b) => {
    const mentorAgeA = new Date(a.mentorAge);
    const mentorAgeB = new Date(b.mentorAge);

    return mentorAgeA - mentorAgeB;
  });
},


  },
  async beforeMount() {
    await this.$store.dispatch('fetchMentors');
    this.techFields = [...new Set(this.mentors?.map((mentor) => mentor.techField))];

    this.filterMentors(); 
  },

};
</script>

<style scoped>


.card {

  border: none;
}
</style>

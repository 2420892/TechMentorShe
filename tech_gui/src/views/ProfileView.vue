<template>
  <div>
    <!-- Mentee Profile Card -->
    <div class="logout-button">
      <log-out />
    </div>
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
              <button @click="showUpdateModal" class="btn btn-primary">Edit Profile</button>
              <button @click="deleteMentee(mentee?.menteeID)" class="btn btn-danger">Delete Account</button>
              
            </div>
          </div>
        </div>
      </div>
      <b-modal v-model="isUpdateModalVisible" title="Update Mentee Profile">
        <form @submit.prevent="updateMentee">
          <div class="form-group">
            <label for="firstName">First Name:</label>
            <input v-model="updatedMentee.firstName" type="text" id="firstName" class="form-control" />
          </div>
  
          <div class="form-group">
            <label for="lastName">Last Name:</label>
            <input v-model="updatedMentee.lastName" type="text" id="lastName" class="form-control" />
          </div>
  
          <div class="form-group">
            <label for="menteeAge">Age:</label>
            <input v-model="updatedMentee.menteeAge" type="number" id="menteeAge" class="form-control" />
          </div>
  
          <div class="form-group">
            <label for="menteeRole">Role:</label>
            <input v-model="updatedMentee.menteeRole" type="text" id="menteeRole" class="form-control" />
          </div>
  
          <div class="form-group">
            <label for="emailAdd">Email:</label>
            <input v-model="updatedMentee.emailAdd" type="email" id="emailAdd" class="form-control" />
          </div>
  
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </form>
      </b-modal>

    <!-- Mentor Profile Card -->

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
</template>


<script>
import { useCookies } from "vue3-cookies"
const {cookies} = useCookies()
import LogOut from "@/components/LogOut.vue";
export default {
  components:{
LogOut,
  },
  data() {
    return {
      isUpdateModalVisible: false,
      updatedMentee: {
        firstName: '',
        lastName: '',
        menteeAge: null,
        menteeRole: '',
        emailAdd: '',
      },
    };
  },
  computed: {
    // mentor(){
    //   return this.$store.state.mentor
    // },
    mentee(){
  return this.$store.state.mentee || cookies.get("LegitUser")

},
mID(){
  if (this.mentee?.result?.length) {
    return this.mentee?.result.menteeID
  } else {
    return cookies.get("LegitUser")?.result.menteeID
  }
}
  },
  mounted() {
    this.$store.dispatch('fetchMentee');
    this.$store.dispatch('fetchMentor')
  },
  methods:{
// In your store
showUpdateModal() {
      // Initialize the updatedMentee object with the current mentee data
      this.updatedMentee = { ...this.mentee };
      this.isUpdateModalVisible = true;
    },
    updateMentee() {
      this.$store
        .dispatch('updateMentee', this.updatedMentee)
        .then(() => {
          this.isUpdateModalVisible = false; // Close the modal on success
          // Handle success, show a success message, or redirect to another page.
        })
        .catch((error) => {
          // Handle error, show an error message, or log the error.
        });
    },
  },

,
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
.logout-button {
  position: absolute;
  top:60px;
  right: 10px; 
}
</style>

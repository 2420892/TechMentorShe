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
              <button class="btn btn-secondary" @click="editMentee(mentee)">Edit</button>
              <button @click="deleteMentee(mentee?.menteeID)" class="btn btn-danger">Delete Account</button>
              
            </div>
          </div>
        </div>
      </div>
      <div v-if="showEditModal" class="modal-overlay">
        <div class="modal-content">
        <h3>Edit user</h3>
        <form @submit.prevent="updateMentee">
          <div>
            <spinner-comp v-if="isLoadingUpdate"  />
          </div>
          <div class="mb-3">
          <label for="editName">firstName:</label>
          <input type="text" id="editName" v-model="editMenteeData.firstName" required>
        </div>
        <div class="mb-3">
          <label for="editlastName">lastName:</label>
          <input type="text" id="editlastName" v-model="editMenteeData.lastName" required>
        </div>
        <div class="mb-3">
          <label for="editgender">Age:</label>
          <input type="number" id="editage" v-model="editMenteeData.menteeAge" required>
          </div>
          <div class="mb-3">
          <label for="editemailAdd:">emailAdd:</label> 
          <input type="text" id="editemailAdd" v-model="editMenteeData.emailAdd" required>
          </div>
          <div class="mb-3">
          <label for="edituserPassword">userPassword:</label>
          <input type="password" id="edituserPassword" v-model="editMenteeData.menteePass" required>
          </div>
          <div class="mb-3">
            <label for="editprofileUrl">profileUrl:</label>
            <input type="text" id="editprofileUrl" v-model="editMenteeData.image" required>
            </div>
          <button class="btn btn-primary" type="submit" :disabled="isLoading">Update</button>
          <button class="btn btn-secondary" @click="showEditModal = false" :disabled="isLoading">Cancel</button>
        </form>
        </div>
      </div>

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
              <button class="btn btn-secondary" @click="editMentor(mentor)">Edit</button>
              <button @click="deleteMentor(mentor.mentorID)" class="btn btn-danger">Delete Account</button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="showEditModal2" class="modal-over">
        <div class="modal-content">
        <h3>Edit Mentor</h3>
        <form @submit.prevent="updateMentor">
          <div>
            <spinner-comp v-if="isLoadingUpdate2" />
          </div>
          <div class="mb-3">
          <label for="editName">Name:</label>
          <input type="text" id="editName" v-model="editMentorData.firstName" required>
        </div>
        <div class="mb-3">
          <label for="editAmount">lastName:</label>
          <input type="text" id="editAmount" v-model="editMentorData.lastName" required>
        </div>
        <div class="mb-3">
          <label for="editCategory">Age:</label>
          <input type="number" id="editCategory" v-model="editMentorData.mentorAge" required>
          </div>
          <div class="mb-3">
            <label for="editDescription">emailAdd:</label>
            <input type="text" id="editDescription" v-model="editMentorData.emailAdd" required>
            </div>
            <div class="mb-3">
              <label for="editDescription">password:</label>
              <input type="text" id="editDescription" v-model="editMentorData.mentorPass" required>
              </div>
          <div class="mb-3">
            <label for="editDescription">tech field:</label>
            <input type="text" id="editDescription" v-model="editMentorData.techField" required>
            </div>
          <div class="mb-3">
          <label for="editGender">current position:</label>
          <input type="text" id="editGender" v-model="editMentorData.techPosition" required>
          </div>
          <div class="mb-3">
            <label for="editGender">career bio:</label>
            <input type="text" id="editGender" v-model="editMentorData.describtion" required>
            </div>
            <div class="mb-3">
              <label for="editGender">available date:</label>
  
      <input type="date" id="editGender" v-model="editMentorData.availDate" required>
              </div>
              <div class="mb-3">
                <label for="editGender">startTime:</label>
                <input type="time" id="editGender" v-model="editMentorData.startTime" required>
                </div>
                <div class="mb-3">
                  <label for="editGender">end time:</label>
                  <input type="time" id="editGender" v-model="editMentorData.endTime" required>
                  </div>
          <div class="mb-3">
          <label for="editImage">Image URL:</label>
          <input type="text" id="editImage" v-model="editMentorData.image" required>
          </div>
          <button class="btn btn-primary" type="submit" :disabled="isLoadingUpdate2">Update</button>
          <button class="btn btn-secondary" @click="showEditModal2 = false" :disabled="isLoadingUpdate2">Cancel</button>
        </form>
        </div>
      </div>
    </div>
</template>


<script>
import { useCookies } from "vue3-cookies"
const { cookies } = useCookies()
import LogOut from "@/components/LogOut.vue";
import SpinnerComp from "@/components/SpinnerComp.vue";
export default {
  components: {
    LogOut,
    SpinnerComp,
  },
  data() {
    return {
      isUpdateModalVisible: false,
      isLoadingUpdate2:false,
      showEditModal: false, 
      showEditModal2:false,
      editMenteeData: {
        menteeID: null,
        firstName: '',
        lastName: '',
        menteeAge: '',
        emailAdd: '',
        menteePass: '',
        image: ''
      },
      isLoadingUpdate: false,
      editMentorData:{
        mentorID: null, 
        firstName: '',
        lastName:'',
        mentorAge:'',
        emailAdd:'',
        mentorPass:'',
        techField:'',
        describtion:'',
        techPosition:'',
        image:'',
        availDate:'',
        startTime:'',
        endTime:''
      },
      isLoadingUpdate2:false
    };
  },
  computed: {
    mentee() {
      return this.$store.state.mentee || cookies.get("LegitUser");
    },
    mentor() {
      return this.$store.state.mentor || cookies.get("LegitMentor");
    },
    formattedAvailDate() {
    if (this.editMentorData.availDate) {
      const date = new Date(this.editMentorData.availDate);
      return date.toLocaleDateString(); 
    }
    return '';
  },
  
  },
  mounted() {
    this.$store.dispatch('fetchMentees');
    this.$store.dispatch('fetchMentors');
  },
  methods: {
     editMentee(mentee) {
      this.isLoadingUpdate = true;
      this.editMenteeData = { ...mentee };
      this.isLoadingUpdate = false;
      this.showEditModal = true; 
    },
     updateMentee() {
      this.isLoadingUpdate = true;
      try {
       this.$store.dispatch('updateMentee', this.editMenteeData);
      } catch (error) {
        console.error('Update user error:', error);
      }
      this.isLoadingUpdate = false;
      this.showEditModal = false; 
    },
    deleteMentee(menteeID) {
      this.$store.dispatch('deleteMentee', menteeID);
      window.location.reload();
    },

    editMentor(mentor) {
      this.isLoadingUpdate2 = true;
      this.editMentorData = { ...mentor }; // Assign mentor data to editMentorData
      this.isLoadingUpdate2 = false;
      this.showEditModal2 = true; 
    },
    
     updateMentor() {
      this.isLoadingUpdate2 = true;
      try {
         this.$store.dispatch('updateMentor', this.editMentorData);
      } catch (error) {
        console.error('Update mentor error:', error);
      }
      this.isLoadingUpdate2 = false;
      this.showEditModal2 = false; 
    },
    deleteMentor(mentorID) {
      this.$store.dispatch('deleteMentor', mentorID);
      window.location.reload();
    }
  }
};
</script>

<style scoped>
.logout-button {
  position: absolute;
  top: 60px;
  right: 10px;
}

.modal-overlay {
}


</style>
<template>
    <div class="container-fluid">
      <h2>MENTees</h2>
      <!-- mentees -->
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>email Address</th>
            <th>mentee age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="mentee in mentees" :key="mentee.id">
            <td>{{ mentee.menteeID }}</td>
            <td>
              <div class="mentor-image">
                <img class="img-top img-fluid rounded-circle" :src="mentee.image" alt="Mentor Image" style="width:4rem;height:4rem;">
              </div>
            </td>
            <td>{{ mentee.firstName }}</td>
            <td>{{ mentee.lastName }}</td>
            <td>{{ mentee.emailAdd }}</td>
            <td>{{ mentee.menteeAge }}</td>
            <td>
              <button class="btn btn-secondary" @click="editMentee(mentee)" style="width:5rem;">Edit</button>
              <button class="btn btn-primary" @click="deleteMentee(mentee.menteeID)" style="width:5rem;">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>  
      <!-- edit mentees -->
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



      <!-- MENTORS -->
      <h2>MENTORS</h2>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>First Name</th>
            <th>Tech Field</th>
            <th>Tech Position</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="mentor in mentors" :key="mentor.id">
            <td>{{ mentor.mentorID }}</td>
            <td>
              <div class="mentor-image">
                <img class="img-top img-fluid rounded-circle" :src="mentor.image" alt="Mentor Image" style="width:4rem;height:4rem;">
              </div>
            </td>
            <td>{{ mentor.firstName }}</td>
            <td>{{ mentor.techField }}</td>
            <td>{{ mentor.techPosition }}</td>
      <td>{{formattedAvail(mentor.availDate)}}<br>Time:{{ mentor.startTime }} - {{ mentor.endTime }}</td>
            <td>
              <button class="btn btn-secondary" @click="editMentor(mentor)" style="width:5rem;">Edit</button>
              <button class="btn btn-primary" @click="deleteMentor(mentor.mentorID)" style="width:5rem;"><i class="bi bi-trash3-fill"></i></button>
            </td>
          </tr>
        </tbody>
      </table>  
      <!-- Edit Mentor Modal -->
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
                <label for="editDescription">user Role:</label>
                <input type="text" id="editDescription" v-model="editMentorData.mentorRole" required>
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
  import SpinnerComp from '@/components/SpinnerComp.vue';
  export default {
    components: {
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
        mentorRole:'',
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
    mentors() {
      return this.$store.state.mentors;
    },
    mentees() {
      return this.$store.state.mentees;
    },
    mentee() {
      return this.$store.state.mentee ;
    },
    mentor() {
      return this.$store.state.mentor;
    },
    formattedAvailDate() {
    if (this.editMentorData.availDate) {
      const date = new Date(this.editMentorData.availDate);
      return date.toLocaleDateString(); 
    }
    return '';
  },
  },
  methods: {
    formattedAvail(availDate) {
      if (availDate) {
        const dateParts = availDate.split('T');
        return dateParts[0];
      }
      return '';
    },
    deleteMentor(mentorID) {
  this.$store.dispatch('deleteMentor', mentorID);
  window.location.reload();
},
deleteMentee(menteeID) {
  this.$store.dispatch('deleteMentee', menteeID);
  window.location.reload();
},
editMentor(mentor) {
      this.isLoadingUpdate2 = true;
      this.editMentorData = { ...mentor }; 
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

  },
  mounted() {
    this.$store.dispatch('fetchMentors');
    this.$store.dispatch('fetchMentees');
  
  },

};
  </script>
  
  <style scoped>
  .modal-over {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  
  .modal-content {
    background-color: white;
    width: 39%;
    padding: 20px;
    border-radius: 8px;
    padding: 1rem;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .mentor-image {
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 641px) {
    .table th:nth-child(4),
    .table td:nth-child(4) {
      display: none;
    }
    .table th:nth-child(5),
    .table td:nth-child(5) {
      display: none;
    }
    
  }
  @media screen and (max-width: 555px) {
    .table th:nth-child(2),
    .table td:nth-child(2) {
      display: none;
    }
    .table th:nth-child(1),
    .table td:nth-child(1) {
      display: none;
    }
    button{
      width:3rem!important;
    }
    
    
  }
  </style>
  
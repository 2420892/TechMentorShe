<template>
    <div class="container-fluid">
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
            <td>{{formattedAvailDate(mentor.availDate) }}<br>Time:{{ mentor.startTime }} - {{ mentor.endTime }}</td>
            <td>
              <button class="btn btn-primary" @click="deleteMentor(mentor.id)">Delete</button>
              <button class="btn btn-secondary" @click="editMentor(mentor)">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>  
      <!-- Edit Mentor Modal -->
      <div v-if="showEditModal" class="modal-over">
        <div class="modal-content">
          <h3>Edit Mentor</h3>
          <form @submit.prevent="updateMentor">
            <div>
              <spinner-comp v-if="isLoadingUpdate" />
            </div>
            <div class="mb-3">
              <label for="editMentorImage">Image URL:</label>
              <input type="text" id="editMentorImage" v-model="editMentorData.image" required>
            </div>
            <div class="mb-3">
              <label for="editMentorFirstName">First Name:</label>
              <input type="text" id="editMentorFirstName" v-model="editMentorData.firstName" required>
            </div>
            <div class="mb-3">
              <label for="editMentorTechField">Tech Field:</label>
              <input type="text" id="editMentorTechField" v-model="editMentorData.techField" required>
            </div>
            <div class="mb-3">
              <label for="editMentorTechPosition">Tech Position:</label>
              <input type="text" id="editMentorTechPosition" v-model="editMentorData.techPosition" required>
            </div>
            <div class="mb-3">
              <label for="editMentorAvailDate">Availability Date:</label>
              <input type="text" id="editMentorAvailDate" v-model="editMentorData.availDate" required>
            </div>
            <div class="mb-3">
              <label for="editMentorStartTime">Start Time:</label>
              <input type="text" id="editMentorStartTime" v-model="editMentorData.startTime" required>
            </div>
            <div class="mb-3">
              <label for="editMentorEndTime">End Time:</label>
              <input type="text" id="editMentorEndTime" v-model="editMentorData.endTime" required>
            </div>
            <button class="btn btn-primary" type="submit" :disabled="isLoadingUpdate">Update</button>
            <button class="btn btn-secondary" @click="showEditModal = false" :disabled="isLoadingUpdate">Cancel</button>
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
      // Add other components as needed
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
  </style>
  
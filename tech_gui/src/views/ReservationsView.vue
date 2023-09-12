<template>
    <div>
      <h1>Reservations</h1>
  
      <!-- Display reservations -->
      <ul>
        <li v-for="reservation in getReservations" :key="reservation.resID">
  
          {{ reservation.firstName }} {{ reservation.lastName }}
     
          <button @click="removeReservation(reservation.resID)">Cancel Reservation</button>
        </li>
      </ul>
  
      <!-- Make a new reservation form -->
      <div>
        <h2>Make a New Reservation</h2>
        <label for="mentorID">Mentor ID:</label>
        <input type="text" id="mentorID" v-model="mentorID" />
        <button @click="addReservation(mentorID)">Make Reservation</button>
      </div>
    </div>
  </template>
  

<script>
  
export default {
  Name: "reservations", 
  computed: {
    getReservations() {
      console.log(this.$store.state.reservations);
      return this.$store.state.reservations;
    },
    mentee() {
      return this.$store.state.mentee;
    },
  },

  mounted() {
    this.$store.dispatch("fetchReservations", this.mentee.menteeID);
  },
  methods: {
    addReservation(mentorID) {
      const menteeID = this.mentee.menteeID;

      this.$store
        .dispatch("addReservation", { menteeID, mentorID })
        .then(() => {})
        .catch((error) => {
          console.error("Error adding reservation:", error);
        });
    },
    removeReservation(resID) {
      const menteeID = this.mentee.menteeID;

      this.$store
        .dispatch("removeReservation", { menteeID, resID })
        .then(() => {})
        .catch((error) => {
          console.error("Error removing reservation:", error);
        });
    },
  },
};
</script>


<style scoped>

</style>
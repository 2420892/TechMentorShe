<template>
  <div>
    <h1>Made Reservations</h1>
    <div class="logout-button">
      <log-out />
    </div>
    <section style="background-color: #eee;">
      <div class="container py-5">
        <div class="row justify-content-center mb-3">
          <div class="col-md-12 col-xl-10">
            <button  @click="deleteReservations">DELETE ALL RESERVATIONS</button>
            <div class="card shadow-0 border rounded-3">
              <div class="card-body" v-for="reservation in reservations" :key="reservation.resID">
                <div class="row">
                  <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                    <div class="bg-image hover-zoom ripple rounded ripple-surface">
                      <img :src="reservation.image"
                        class="w-100" />
                      <a href="#!">
                        <div class="hover-overlay">
                          <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-6 col-xl-6">
                    <h5>{{reservation.firstName}}</h5>
                    <p class="text-truncate mb-4 mb-md-0">
                     You have added this reservation to your wish list.Corfirm reservation or cancel
                    </p>
                  </div>
                  <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                    <div class="d-flex flex-row align-items-center mb-1">
                      <h4 class="mb-1 me-1">{{formattedAvail(reservation.availDate)}}</h4>  
                    </div>
                    <h6 class="text-success">{{reservation.startTime}}</h6>
                    <h6 class="text-success">{{reservation.endTime}}</h6>
                    <div class="d-flex flex-column mt-4">
                      <button
                      class="btn btn-primary btn-sm"
                      type="button"
                      @click="showConfirmation(reservation)"
                    >
                      Confirm Reservation
                    </button>
                    
                      <button class="btn btn-outline-primary btn-sm mt-2"  @click="deleteReservation(reservation.resID)">
                      Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="showConfirmationDialog && selectedReservation" class="confirmation-dialog">
            <div class="confirmation-content">
              <p>
                Meeting reservation confirmed, you are meeting {{ selectedReservation.firstName }} at {{ selectedReservation.startTime }} on {{ selectedReservation.availDate }}.
              </p>
              <button class="btn btn-primary" @click="closeConfirmationDialog">Close</button>
            </div>
          </div>
          
        </div>
      </div>
      </section>
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
    showConfirmationDialog: false,
    selectedReservation: null,
  };
},

  computed:{
reservations(){
  return this.$store.state.reservation;
},
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
  methods: {
    formattedAvail(availDate) {
      if (availDate) {
        const dateParts = availDate.split('T');
        return dateParts[0];
      }
      return '';
    },
    deleteReservation(resID) {
      const payload = {
        menteeID: this.mID, 
        resID
      }
      this.$store
        .dispatch('deleteReservation', payload)
        .then(() => {
          this.$store.dispatch('fetchReservations', this.mID);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    deleteReservations() {
      const payload = {
        menteeID: this.mID, 
      }
      this.$store
        .dispatch('deleteReservations', payload)
        .then(() => {
          this.$store.dispatch('fetchReservations', this.mID);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    showConfirmation(reservation) {
    this.selectedReservation = reservation;
    this.showConfirmationDialog = true;
  },

  closeConfirmationDialog() {
    this.showConfirmationDialog = false;
  },
  
  },

  mounted(){
    this.$store.dispatch('fetchReservations',this.mID);
  }
};
</script>

<style scoped>
.logout-button {
  position: absolute;
  top:60px;
  right: 10px; 
}
  .confirmation-dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }

  .confirmation-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    text-align: center;
  }


</style>
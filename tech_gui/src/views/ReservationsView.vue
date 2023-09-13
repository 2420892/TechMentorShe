<template>
  <div>
    <h1>Made Reservations</h1>
    <!-- <ul>
      <li > -->
        <!-- Display reservation details here -->
        <!-- {{ reservation.firstName }}
        {{ reservation.availdate }} - {{ reservation.startTime }}
        <button @click="cancelReservation(reservation)">Cancel</button>
      </li>
    </ul> -->
    <section style="background-color: #eee;">
      <div class="container py-5">
        <div class="row justify-content-center mb-3">
          <div class="col-md-12 col-xl-10">
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
                    <div class="mt-1 mb-0 text-muted small">
                      <span>({{reservation.mentorAge}})</span>
                      <span class="text-primary"> • </span>
                      <span>{{reservation.techField}}</span>
                    </div>
                    <div class="mb-2 text-muted small">
                      <span>{{reservation.techPosition}}</span>
                      <span class="text-primary"> • </span>
                    </div>
                    <p class="text-truncate mb-4 mb-md-0">
                      There are many variations of passages of Lorem Ipsum available, but the
                      majority have suffered alteration in some form, by injected humour, or
                      randomised words which don't look even slightly believable.
                    </p>
                  </div>
                  <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                    <div class="d-flex flex-row align-items-center mb-1">
                      <h4 class="mb-1 me-1">{{reservation.availDate}}</h4>  
                    </div>
                    <h6 class="text-success">{{reservation.startTime}}</h6>
                    <h6 class="text-success">{{reservation.endTime}}</h6>
                    <div class="d-flex flex-column mt-4">
                      <button class="btn btn-primary btn-sm" type="button">Confirm Reservation</button>
                      <button class="btn btn-outline-primary btn-sm mt-2"  @click="deleteReservation(reservation.resID)">
                      Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
export default {
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
  
  },

  mounted(){
    this.$store.dispatch('fetchReservations',this.mID);
  }
};
</script>

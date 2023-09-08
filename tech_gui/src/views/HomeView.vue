<template>
  <div class="home">
    <div class="card text-light" style="position: relative;">
      <img
        src="https://i.ibb.co/VWfCCz4/keren-levand-pm-e64-IOYHM-unsplash-1170x780.jpg"
        class="img-fluid"
        alt="..."
        style="object-fit: center; object-position: center; height: 60vh;"
      >
      <div class="overlay"></div>
      <div class="card-img-overlay mt-5 ms-4">
        <h1 class="card-title">TechMentorShe: Aspiring<span style="color:#00CED1"> Tech Stars <br>Meet Industry Sheroes.</span></h1>
        <h4 class="card-text">Bridging the Gender Gap in Tech, One Mentorship at a Time.</h4>
        <h4 class="card-text"><small>Empowering Tech Futures Together</small></h4>
      </div>
    </div>
    <div class="container text-center" id="second">
      <h4>Mentoring Flow</h4>
      <h2>HOW TechMentorShe Works!</h2>
      <div class="row align-items-start">
        <div class="col">
          <div class="card" style="width: 18rem;">
            <div class="icon-circle">
              <i class="bi bi-door-open-fill" style="font-size: 4rem; color: #00CED1;"></i>
            </div>
            <h3>Sign Up</h3>
            <div class="card-body">
              <p class="card-text">Are you interested in Tech but confused which field you want to join? It's very simple. Sign up Now</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem;">
            <div class="icon-circle">
              <i class="bi bi-people-fill" style="font-size: 4rem; color: #00CED1;"></i>
            </div>
            <h3>Access Mentoring</h3>
            <p>Get linked with your desired mentor by making a meeting reservation with the mentor available on your suited time.</p>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem;">
            <div class="icon-circle">
              <i class="bi bi-mortarboard-fill" style="font-size: 4rem; color: #00CED1;"></i>
            </div>
            <h3>Aspire to inspire</h3>
            <p>Your success is our top priority. Gather your desired skill set, and you can become a mentor too</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-4 md-4 sm-1" style="background-color:rgba(237,237,237,255);">
      <h2 id="featured" style="padding-top:40px;"> Meet Our Sheroes</h2>
      <div class="row justify-content-center " v-if="mentors">
        <div v-for="mentor in mentors" :key="mentor.mentorID" class="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div class="card d-flex flex-column h-60">
            <img :src="mentor.image" class="card-img-top imf-fluid" alt="mentor Image" style="height:200px;">
            <div class="card-body">
              <p class="card-title">{{ mentor.firstName }} ({{mentor.mentorAge}})</p>
              <p class="card-title">{{ mentor.techField}} </p>
              <p class="card-title">{{mentor.techPosition}}</p>
              <a class="view" href="/products">View More</a>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="row justify-content-center">
        <SpinnerComp/>
      </div>
    </div>
  </div>
</template>
<script>
import SpinnerComp from '@/components/SpinnerComp.vue';
export default {
  components: {
    SpinnerComp
  },
  computed: {
    mentors() {
      if (this.$store.state.mentors) {
        const mentorID = [1,2,4,5 ];
        return this.$store.state.mentors.filter(mentor => mentorID.includes(mentor.mentorID));
      }
      return this.$store.state.mentors;
    }
  },
  mounted() {
    this.$store.dispatch('fetchMentors');
  
  },
  }
</script>

<style scoped>
.home {
  font-family: Libre Baskerville;
}

.card-img-overlay {
  color: aliceblue;
  text-align: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  pointer-events: none;
}

#second {
  background-image: url('https://i.ibb.co/mHdrGkJ/wave-haikei-3.png');
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center center;
}

.icon-circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px; 
  height: 80px; 
  border: 1px solid#dfdfdf;
  border-radius: 50%;
  margin: 20px auto 0; 
}

.card-body {
  margin-top: 10px;
}
</style>

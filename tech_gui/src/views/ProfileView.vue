<template>
  <div>
    <div v-if="mentee" class="container text-center">
      <div class="row align-items-start" > 
        <div class="col" v-for="mentee in mentee" :key="mentee.menteeID">
          <div class="col">
            <img :src="mentee.image" class="img-fluid" alt="Mentee Image">
          </div>
          <div class="mb-3 row">
            <label for="staticName" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
              <input type="text" readonly class="form-control-plaintext" id="staticName" :value="mentee.firstName">
            </div>
          </div>
          <div class="mb-3 row">
            <label for="staticSurname" class="col-sm-2 col-form-label">Surname</label>
            <div class="col-sm-10">
              <input type="text" readonly class="form-control-plaintext" id="staticSurname" :value="mentee.lastName">
            </div>
          </div>
          <div class="mb-3 row">
            <label for="staticMenteeAge" class="col-sm-2 col-form-label">Mentee Age</label>
            <div class="col-sm-10">
              <input type="text" readonly class="form-control-plaintext" id="staticMenteeAge" :value="mentee.menteeAge">
            </div>
          </div>
          <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input type="text" readonly class="form-control-plaintext" id="staticEmail" :value="mentee.emailAdd">
            </div>
          </div>
        </div>
        <div class="col">
        <button @click="updateMentee()">update</button>
        </div>
      </div>
    </div>
  <div v-else>
    <p>User not found or not logged in.</p>
  </div>
</div>
</template>

<script>
export default {
  computed: {
    mentee() {
      return this.$store.state.mentee;
    },
  },
  mounted() {
    this.$store.dispatch('fetchMentee');
  },
  methods:{
    updateMentee(menteeID) {
  this.$store.dispatch('updateMentee', menteeID);
}
  }
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>

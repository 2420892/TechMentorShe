<template>
    <div class="mentors">
<h2>Mentors Page</h2>
<div v-for='Career in careers' class="card" style="width: 18rem;" :key="Career.careerID">
    <img :src="Career.image" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">{{Career.describtion}}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    </div>
</template>

<script>
    export default {
        computed: {
    careers() {
      return this.$store.state.careers;
    }
  },
  mounted() {
    this.$store.dispatch('fetchCareers');
  }
    }
</script>

<style scoped>

</style>
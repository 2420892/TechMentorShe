<template>
    <div class="mentors">
<h2>Mentors Page</h2>
<div v-for='Career in careers' class="card" style="width: 18rem;" :key="Career.careerID">
  <img :src="Career.image" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title" >Card title</h5>
    <p class="card-title">{{Career.techField}}</p>
    <p class="card-title">{{Career.techPosition}}</p>
    <p class="card-text"><i class="bi bi-quote" style="font-size: 2rem; color: #00CED1;"></i>{{Career.describtion}}</p>
    <p>{{Career.availDate}}</p>
    <p>from: {{Career.startTime}}</p>
    <p>TO:{{Career.endTime}}</p>
    <a href="#" class="btn btn-primary">Make a reservation</a>
  </div>
</div>
    </div>
</template>

<script>
    export default {
        computed: {
    careers() {
      return this.$store.state.careers;
    },
    users(){
return this.$store.state.users;
    }
  },
  mounted() {
    this.$store.dispatch('fetchCareers'),
    this.$store.dispatch('fetchUsers');
  }
    }
</script>

<style scoped>

</style>
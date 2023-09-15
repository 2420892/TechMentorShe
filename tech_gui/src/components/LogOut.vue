<template>
    <div class="profile">
<button @click="logOut">logout</button>
    </div>
</template>

<script>

export default {
  methods: {
logOut(){
  this.$store.dispatch("logOut")
  window.location.reload();
}
    }}

</script>

<style scoped>

</style>
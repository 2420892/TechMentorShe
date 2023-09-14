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
}
    }}

</script>

<style scoped>

</style>
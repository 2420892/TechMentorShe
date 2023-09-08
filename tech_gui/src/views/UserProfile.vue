<template>
    <div class="profile">
<SignupMentor/>
    </div>
</template>

<script>
import SpinnerCompVue from '../components/SpinnerComp.vue';
import SignupMentor from '@/components/SignupMentor.vue';
import SignupMentee from '@/components/SignupMentee.vue';
export default {
  components: {
    SpinnerCompVue,
    SignupMentor,
    SignupMentee
  }
    }
</script>

<style scoped>

</style>
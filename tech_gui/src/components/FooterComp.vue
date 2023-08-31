<template>
    <div class="container-fluid bg-body-tertiary" id="footer">
<div class="row">
   
    <div class="social">
        <p>Email: zwenisiyamanga@gmail.com</p>
        <p>Phone: 0654854531</p>
    </div>
    <p class="lead">Copyright &copy; {{currentyear}}</p>
      
    </div>
    </div>
</template>
<script>

    export default {
        data(){
            return{
                currentyear:new Date().getFullYear()
            }
        }
    }
</script>

<style scoped>
#footer {
    display: grid;
    grid-template-columns: repeat (3,1fr );
    text-align: center;
    padding: 1rem;
    }
  
  p {
    margin-bottom: 0.5rem;
  }
</style>
<template>
  <div class="contact">
    <div class="container text-center">
      <div class="row align-items-start">
        <div class="col-12 iframe-container">
          <iframe
            class="embed-responsive-item"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13233.069675818386!2d18.4926986!3d-33.9856643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc433bedd50e81%3A0x9c746d268c8e0ad9!2sLife%20Choices!5e0!3m2!1sen!2sza!4v1693985188889!5m2!1sen!2sza"
            width="100%"
            height="100%"
            style="border:0;"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <form action="https://formspree.io/f/xjvqrjlr" method="POST" onsubmit="return validateForm()">
                  <h1 class="top">Contact Us</h1>
                  <div class="mb-3">
                    <label for="firstName" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="firstName" placeholder="Your Name">
                  </div>
                  <div class="mb-3">
                    <label for="lastName" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="lastName" placeholder="Surname">
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="name@example.com">
                  </div>
                  <div class="mb-3">
                    <label for="message" class="form-label">Send Message:</label>
                    <textarea class="form-control" id="message" rows="3" name="message" required ></textarea>
                  </div>
                  <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="submit">Submit</button>
                  </div>
                </form>
              </div>
              <div class="col">
                <h1 class="card-title">Drop us a Line</h1>
                <p>Contact us on +27 (0)21 486 1860 </p>
                <p>email: hello@techMentorShe.agency <span style="color:#00CED1">Alternatively <br> submit the form left.</span></p>
                <a href="https://www.linkedin.com/in/siyamanga-zweni-20099b1aa/" target="blank"><i class="bi bi-linkedin"></i></a>
                <a href="//wa.me/0634854531" target="blank"><i class="bi bi-whatsapp" ></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .iframe-container {
    height: 60vh;
    background: url('https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13233.069675818386!2d18.4926986!3d-33.9856643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc433bedd50e81%3A0x9c746d268c8e0ad9!2sLife%20Choices!5e0!3m2!1sen!2sza!4v1693985188889!5m2!1sen!2sza');
    background-size: cover;
  }

  i {
    font-size: 2rem;
    color: #00CED1;
  }
</style>

<script>
  function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (message.trim() === "") {
      alert("Please enter a message.");
      return false;
    }
    return true;

    document.querySelector("form").addEventListener("submit", function (event) {
      if (!validateForm()) {
        event.preventDefault(); 
      }
    });
  }
</script>

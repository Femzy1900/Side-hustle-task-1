function validateForm(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const gender = document.getElementById("gender").value.trim();
    const password = document.getElementById("password").value.trim();

    if (name === "" || email === "" || phone === "" || gender === "" || password ===""){
        document.getElementById("error-message").innerHTML = "Please fill the form";
        return
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("error-message").innerHTML = "Please enter a valid email address.";
      return;
    }
  
    document.getElementById("error-message").innerHTML = "";

    document.getElementById("success-message").innerHTML = "Form submitted successfully!";
  
}
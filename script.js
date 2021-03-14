// Simple Check to validate form.
function checkEmail() {
  var email = document.getElementById("email");
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (email.value === "") {
    alert("Whoops! It looks like you forgot to add your email!");
  } else if (!filter.test(email.value)) {
    alert("Please provide a valid email address!");
    email.focus;
    return false;
  }
}
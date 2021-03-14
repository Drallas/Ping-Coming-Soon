// Get DOM Elements that need to be manipulated
const email = document.getElementById("email");


function checkEmail($email) {
  if (
    preg_match(
      "/^([a-zA-Z0-9])+([a-zA-Z0-9._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9._-]+)+$/",
      $email
    )
  ) {
    return true;
  }
  return false;
}
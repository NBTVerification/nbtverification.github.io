// script.js 

const validUsernames = ["Watsons900", "tremendous50", "awsm924"]; 
const validPasswords = ["Athena123", "cool987", "chill98"]; 
let isRecaptchaVerified = false; // Track reCAPTCHA verification 
function onRecaptchaSuccess() { 
  isRecaptchaVerified = true; // Called when reCAPTCHA is successfully completed
}

document.getElementById('loginForm').addEventListener('submit', function(e) { 
  e.preventDefault();
  var username = document.getElementById('username').value.trim(); // Trim spaces
  var password = document.getElementById('password').value.trim(); // Trim spaces
  var errorMsg = document.getElementById('error-msg'); 
  var recaptchaMsg = document.getElementById('recaptcha-msg'); // Validate inputs
  if (username === '' || password === '') { 
    errorMsg.textContent = 'Username or password cannot be empty.'; 
    errorMsg.classList.remove('hidden');
    recaptchaMsg.classList.add('hidden'); // Hide reCAPTCHA message 
  }
    
  else if (!isRecaptchaVerified) { 
    recaptchaMsg.classList.remove('hidden'); // Show reCAPTCHA message 
    errorMsg.classList.add('hidden'); // Hide error message
  }

  else if (!validUsernames.includes(username) || !validPasswords.includes(password)) {
    errorMsg.textContent = 'Username or password is incorrect, please try again.';
    errorMsg.classList.remove('hidden'); 
    recaptchaMsg.classList.add('hidden'); // Hide reCAPTCHA message 
  }
  
  else { errorMsg.classList.add('hidden'); // Hide error message on successful validation
        recaptchaMsg.classList.add('hidden'); // Ensure reCAPTCHA message is hidden if correct too
        alert('Login successful! Redirecting to your dashboard...'); 
        window.location.href = 'redirect.html'; // Redirect to dashboard


        
       } });

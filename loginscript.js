// script.js 
document.getElementById('loginForm').addEventListener('submit', function(e) { 
  e.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value; 
  var errorMsg = document.getElementById('error-msg'); 
  if (username === '' || password === '') { 
    errorMsg.textContent = 'Username or password is incorrect, please try again.'; 
    errorMsg.classList.remove('hidden');
  }
  else {
    // Simulate a call to Google reCAPTCHA v3 
    alert('Please complete Google reCAPTCHA v3'); 
    // Optionally you can reset form after alert // e.target.reset(); // errorMsg.classList.add('hidden');
  } });

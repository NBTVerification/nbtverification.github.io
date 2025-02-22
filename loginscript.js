// script.js 
document.getElementById('loginForm').addEventListener('submit', function(e) { e.preventDefault();
                                                                             var username = document.getElementById('username').value;
                                                                             var password = document.getElementById('password').value;
                                                                             var errorMsg = document.getElementById('error-msg');
                                                                             var recaptchaModal = document.getElementById('recaptchaModal');
                                                                             if (username === '' || password === '') { 
                                                                               errorMsg.textContent = 'Username or password is incorrect, please try again.'; 
                                                                               errorMsg.classList.remove('hidden'); 
                                                                             }
                                                                             else {
                                                                               recaptchaModal.classList.remove('hidden');
                                                                               // Show the reCAPTCHA modal
                                                                               errorMsg.classList.add('hidden');
                                                                               // Hide the error message
                                                                             } }); 
document.getElementById('closeModal').addEventListener('click', function() {
  var recaptchaModal = document.getElementById('recaptchaModal'); 
  recaptchaModal.classList.add('hidden');
  // Hide the reCAPTCHA modal
}); 
document.getElementById('submitRecaptcha').addEventListener('click', function() { 
  var recaptchaModal = document.getElementById('recaptchaModal'); 
  alert('ReCAPTCHA completed! Logging you in...'); 
  
  // Simulate successful reCAPTCHA recaptchaModal.classList.add('hidden'); // Hide the reCAPTCHA modal // Here you would typically handle the login process

});

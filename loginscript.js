// script.js 
const validUsernames = ["Watsons900", "tremendous50", "awsm924"]; 
const validPasswords = ["Athena123", "cool987", "chill98"]; 
document.getElementById('loginForm').addEventListener('submit', function(e) { e.preventDefault(); 
                                                                             var username = document.getElementById('username').value;
                                                                             var password = document.getElementById('password').value;
                                                                             var errorMsg = document.getElementById('error-msg');
                                                                             var recaptchaMsg = document.getElementById('recaptcha-msg'); // Simulate reCAPTCHA verification (you'd use the actual reCAPTCHA solution in the real world) 
                                                                             var isRecaptchaVerified = true; // Change this to false to test the error message 
                                                                             if (username === '' || password === '') { 
                                                                               errorMsg.textContent = 'Username or password is incorrect, please try again.'; 
                                                                               errorMsg.classList.remove('hidden'); recaptchaMsg.classList.add('hidden');
                                                                               // Hide reCAPTCHA message
                                                                             } 
                                                                             else if (!isRecaptchaVerified) { 
                                                                               recaptchaMsg.classList.remove('hidden'); 
                                                                               // Show reCAPTCHA message if not verified
                                                                               errorMsg.classList.add('hidden'); 
                                                                               // Hide error message 
                                                                             } 
                                                                             else if (!validUsernames.includes(username) || !validPasswords.includes(password)) { 
                                                                               errorMsg.textContent = 'Username or password is incorrect, please try again.'; 
                                                                               errorMsg.classList.remove('hidden'); 
                                                                               recaptchaMsg.classList.add('hidden'); 
                                                                               // Hide reCAPTCHA message 
                                                                             } 
                                                                             else { 
                                                                               alert('Login successful! Redirecting to your dashboard...'); window.location.href = 'redirect.html'; // Redirect to dashboard
                          
                                                              } });

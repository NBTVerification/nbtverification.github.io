// script.js 

document.getElementById('loginForm').addEventListener('submit', function(e) { e.preventDefault();
                                                                             var username = document.getElementById('username').value; var password = document.getElementById('password').value;
                                                                             var errorMsg = document.getElementById('error-msg');
                                                                             if (username === '' || password === '') { errorMsg.textContent = 'Username or password is incorrect, please try again.';
                                                                                                                      errorMsg.classList.remove('hidden');
                                                                                                                     } 
                                                                             else { 
                                                                               // Normally, you would verify the reCAPTCHA here
                                                                               // Simulate a successful reCAPTCHA submission and redirect 
                                                                               alert('ReCAPTCHA completed successfully! Redirecting to your dashboard...'); 
                                                                               window.location.href = 'redirect.html'; // Redirect to dashboard
                                                                             } });

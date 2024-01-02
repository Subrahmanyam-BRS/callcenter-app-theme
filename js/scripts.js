/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

   document.addEventListener('DOMContentLoaded',function(){
    var loginForm = document.getElementById('login');
    loginForm.addEventListener('click',function(event){
        // validation for Email
        var email = document.getElementById('inputEmail').value;
        if (email.trim() === '' || !isValidEmail(email) ) {
          alert('Please enter a valid emailadress.');
          event.preventDefault();
          return false;
        }
        // validation for password
        var password = document.getElementById('inputPassword').value;
        if (password.trim() === '') {
            alert('Please enter a password.');
            event.preventDefault();
            return false;
        }
    });
    function isValidEmail(email){
        // Simple email validation regex
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
   });
   document.getElementById('yourFormId').addEventListener('submit', function(event) {
    var password = document.getElementById('inputPassword').value;
    // Check if the password is empty
    if (password.trim() === '') {
        alert('Please enter a password.');
        event.preventDefault();
        return false;
    }
    // Check if the password contains at least one special character
    var specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharacterRegex.test(password)) {
        alert('Password must contain at least one special character.');
        event.preventDefault();
        return false;
    }
    // Additional password strength checks can be added here
    // If all checks pass, the form will be submitted
});

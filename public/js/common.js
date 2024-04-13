document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signUpForm');
    form.addEventListener('submit', function(event) {

        event.preventDefault();

        const firstName = form.querySelector('input[name="firstName"]').value.trim();
        const lastName = form.querySelector('input[name="lastName"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const mobile = form.querySelector('input[name="mobile"]').value.trim();
        const password = form.querySelector('input[name="password"]').value.trim();
        const confirmPassword = form.querySelector('input[name="confirmPassword"]').value.trim();

        // Validate First Name
        const firstNameRegex = /^[a-zA-Z]{2,60}$/;
        if (firstName === '') {
            alert('Please enter your First Name.');
            return;
        } else if (!firstNameRegex.test(firstName)) {
            alert('First Name must contain only letters and be between 2 to 60 characters.');
            return;
        }

        // Validate Last Name
        const lastNameRegex = /^[a-zA-Z]{2,60}$/;
        if (lastName === '') {
            alert('Please enter your Last Name.');
            return;
        } else if (!lastNameRegex.test(lastName)) {
            alert('Last Name must contain only letters and be between 2 to 60 characters.');
            return;
        }

        // Validate Email
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Validate Mobile No.
        const mobileRegex = /^[0-9]{10}$/;
        if (!mobileRegex.test(mobile)) {
            alert('Please enter a valid 10-digit mobile number.');
            return;
        }

        // Validate Password
        if (password === '') {
            alert('Please enter a password.');
            return;
        }
        
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (password === '') {
            alert('Please enter a password.');
            return;
        } else if (!passwordRegex.test(password)) {
            alert('Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // If all validations pass, you can submit the form or perform other actions here
        form.submit();  // Uncomment this line to submit the form
    });

    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {

        event.preventDefault();

        const email = loginForm.querySelector('input[name="email"]').value.trim();
        const password = loginForm.querySelector('input[name="password"]').value.trim();


        // Validate Email
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }


        // Validate Password
        if (password === '') {
            alert('Please enter a password.');
            return;
        }
        

        // If all validations pass, you can submit the form or perform other actions here
        loginForm.submit();  // Uncomment this line to submit the form
    });
});

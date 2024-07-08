document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation (You can add more complex validation here)
    if (email === 'admin@example.com' && password === 'password') {
        alert('Login successful!');
        // Redirect to dashboard or another page
        window.location.href = 'dashboard.html'; // Replace with actual URL
    } else {
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = 'Invalid email or password';
        errorMessage.style.display = 'block';
    }
});

// Placeholder functions for social login buttons
document.querySelector('.google-login').addEventListener('click', function() {
    alert('Google login not implemented in this demo.');
});

document.querySelector('.microsoft-login').addEventListener('click', function() {
    alert('Microsoft login not implemented in this demo.');
});

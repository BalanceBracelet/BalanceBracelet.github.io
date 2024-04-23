document.addEventListener('DOMContentLoaded', function () {
    // Setup Heart Rate Variability Chart with static data
const hrvCtx = document.getElementById('hrvGraph').getContext('2d');
const hrvChart = new Chart(hrvCtx, {
    type: 'line',
    data: {
        labels: ['12:00', '12:05', '12:10', '12:15', '12:20', '12:25'], // Example time labels
        datasets: [{
            label: 'Heart Rate Variability',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            data: [60, 65, 62, 58, 64, 60]  // Example HRV data
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Setup Respiratory Rate Chart with static data
const respiratoryCtx = document.getElementById('respiratoryGraph').getContext('2d');
const respiratoryChart = new Chart(respiratoryCtx, {
    type: 'line',
    data: {
        labels: ['12:00', '12:05', '12:10', '12:15', '12:20', '12:25'], // Example time labels
        datasets: [{
            label: 'Respiratory Rate',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            data: [15, 17, 16, 15, 14, 15]  // Example Respiratory data
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const dashboardIcon = document.getElementById('dashboardIcon');
dashboardIcon.addEventListener('click', function () {
    this.src = "icons/infinity-3.png"; // Change the source to the green icon
});

const loginForm = document.getElementById('loginForm');
const forgotPasswordLink = document.getElementById('forgotPassword');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Retrieve the values of username and password fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // You can add code here to perform login authentication
    // For demonstration purposes, let's log the values to console
    console.log('Username:', username);
    console.log('Password:', password);
});

forgotPasswordLink.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior

    // You can add code here to handle forgot password functionality
    // For demonstration purposes, let's log a message to console
    console.log('Forgot password link clicked!');
});

// Add event listener for signup form submission
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Retrieve the values of form fields
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // You can add code here to perform form validation and signup process
        // For demonstration purposes, let's log the values to console
        console.log('Full Name:', fullName);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);

        // After processing signup, you can redirect to index.html
        window.location.href = 'index.html';
    });
}
});

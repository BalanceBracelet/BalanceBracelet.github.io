


document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('hrvGraph').getContext('2d');
    const hrvChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [], // Time labels for the x-axis
            datasets: [{
                label: 'Heart Rate Variability',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                data: []  // Data points for HRV
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

    // Setup WebSocket connection
    var ws = new WebSocket('ws://localhost:8080'); // Use your server address here
    ws.onmessage = function (event) {
        var data = JSON.parse(event.data);
        if (data.type === 'hrv') {
            const now = new Date();
            hrvChart.data.labels.push(now.toLocaleTimeString());
            hrvChart.data.datasets[0].data.push(data.value);
            hrvChart.update();
        }
    };

    ws.onopen = function() {
        console.log('WebSocket connection established');
    };

    ws.onerror = function(error) {
        console.log('WebSocket Error: ' + error);
    };

    document.addEventListener('DOMContentLoaded', function () {
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
        //////////
});






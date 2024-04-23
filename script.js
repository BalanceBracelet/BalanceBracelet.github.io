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

    // Existing login and signup form handlers can remain unchanged
    const loginForm = document.getElementById('loginForm');
    const forgotPasswordLink = document.getElementById('forgotPassword');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        console.log('Username:', username);
        console.log('Password:', password);
    });

    forgotPasswordLink.addEventListener('click', function (event) {
        event.preventDefault();
        console.log('Forgot password link clicked!');
    });

    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            console.log('Full Name:', fullName);
            console.log('Email:', email);
            console.log('Password:', password);
            console.log('Confirm Password:', confirmPassword);
            window.location.href = 'index.html';
        });
    }
});

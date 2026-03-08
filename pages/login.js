export default function login() {
   return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login - Express Demo</title>
    <link rel="stylesheet" href="/css/login.css" />
</head>
<body>
    <div class="container">
        <div class="left-panel">
            <h1>Welcome back!</h1>
            <p>Login to continue to your account</p>
        </div>
        <div class="right-panel">
            <div class="login-box">
                <h2>Login</h2>
                <form id="loginForm" action="/submit" method="post">
                    <input type="text" name="username" placeholder="Enter username" required />
                    <div class="toggle-password">
                        <input type="password" id="password" name="password" placeholder="Enter Password" required />
                        <span id="togglePassword" class="toggle-password-icon">Show</span>
                    </div>
                    <button type="submit">Login</button>
                </form>
                <div class="options">
                   <a href='/'>Go to Home</a> | <a href="#">Forgot? </a> | <a href="/register">Create an account</a>
                </div>
            </div>
        </div>
    </div>
    <script>
        const togglePassword = document.getElementById('togglePassword');
        const passwordField = document.getElementById('password');

        togglePassword.addEventListener('click', function() {
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);
            this.textContent = type === 'password' ? 'Show' : 'Hide';
        });

        // simple client-side form validation example
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            if (!passwordField.value || !document.querySelector('input[name="username"]').value) {
                alert('Please fill in all fields');
                e.preventDefault();
            }
        });
    </script>
</body>
</html>`
}
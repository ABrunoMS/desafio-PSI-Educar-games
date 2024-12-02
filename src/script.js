document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'colaborador@educargames.com' && password === '123456') {
        window.location.href = 'main.html';
    } else {
        document.getElementById('error-message').textContent = 'Email ou senha inválidos!';
    }
});

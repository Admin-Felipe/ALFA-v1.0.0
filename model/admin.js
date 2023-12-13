document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginBtn').addEventListener('click', function (event) {
        event.preventDefault();

        const predefinedUsers = {
            'Sara': '12345678',
            'Eduardo': '12345678',
            'Cassio': '12345678',
            'Andre': '12345678',
            'Josi': '12345678',
            'Talita': '12345678',
        };

        const username = document.getElementById('logname').value;
        const password = document.getElementById('logpass').value;

        // Verifique as credenciais
        if (predefinedUsers.hasOwnProperty(username) && predefinedUsers[username] === password) {
            alert('Login bem-sucedido! Redirecionando para a página de administração.');
            // Altere o caminho abaixo para o caminho real da sua página de administração
            window.location.href = 'admin/loading.html';
        } else {
            alert('Falha no login. Verifique suas credenciais.');
        }
    });
});
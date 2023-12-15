document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginBtn').addEventListener('click', function (event) {
        event.preventDefault();

        const predefinedUsers = {
            'sara': '12345678',
            'eduardo': '12345678',
            'cassio': '12345678',
            'andre': '12345678',
            'josi': '12345678',
            'talita': '12345678',
        };

        const username = document.getElementById('logname').value;
        const password = document.getElementById('logpass').value;

        // Verifique as credenciais
        if (predefinedUsers.hasOwnProperty(username) && predefinedUsers[username] === password) {
            alert('Login bem-sucedido! Redirecionando para a página de administração.');

            // Construa o caminho da página de carregamento com base no nome de usuário
            const userLoadingPage = 'admin/loading_' + username.toLowerCase() + '.html';
            
            // Redirecione para a página construída
            window.location.href = userLoadingPage;
        } else {
            alert('Falha no login. Verifique suas credenciais.');
        }
    });
});
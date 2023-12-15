// Função para definir o cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

// Função para obter o valor do cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Verificar se o cookie já foi definido
var refreshedCookie = getCookie('refreshed');

if (!refreshedCookie) {
    // Se não foi definido, fazer o refresh
    setTimeout(function () {
        // Configurar o cookie para expirar em 10 minutos
        setCookie('refreshed', 'true', 10 / (24 * 60));  // 10 minutos divididos pelo número total de minutos em um dia
        // Recarregar a página
        location.reload();
    }, 2000);
}
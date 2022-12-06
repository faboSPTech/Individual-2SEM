// sessão
function validarSessao() {
    // aguardar();

    var logEmail = sessionStorage.logemail;
    var logPermissoes = sessionStorage.logpermissoes;
    var logPass = sessionStorage.logpass;


    var loginButton = document.getElementById('login');

    if (logEmail != null && logPass != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        if (loginButton != undefined) {
            loginButton.innerHTML = logEmail;
        }
        // b_usuario.innerHTML = logpass;

        // finalizarAguardar();
    } else if (logPermissoes == "111") {
        loginButton = "../dashboard.html";
    } else if (logPermissoes == "222") {
        loginButton = "../dashboardFunc.html";
    }else if (logPermissoes == "333") {
        loginButton = "../desenvolvedor.html";
    }}

// function limparSessao() {
//     // aguardar();
//     sessionStorage.clear();
//     // finalizarAguardar();
//     window.location = "../login.html";
// }

// // carregamento (loading)
// function aguardar() {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "flex";
// }

// function finalizarAguardar(texto) {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "none";

//     var divErrosLogin = document.getElementById("div_erros_login");
//     if (texto) {
//         divErrosLogin.innerHTML = texto;
//     }
// }


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}


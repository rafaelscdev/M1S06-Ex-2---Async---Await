function getUserInfo() {
    const user = {
        nome: "Rafael",
        idade: 31,
        email: "exemplo@gmail.com"
    };

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(user);
        }, 2000); // Simula uma consulta assíncrona que demora 2 segundos
    });
}

function playGetUser() {
    getUserInfo()
        .then(retorno => {
            console.log(retorno);
        })
        .catch(error => {
            console.error("Erro ao obter informações do usuário:", error);
        });
}

playGetUser();

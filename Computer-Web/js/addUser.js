function addUser(){
    let nameUsers = document.getElementById(`input-nameUser`).value;
    let passwordUser = document.getElementById(`input-password`).value;

    let userData = {
        nameUser: nameUsers,
        password: passwordUser
    };
    
    let url = 'http://localhost:8080/Computer/rest/ManagementUser/createUser';
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        console.log('Respuesta del servidor:', response);
        if(!response.ok){
            throw new Error('Ocurrió un error en la respuesta del servidor: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        alert("Se agregó el registro.");
        window.location.href = "./menu.html";
    })
    .catch(error => {
        console.error('Ocurrió un error con la operación: ', error);
    });
}

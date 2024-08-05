function addSeller(){
    let nameSeller = document.getElementById(`input-name`).value;
    let companySeller = document.getElementById(`input-company`).value;
    let emailSeller = document.getElementById(`input-email`).value;

    let sellerData = {
        name: nameSeller,
        company: companySeller,
        email: emailSeller
    };
    
    let url = 'http://localhost:8080/Computer/rest/ManagementSeller/createSeller';
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sellerData)
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

function addComputer(){
    let referenceComp = document.getElementById(`input-reference`).value;
    let brandComp = document.getElementById(`input-brand`).value;
    let modelComp = document.getElementById(`input-model`).value;
    let opSystemComp = document.getElementById(`input-opSystem`).value;
    let processorComp = document.getElementById(`input-processor`).value;
    let ramMemoryComp = document.getElementById(`input-ramMemory`).value;

    let computerData = {
        reference: referenceComp,
        brand: brandComp,
        model: modelComp,
        opSystem: opSystemComp,
        processor: processorComp,
        ramMemory: ramMemoryComp
    };

   

    
    let url = 'http://localhost:8080/ManagementComputer/rest/ManagementComputer/createComputer';
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(computerData)
    })
    .then(response => {
        if(!response.ok){
            throw new Error('Ocurrió un error en la respuesta del servidor' + response)
        }
        return response.json();
    })
    .then (data =>{
        alert("Se agregó el registro.");
        window.location.href = "./menu.html";
    
    })
    .catch(error =>{
        console.error('Ocurrio un error con la operacion ', error);
    })
}


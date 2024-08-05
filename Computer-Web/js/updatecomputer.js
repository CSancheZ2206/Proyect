document.addEventListener('DOMContentLoaded', () => {
    const reference = new URLSearchParams(window.location.search).get('reference');
    if (!reference) {
        document.getElementById('message').textContent = 'No se encontró la referencia del computador.';
        return;
    }

    fetch(`http://localhost:8080/Computer/rest/ManagementComputer/getComputers`)
        .then(response => response.json())
        .then(data => {
            const computer = data.find(comp => comp.reference === reference);
            if (!computer) {
                document.getElementById('message').textContent = 'Computador no encontrado.';
                return;
            }

            document.getElementById('reference').value = computer.reference;
            document.getElementById('brand').value = computer.brand || '';
            document.getElementById('model').value = computer.model || '';
            document.getElementById('opSystem').value = computer.opSystem || '';
            document.getElementById('processor').value = computer.processor || '';
            document.getElementById('ramMemory').value = computer.ramMemory || '';
        })
        .catch(error => console.error('Error:', error));

    document.getElementById('updateForm').addEventListener('submit', (event) => {
        event.preventDefault();

        const computerDTO = {
            reference: document.getElementById('reference').value,
            brand: document.getElementById('brand').value,
            model: document.getElementById('model').value,
            opSystem: document.getElementById('opSystem').value,
            processor: document.getElementById('processor').value,
            ramMemory: document.getElementById('ramMemory').value
        };

        fetch('http://localhost:8080/Computer/rest/ManagementComputer/updateComputerAttribute', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(computerDTO)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la actualización');
                }
                return response.json();
            })
            .then(() => {
                document.getElementById('message').textContent = 'Computador actualizado exitosamente.';
                window.location.href = "./menu.html";
            })
            .catch(error => {
                document.getElementById('message').textContent = 'Error al actualizar el computador.';
                console.error('Error:', error);
            });
    });
});

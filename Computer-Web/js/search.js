document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const reference = document.getElementById('reference').value;

    fetch(`http://localhost:8080/Computer/rest/ManagementComputer/getComputers`)
        .then(response => response.json())
        .then(data => {
            const computer = data.find(comp => comp.reference === reference);
            const resultDiv = document.getElementById('result');
            if (!computer) {
                resultDiv.textContent = 'Computador no encontrado.';
                return;
            }

            resultDiv.innerHTML = `
                <p><strong>Referencia:</strong> ${computer.reference}</p>
                <p><strong>Marca:</strong> ${computer.brand}</p>
                <p><strong>Modelo:</strong> ${computer.model}</p>
                <p><strong>Sistema Operativo:</strong> ${computer.opSystem}</p>
                <p><strong>Procesador:</strong> ${computer.processor}</p>
                <p><strong>Memoria RAM:</strong> ${computer.ramMemory}</p>
            `;
        })
        .catch(error => {
            const resultDiv = document.getElementById('result');
            resultDiv.textContent = 'Error al buscar el computador.';
            console.error('Error:', error);
        });
});

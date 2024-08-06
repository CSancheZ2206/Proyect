document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;

    fetch(`http://localhost:8080/Computer/rest/ManagementSeller/getSeller`)
        .then(response => response.json())
        .then(data => {
            const seller = data.find(comp => comp.name === name);
            const resultDiv = document.getElementById('result');
            if (!seller) {
                resultDiv.textContent = 'Vendedor no encontrado.';
                return;
            }

            resultDiv.innerHTML = `
                <p><strong>Nombre:</strong> ${seller.name}</p>
                <p><strong>Compañia:</strong> ${seller.company}</p>
                <p><strong>Email:</strong> ${seller.email}</p>
            `;
        })
        .catch(error => {
            const resultDiv = document.getElementById('result');
            resultDiv.textContent = 'Error al buscar el vendedor.';
            console.error('Error:', error);
        });
});

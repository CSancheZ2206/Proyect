document.addEventListener('DOMContentLoaded', () => {
    const name = new URLSearchParams(window.location.search).get('nameUser');
    if (!name) {
        document.getElementById('message').textContent = 'No se encontró el nombre del vendedor.';
        return;
    }

    fetch(`http://localhost:8080/Computer/rest/ManagementSeller/getSeller`)
        .then(response => response.json())
        .then(data => {
            const seller = data.find(sel => sel.name === name);
            if (!seller) {
                document.getElementById('message').textContent = 'Vendedor no encontrado.';
                return;
            }

            document.getElementById('name').value = seller.name;
            document.getElementById('company').value = seller.company || '';
            document.getElementById('email').value = seller.email || '';
        })
        .catch(error => console.error('Error:', error));

    document.getElementById('updateForm').addEventListener('submit', (event) => {
        event.preventDefault();

        const sellerDTO = {
            name: document.getElementById('name').value,
            company: document.getElementById('company').value,
            email: document.getElementById('email').value
        };

        fetch('http://localhost:8080/Computer/rest/ManagementSeller/updateSellerAttribute', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sellerDTO)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la actualización');
                }
                return response.json();
            })
            .then(() => {
                document.getElementById('message').textContent = 'Vendedor actualizado exitosamente.';
                window.location.href = "./menu.html";
            })
            .catch(error => {
                document.getElementById('message').textContent = 'Error al actualizar el vendedor.';
                console.error('Error:', error);
            });
    });
});

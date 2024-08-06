document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nameUser = document.getElementById('nameUser').value;

    fetch(`http://localhost:8080/Computer/rest/ManagementUser/getUser`)
        .then(response => response.json())
        .then(data => {
            const user = data.find(comp => comp.nameUser === nameUser);
            const resultDiv = document.getElementById('result');
            if (!user) {
                resultDiv.textContent = 'Usuario no encontrado.';
                return;
            }

            resultDiv.innerHTML = `
                <p><strong>Usuario:</strong> ${user.nameUser}</p>
                <p><strong>Contraseña:</strong> ${user.password}</p>
            `;
        })
        .catch(error => {
            const resultDiv = document.getElementById('result');
            resultDiv.textContent = 'Error al buscar el usuario.';
            console.error('Error:', error);
        });
});

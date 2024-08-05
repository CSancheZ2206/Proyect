document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('.nav-link');

    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            menuLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            loadContent();
        });
    });
});

function loadContent() {
    const activeLink = document.querySelector('.nav-link.active');
    if (!activeLink) return;

    const id = activeLink.id;

    switch (id) {
        case 'button-computers':
            loadComputers();
            break;
        case 'button-sellers':
            loadSellers();
            break;
        case 'button-users':
            loadUsers();
            break;
        default:
            break;
    }
}

function loadComputers() {
    const content = document.getElementById('content');
    clearContent(content);

    const addCard = document.createElement('div');
    addCard.className = 'card';
    const addCardBody = document.createElement('div');
    addCardBody.className = 'card-body';
    const addButton = document.createElement('a');
    addButton.className = 'btn btn-primary';
    addButton.href = './addcomputer.html';
    const addImg = document.createElement('img');
    addImg.src = 'resource/icons/agregar-computador.png';
    addButton.appendChild(addImg);
    const addTitle = document.createElement('h3');
    addTitle.textContent = '¡Puedes agregar nuevos computadores!';
    addCardBody.appendChild(addButton);
    addCardBody.appendChild(addTitle);
    addCard.appendChild(addCardBody);
    content.appendChild(addCard);

    fetch('http://localhost:8080/Computer/rest/ManagementComputer/getComputers')
        .then(response => response.json())
        .then(data => {
            data.forEach(computer => {
                const card = document.createElement('div');
                card.className = 'card';

                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                const title = document.createElement('h2');
                title.className = 'card-title';
                title.textContent = computer.reference;

                const brand = document.createElement('p');
                brand.className = 'card-text';
                brand.textContent = `Marca: ${computer.brand}`;

                const model = document.createElement('p');
                model.className = 'card-text';
                model.textContent = `Modelo: ${computer.model}`;

                const opSystem = document.createElement('p');
                opSystem.className = 'card-text';
                opSystem.textContent = `Sistema Operativo: ${computer.opSystem}`;

                const processor = document.createElement('p');
                processor.className = 'card-text';
                processor.textContent = `Procesador: ${computer.processor}`;

                const ramMemory = document.createElement('p');
                ramMemory.className = 'card-text';
                ramMemory.textContent = `Memoria RAM: ${computer.ramMemory}`;

                const btnDelete = document.createElement('button');
                btnDelete.className = 'btn-danger';
                btnDelete.textContent = 'Eliminar';
                btnDelete.setAttribute('data-reference', computer.reference);
                btnDelete.addEventListener('click', function () {
                    deleteComputer(this.getAttribute('data-reference'));
                });

                const btnUpdate = document.createElement('a');
                btnUpdate.className = 'btn-success margin-button';
                btnUpdate.textContent = 'Actualizar';
                btnUpdate.href = '/updatecomputer.html';
                btnUpdate.setAttribute('data-computer', JSON.stringify(computer));

                cardBody.appendChild(title);
                cardBody.appendChild(brand);
                cardBody.appendChild(model);
                cardBody.appendChild(opSystem);
                cardBody.appendChild(processor);
                cardBody.appendChild(ramMemory);
                cardBody.appendChild(btnDelete);
                cardBody.appendChild(btnUpdate);

                card.appendChild(cardBody);
                content.appendChild(card);
            });
        })
        .catch(error => console.error('Error:', error));
}

function loadSellers() {
    const content = document.getElementById('content');
    clearContent(content);

    const addCard = document.createElement('div');
    addCard.className = 'card';
    const addCardBody = document.createElement('div');
    addCardBody.className = 'card-body';
    const addButton = document.createElement('a');
    addButton.className = 'btn btn-primary';
    addButton.href = './addseller.html';
    const addImg = document.createElement('img');
    addImg.src = 'resource/icons/agregar-vendedor.png';
    addButton.appendChild(addImg);
    const addTitle = document.createElement('h3');
    addTitle.textContent = '¡Puedes agregar nuevos vendedores!';
    addCardBody.appendChild(addButton);
    addCardBody.appendChild(addTitle);
    addCard.appendChild(addCardBody);
    content.appendChild(addCard);

    fetch('http://localhost:8080/Computer/rest/ManagementSeller/getSeller')
        .then(response => response.json())
        .then(data => {
            data.forEach(seller => {
                const card = document.createElement('div');
                card.className = 'card';

                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                const name = document.createElement('h2');
                name.className = 'card-title';
                name.textContent = seller.name;

                const company = document.createElement('p');
                company.className = 'card-text';
                company.textContent = `Compañía: ${seller.company}`;

                const email = document.createElement('p');
                email.className = 'card-text';
                email.textContent = `Email: ${seller.email}`;

                const btnDelete = document.createElement('button');
                btnDelete.className = 'btn-danger';
                btnDelete.textContent = 'Eliminar';
                btnDelete.setAttribute('data-name', seller.name);
                btnDelete.addEventListener('click', function () {
                    deleteSeller(this.getAttribute('data-name'));
                });

                const btnUpdate = document.createElement('a');
                btnUpdate.className = 'btn-success margin-button';
                btnUpdate.textContent = 'Actualizar';
                btnUpdate.href = '/updateseller.html';
                btnUpdate.setAttribute('data-seller', JSON.stringify(seller));

                cardBody.appendChild(name);
                cardBody.appendChild(company);
                cardBody.appendChild(email);
                cardBody.appendChild(btnDelete);
                cardBody.appendChild(btnUpdate);

                card.appendChild(cardBody);
                content.appendChild(card);
            });
        })
        .catch(error => console.error('Error:', error));
}

function loadUsers() {
    const content = document.getElementById('content');
    clearContent(content);

    const addCard = document.createElement('div');
    addCard.className = 'card';
    const addCardBody = document.createElement('div');
    addCardBody.className = 'card-body';
    const addButton = document.createElement('a');
    addButton.className = 'btn btn-primary';
    addButton.href = './adduser.html';
    const addImg = document.createElement('img');
    addImg.src = 'resource/icons/agregar-usuario.png';
    addButton.appendChild(addImg);
    const addTitle = document.createElement('h3');
    addTitle.textContent = '¡Puedes agregar nuevos usuarios!';
    addCardBody.appendChild(addButton);
    addCardBody.appendChild(addTitle);
    addCard.appendChild(addCardBody);
    content.appendChild(addCard);

    fetch('http://localhost:8080/Computer/rest/ManagementUser/getUser')
        .then(response => response.json())
        .then(data => {
            data.forEach(user => {
                const card = document.createElement('div');
                card.className = 'card';

                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                const nameUser = document.createElement('p');
                nameUser.className = 'card-text';
                nameUser.textContent = `Usuario: ${user.nameUser}`;

                const password = document.createElement('p');
                password.className = 'card-text';
                password.textContent = `Contraseña: ${user.password}`;

                const btnDelete = document.createElement('button');
                btnDelete.className = 'btn-danger';
                btnDelete.textContent = 'Eliminar';
                btnDelete.setAttribute('data-nameUser', user.nameUser);
                btnDelete.addEventListener('click', function () {
                    deleteUser(this.getAttribute('data-nameUser'));
                });

                cardBody.appendChild(nameUser);
                cardBody.appendChild(password);
                cardBody.appendChild(btnDelete);

                card.appendChild(cardBody);
                content.appendChild(card);
            });
        })
        .catch(error => console.error('Error:', error));
}

function deleteComputer(reference) {
    fetch(`http://localhost:8080/Computer/rest/ManagementComputer/deleteComputer?referenceComputer=${reference}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la eliminación');
            }
            return response.json();
        })
        .then(() => {
            alert('Computador eliminado');
            loadComputers();
        })
        .catch(error => console.error('Error:', error));
}

function deleteSeller(name) {
    fetch(`http://localhost:8080/Computer/rest/ManagementSeller/deleteSeller?nameSeller=${name}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la eliminación');
            }
            return response.json();
        })
        .then(() => {
            alert('Vendedor eliminado');
            loadSellers();
        })
        .catch(error => console.error('Error:', error));
}

function deleteUser(nameUser) {
    fetch(`http://localhost:8080/Computer/rest/ManagementUser/deleteUser?nameUser=${nameUser}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la eliminación');
            }
            return response.json();
        })
        .then(() => {
            alert('Usuario eliminado');
            loadUsers();
        })
        .catch(error => console.error('Error:', error));
}

function clearContent(content) {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

loadComputers();

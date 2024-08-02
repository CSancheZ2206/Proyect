document.addEventListener('DOMContentLoaded', function (){
    const menuLinks = document.querySelectorAll('.nav-link');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(){
            menuLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

document.getElementById('button-books').addEventListener('click', function(event){
    alert('¡Botón clickeado!');
});

document.getElementById('button-borrow').addEventListener('click', function(event){
    event.preventDefault();
    alert('¡Botón clickeado!');
});

function loadBooks(){
    const cardAdd = document.createElement('div');
        cardAdd.className = 'card';

        const cardBodkAdd = document.createElement('div');
        cardBodkAdd.className = 'card-body';

        const btnAdd = document.createElement('a');
        btnAdd.className = 'btn btn-primary';
        btnAdd.href = './addbook.html';

        const imgAdd = document.createElement('img');
        imgAdd.scr = 'resource/icons/agregar-libro.png';

        const lblAdd = document.createElement('h3');
        lblAdd.textContent = 

    fetch('http://localhost:8080/Library/rest/ManagementLibrary/getBooks')
    .then(response => response.json())
    .then((data) =>{
        const content = document.getElementById('content');
        data.forEach(book => {
            const card = document.createElement('div');
            card.className = 'card';

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            const title = document.createElement('h2');
            title.className = 'card-title'; 
            title.textContent = book.name;

            const author = document.createElement('p');
            author.className = 'card-text'; 
            author.textContent = `Autor: ${book.author}`;

            const genre = document.createElement('p');
            genre.className = 'card-text'; 
            genre.textContent = `Género: ${book.genre}`;

            const publisher = document.createElement('p');
            publisher.className = 'card-text'; 
            publisher.textContent = `Editorial: ${book.publisher}`;

            const pageQuantity = document.createElement('p');
            pageQuantity.className = 'card-text'; 
            pageQuantity.textContent = `Páginas: ${book.pageQuantity}`;

            const yearPublish = document.createElement('p');
            yearPublish.className = 'card-text'; 
            yearPublish.textContent = `Año de Publicación: ${book.yearPublish}`;

            const btnEliminar = document.createElement('button');
            btnEliminar.className= 'btn-danger';
            btnEliminar.id = `btn-delete-${book.code}`;
            btnEliminar.textContent = `Eliminar`;
            const bookCode = book.code;
            btnEliminar.setAttribute('data-code', bookCode);

            btnEliminar.addEventListener('click', function() {
                const bookCode = this.getAttribute('data-code');
                deleteBookById(bookCode);
            });

            const btnActualizar = document.createElement('a');
            btnActualizar.className = 'btn-success margin-button';
            btnActualizar.id = `btn-update-${book.code}`;
            btnActualizar.textContent = `Actualizar`;

            btnActualizar.addEventListener('click', function() {
                localStorage.setItem("bookData", JSON.stringify(book));
                window.location.href = "/updatepage.html";
            });

            cardBody.appendChild(title);
            cardBody.appendChild(author);
            cardBody.appendChild(genre);
            cardBody.appendChild(publisher);
            cardBody.appendChild(pageQuantity);
            cardBody.appendChild(yearPublish);
            cardBody.appendChild(btnEliminar);
            cardBody.appendChild(btnActualizar);

            card.appendChild(cardBody);
            content.appendChild(card);
        });
    })
    .catch(error => console.error('Error:', error));
}

function deleteBookById(code){
    let url = 'http://localhost:8080/Library/rest/ManagementLibrary/deleteBook?codeBook=' + code;
    fetch(url, {
        method: 'DELETE',
    })
    .then(response => {
        if(!response.ok) {
            throw new Error('Ocurrió un error en la respuesta del servidor ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        alert("Se eliminó el registro");
        clearContent();
        loadBooks();
    })
    .catch(error => {
        console.error('Ocurrió el siguiente error en la operación:', error);
    });
}

function clearContent(){
    const content = document.getElementById('content');
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
}

loadBooks();

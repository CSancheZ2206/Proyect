document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll(".nav-link");
    menuLinks.forEach(link => {
        link.addEventListener("click", function() {
            menuLinks.forEach(item => item.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

document.getElementById("button-books").addEventListener("click", function(event) {
    alert("Boton Libro");
});

document.getElementById("button-borrow").addEventListener("click", function(event) {
    alert("Boton Prestamo");
});

function loadBooks() {
    fetch("http://localhost:8080/Library/rest/ManagementLibrary/getBooks")
    .then(response => response.json())
    .then((data) => {
        const content = document.getElementById("content");
        data.forEach(book => {
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            const title = document.createElement("h2");
            title.className = ("card-title");
            title.textContent = book.name;

            const author = document.createElement("p");
            author.className = ("card-text");
            author.textContent = `Autor: ${book.author}`;

            const genre = document.createElement("p");
            author.className = ("card-text");
            author.textContent = `Genero: ${book.genre}`;

            const publisher = document.createElement("p");
            publisher.className = ("card-text");
            publisher.textContent = `Editorial: ${book.publisher}`;

            const pageQuantity = document.createElement("p");
            pageQuantity.className = ("card-text");
            pageQuantity.textContent = `Paginas: ${book.pageQuantity}`;

            const yearPublisher = document.createElement("p");
            yearPublisher.className = ("card-text");
            yearPublisher.textContent = `Año de publicación: ${book.yearPublisher}`;

            cardBody.appendChild(title);
            cardBody.appendChild(author);
            cardBody.appendChild(genre);
            cardBody.appendChild(publisher);
            cardBody.appendChild(pageQuantity);
            cardBody.appendChild(yearPublisher);

            cardBody.appendChild(cardBody);

            content.appendChild(card);
        })
    })
    .catch(error => console.error("Error:", error));
}

loadBooks();
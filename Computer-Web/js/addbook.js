function addBook(){
    let codeBook = document.getElementById(`input-code-book`).value;
    let nameBook = document.getElementById(`input-name-book`).value;
    let authorBook = document.getElementById(`input-author-book`).value;
    let genreBook = document.getElementById(`input-genre-book`).value;
    let yearPublish = document.getElementById(`input-year-publish`).value;
    let pageQuantity = document.getElementById(`input-page-quantity`).value;
    let publisherBook = document.getElementById(`input-publisher-book`).value;

    let bookData = {
        code: codeBook,
        name: nameBook,
        author: authorBook,
        genre: genreBook,
        yearPublish: yearPublish,
        pageQuantity: pageQuantity,
        publisher: publisherBook
    };

   

    
    let url = 'http://localhost:8080/Library/rest/ManagementLibrary/createBook';
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookData)
    })
    .then(response => {
        if(!response.ok){
            throw new Error('Ocurrió un error en la respuesta del servidor' + response)
        }
        return response.json();
    })
    .then (data =>{
        alert("Se agregó el registro.");
        window.location.href = "./dashboard.html";
    
    })
    .catch(error =>{
        console.error('Ocurrio un error con la operacion ', error);
    })
}


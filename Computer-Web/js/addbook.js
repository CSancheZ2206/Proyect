function addbook() {
    let codeBook = document.getElementById(intup1).value;
    let nameBook = document.getElementById(input2).value;
    let authorBook = document.getElementById(input3).value;
    let genreBook = document.getElementById(input4).value;
    let yearBook = document.getElementById(input7).value;
    let pageQuantityBook = document.getElementById(input5).value;
    let publisherBook = document.getElementById(input6).value;

    let bookdta = {
        code: codeBook,
        name: nameBook,
        author: authorBook,
        genre: genreBook,
        yearPublish: yearBook,
        ppageQuantity: pageQuantityBook,
        publisher: publisherBook
    };

    let url = "http://localhost:8080/Library/rest/ManagementLibrary/createBook";
    fetch(url , {
        method: 'POST',
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(bookdta)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Ocurrio un error " + response.status);
    }
    return response.json();
})
.then(data => {
    alert("Se agrego el registro");
    window.location.href = "./dashboard.html";
})
.catch(error => {
    console.error("Ocurrio el siguiente error con la operación: ", error);
});
}
console.log('welcome to SSK library ');


class Book{
    constructor(name , author , type){
        this.name = name ;
        this.author = author;
        this.type = type;
    }
}


// display 
class Display{

    add(book){
        let addingnewhtml = document.getElementById('tableBody')
        addingnewhtml.innerHTML += `  <thead>
                                <tr>
                                    <th scope="col">${book.name}</th>
                                    <th scope="col">${book.author}</th>
                                    <th scope="col">${book.type}</th>
                                </tr>
                            </thead>
        
                        `
    }

    clear(){
        let libraryForm = document.getElementById('libraryForm')
        libraryForm.reset()
    }

    valide(book){
        if(book.name.length < 2 || book.author.length < 2 ){
            return false
        }
        else{
            return true
        }
    }

    show(type, displayMessage) {
        console.log(type);
        let message = document.getElementById('message');
        let boldText;
        if(type==='success'){
            boldText = 'Success';
        }
        else{
            boldText = 'Error!';
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${boldText}:</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>`;
        setTimeout(function () {
            message.innerHTML = ''
        }, 5000);
    
    }
}



// event listner

let libraryForm = document.getElementById('libraryForm')
libraryForm.addEventListener('submit', libraryFormSubmit)

function libraryFormSubmit(e){
    e.preventDefault()
    console.log('form has been submitted');

    let name = document.getElementById('bookName').value
    let author = document.getElementById('author').value

    let fiction = document.getElementById('fiction')
    let programming = document.getElementById('programming')
    let cooking = document.getElementById('cooking')

    let type;

    if(fiction.checked){
        type = fiction.value
    }
    else if(programming.checked){
        type = programming.value
    }
    else if(cooking.checked){
        type = cooking.value
    }

    let book = new Book(name , author , type)
    console.log(book);

    let display = new Display()

    if(display.valide(book)){

        display.add(book)
        display.clear()
        display.show('success', ' your book has been added to the library ')
    }
    else{
        display.show('danger', 'sorry this is not a valide book')
    }


    
}








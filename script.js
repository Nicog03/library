class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}

let library = []

function createForm() {
    let form = document.createElement('form')
    
    //close button
    let closeButton = document.createElement('button')
    closeButton.setAttribute('type', 'button')
    closeButton.textContent = '×'

    closeButton.onclick = () => {
        form.remove()
    }

    //title input segment
    let titleDiv = document.createElement('div')
    let bookTitleLabel = document.createElement('label')
    bookTitleLabel.setAttribute('for', 'title-input')
    bookTitleLabel.textContent = 'Book title'
    
    let bookTitleInput = document.createElement('input')
    bookTitleInput.setAttribute('id', 'title-input')
    bookTitleInput.setAttribute('placeholder', ' ')
    
    //author input segment
    let authorDiv = document.createElement('div')
    let bookAuthorLabel = document.createElement('label')
    bookAuthorLabel.setAttribute('for', 'author-input')
    bookAuthorLabel.textContent = 'Book author'
    
    let bookAuthorInput = document.createElement('input')
    bookAuthorInput.setAttribute('id', 'author-input')
    bookAuthorInput.setAttribute('placeholder', ' ')
    
    //pages input segment
    let pagesDiv = document.createElement('div')
    let bookPagesLabel = document.createElement('label')
    bookPagesLabel.setAttribute('for', 'pages-input')
    bookPagesLabel.textContent = 'Number of pages'
    
    let bookPagesInput = document.createElement('input')
    bookPagesInput.setAttribute('id', 'pages-input')
    bookPagesInput.setAttribute('placeholder', ' ')
    
    //read input segment
    let readDiv = document.createElement('div')
    let readStatusLabel = document.createElement('label')
    readStatusLabel.setAttribute('for', 'read-input')
    readStatusLabel.textContent = 'Read'

    let readStatusInput = document.createElement('button')
    readStatusInput.setAttribute('type', 'button')
    readStatusInput.setAttribute('id', 'read-input')
    
    let readStatus = false;
    readStatusInput.onclick = () => {
         if (readStatus) {
            readStatus = false
            readStatusInput.style.background = 'white'
        } else {
            readStatus = true
            readStatusInput.style.background = 'black'
        }
    }

    //button segment
    let createButton = document.createElement('button')
    createButton.setAttribute('type', 'button')
    createButton.textContent = 'Create Book'
    
    createButton.onclick = () => {
        library.push(new Book(bookTitleInput.value, bookAuthorInput.value, bookPagesInput.value, readStatus))

        createBookCard()
        form.remove()
    }
    
    //appending everything to page
    body.appendChild(form)
    
    form.appendChild(closeButton)
    form.appendChild(titleDiv)
    titleDiv.appendChild(bookTitleInput)
    titleDiv.appendChild(bookTitleLabel)
    form.appendChild(authorDiv)
    authorDiv.appendChild(bookAuthorInput)
    authorDiv.appendChild(bookAuthorLabel)
    form.appendChild(pagesDiv)
    pagesDiv.appendChild(bookPagesInput)
    pagesDiv.appendChild(bookPagesLabel)
    form.appendChild(readDiv)
    readDiv.appendChild(readStatusInput)
    readDiv.appendChild(readStatusLabel)
    form.appendChild(createButton)
}

function createBookCard() {

    let container = document.createElement('div')
    let bookTitle = document.createElement('h3')
    let bookAuthor = document.createElement('h4')
    let bookPages = document.createElement('p')
    let bookReadStatus = document.createElement('p')

    for (let i=0; i < library.length; i++) {
        bookTitle.textContent = library[i].title
        bookAuthor.textContent = library[i].author
        bookPages.textContent = library[i].pages
        bookReadStatus.textContent = library[i].read

        bookReadStatus.onclick = () => {
            library[i].read ?  library[i].read = false : 
            library[i].read = true

            library[i].read ? bookReadStatus.textContent = 'true' :
            bookReadStatus.textContent = 'false'
        }

        container.appendChild(bookTitle)
        container.appendChild(bookAuthor)
        container.appendChild(bookPages)
        container.appendChild(bookReadStatus)

        body.appendChild(container)
    }

    let oldButton = document.querySelector('button')
    oldButton.remove()

    let button = document.createElement('button')
    button.setAttribute('type', 'button')
    button.textContent = '+'
    body.appendChild(button)

    button.onclick = () => {
        !document.querySelector('form') ? createForm() : null
    }
} 

const body = document.querySelector('body')
const button = document.querySelector('button')

button.onclick = () => {
    !document.querySelector('form') ? createForm() : null
}
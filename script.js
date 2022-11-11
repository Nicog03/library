const button = document.querySelector('button')
const body = document.querySelector('body')

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
    
    
    let titleDiv = document.createElement('div')
    let bookTitleLabel = document.createElement('label')
    bookTitleLabel.setAttribute('for', 'title-input')
    bookTitleLabel.textContent = 'Book title'
    let bookTitleInput = document.createElement('input')
    bookTitleInput.setAttribute('id', 'title-input')
    
    let authorDiv = document.createElement('div')
    let bookAuthorLabel = document.createElement('label')
    bookAuthorLabel.setAttribute('for', 'author-input')
    bookAuthorLabel.textContent = 'Book author'
    let bookAuthorInput = document.createElement('input')
    bookAuthorInput.setAttribute('id', 'author-input')
    
    let pagesDiv = document.createElement('div')
    let bookPagesLabel = document.createElement('label')
    bookPagesLabel.setAttribute('for', 'pages-input')
    bookPagesLabel.textContent = 'Number of pages'
    let bookPagesInput = document.createElement('input')
    bookPagesInput.setAttribute('id', 'pages-input')

    let readDiv = document.createElement('div')
    let bookReadLabel = document.createElement('label')
    bookReadLabel.setAttribute('for', 'read-input')
    bookReadLabel.textContent = 'Read'
    let bookReadInput = document.createElement('input')
    bookReadInput.setAttribute('type', 'checkbox')
    bookReadInput.setAttribute('id', 'read-input')

    let createButton = document.createElement('button')
    createButton.textContent = 'Create Book'

    body.appendChild(form)

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
    readDiv.appendChild(bookReadInput)
    readDiv.appendChild(bookReadLabel)
    form.appendChild(createButton)
}

button.onclick = () => {createForm()}
class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}

const xSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>'

let library = []
let body = document.querySelector('body')

function createForm() {
    let form = document.createElement('form')
    
    let background = document.createElement('div')
    background.classList.add('background')

    setTimeout( () => {
        background.classList.add('active')
    }, 1)

    //close button
    let closeButton = document.createElement('button')
    closeButton.setAttribute('type', 'button')
    closeButton.textContent = '×'

    closeButton.onclick = () => {

        background.classList.remove('active')

        setTimeout( () => {
            background.remove()
            form.remove()
        }, 100)
    }

//title input segment
    let titleDiv = document.createElement('div')
    let bookTitleLabel = document.createElement('label')
    bookTitleLabel.setAttribute('for', 'title-input')
    bookTitleLabel.textContent = 'Book title'
    
    let bookTitleInput = document.createElement('input')
    bookTitleInput.setAttribute('id', 'title-input')
    bookTitleInput.setAttribute('placeholder', ' ')
    bookTitleInput.setAttribute('required', '')
    
//author input segment
    let authorDiv = document.createElement('div')
    let bookAuthorLabel = document.createElement('label')
    bookAuthorLabel.setAttribute('for', 'author-input')
    bookAuthorLabel.textContent = 'Book author'
    
    let bookAuthorInput = document.createElement('input')
    bookAuthorInput.setAttribute('id', 'author-input')
    bookAuthorInput.setAttribute('placeholder', ' ')
    bookAuthorInput.setAttribute('required', '')
    
//pages input segment
    let pagesDiv = document.createElement('div')
    let bookPagesLabel = document.createElement('label')
    bookPagesLabel.setAttribute('for', 'pages-input')
    bookPagesLabel.textContent = 'Number of pages'
    
    let bookPagesInput = document.createElement('input')
    bookPagesInput.setAttribute('type', 'tel')
    bookPagesInput.setAttribute('pattern', '[0-9]')
    bookPagesInput.setAttribute('id', 'pages-input')
    bookPagesInput.setAttribute('placeholder', ' ')
    bookPagesInput.setAttribute('required', '')
    
//read input segment
    let readDiv = document.createElement('div')
    let readStatusLabel = document.createElement('label')
    readStatusLabel.setAttribute('for', 'read-input')
    readStatusLabel.textContent = 'Have you read it?'

    let readStatusInput = document.createElement('button')
    readStatusInput.textContent = 'no'
    readStatusInput.setAttribute('type', 'button')
    readStatusInput.setAttribute('id', 'read-input')
    
    let readStatus = false;
    readStatusInput.onclick = () => {
         if (readStatus) {
            readStatusInput.textContent = 'no'
            readStatus = false
        } else {
            readStatusInput.textContent = 'yes'
            readStatus = true
        }
    }

//button segment
    let createButton = document.createElement('button')
    createButton.textContent = 'Create Book'
    
    createButton.onclick = () => {

        if (!bookTitleInput.value || !bookAuthorInput.value || !bookPagesInput.value || isNaN(bookPagesInput.value)) {
            return
        }
            library.push(new Book(bookTitleInput.value, bookAuthorInput.value, bookPagesInput.value, readStatus))
    
            createBookCard()
            background.remove()
            form.remove()

    }
    
    //appending everything to page
    
    body.appendChild(background)
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
    readDiv.appendChild(readStatusLabel)
    readDiv.appendChild(readStatusInput)
    form.appendChild(createButton)
}

function createBookCard() {
    
    let allBookCards = document.querySelectorAll('main > div')
        allBookCards.forEach( card => {card.remove()} )

    for (let i=0; i < library.length; i++) {
        
        let container = document.createElement('div')
        let topDiv = document.createElement('div')
        let bottomSection = document.createElement('div')
        
        let bookTitle = document.createElement('h3')
        bookTitle.textContent = library[i].title
        
        let bookAuthor = document.createElement('h4')
        bookAuthor.textContent = library[i].author
        
        let bookPages = document.createElement('p')
        bookPages.textContent = library[i].pages + ' pgs.'
        
        let deleteBookButton = document.createElement('button')
        deleteBookButton.innerHTML = xSVG
        
        let bookReadStatus = document.createElement('button')
        bookReadStatus.setAttribute('type', 'button')
        
        library[i].read ? bookReadStatus.textContent = 'read' :
        bookReadStatus.textContent = 'not read'

        container.classList.remove('read-style')
        container.classList.remove('not-read-style')

        library[i].read ? container.classList.add('read-style') :
        container.classList.add('not-read-style')
        
        main.appendChild(container)
        
        container.appendChild(topDiv)
        topDiv.appendChild(bookTitle)
        topDiv.appendChild(deleteBookButton)
        container.appendChild(bookAuthor)
        container.appendChild(bottomSection)
        bottomSection.appendChild(bookReadStatus)
        bottomSection.appendChild(bookPages)

    //functions

        bookReadStatus.onmouseenter = () => {
            container.classList.add('hover')
        }

        bookReadStatus.onmouseleave = () => {
            container.classList.remove('hover')
        }

        bookReadStatus.onclick = () => {
            container.classList.add('click')
            setTimeout(() => {container.classList.remove('click')}, 200)

            if (library[i].read) {
                bookReadStatus.textContent = 'not read'
                container.classList.remove('read-style')
                container.classList.add('not-read-style')
                library[i].read = false
            } else {
                bookReadStatus.textContent = 'read'
                container.classList.remove('not-read-style')
                container.classList.add('read-style')
                library[i].read = true
            }
        }

        deleteBookButton.onclick = () => {
            delete library[i]
            library = library.filter(Boolean)
            container.remove()
 
            createBookCard()
        }
    }

    let oldButton = document.querySelector('main > button')
    oldButton.remove()

    let button = document.createElement('button')
    button.setAttribute('type', 'button')
    button.textContent = '+'
    main.appendChild(button)

    button.onclick = () => {
        !document.querySelector('form') ? createForm() : null
    }
} 

const main = document.querySelector('main')
const button = document.querySelector('button')

button.onclick = () => {
    !document.querySelector('form') ? createForm() : null
}
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
    
    let background = document.createElement('div')
    background.classList.add('background')

    //close button
    let closeButton = document.createElement('button')
    closeButton.setAttribute('type', 'button')
    closeButton.textContent = '×'

    closeButton.onclick = () => {
        background.remove()
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

        if (!bookTitleInput.value || !bookAuthorInput.value || !bookPagesInput.value) {
            return
        }
            library.push(new Book(bookTitleInput.value, bookAuthorInput.value, bookPagesInput.value, readStatus))
    
            createBookCard()
            background.remove()
            form.remove()

    }
    
    //appending everything to page
    
    main.appendChild(background)
    main.appendChild(form)

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

    let container = document.createElement('div')
    let bookTitle = document.createElement('h3')
    let bookAuthor = document.createElement('h4')
    let bookPages = document.createElement('p')
    let bookReadStatus = document.createElement('button')
    let bottomSection = document.createElement('div')
    bookReadStatus.setAttribute('type', 'button')

    for (let i=0; i < library.length; i++) {
        bookTitle.textContent = library[i].title
        bookAuthor.textContent = library[i].author
        bookPages.textContent = library[i].pages + ' pgs.'

        library[i].read ? bookReadStatus.textContent = 'read' :
        bookReadStatus.textContent = 'not read'

        container.classList.remove('read-style')
        container.classList.remove('not-read-style')

        library[i].read ? container.classList.add('read-style') :
        container.classList.add('not-read-style')

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

        container.appendChild(bookTitle)
        container.appendChild(bookAuthor)
        bottomSection.appendChild(bookReadStatus)
        bottomSection.appendChild(bookPages)
        container.appendChild(bottomSection)

        main.appendChild(container)
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
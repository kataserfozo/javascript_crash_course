Person = class {
    constructor(name) {
        this.name = name
        this.borrowedBooks = []
        this.lentBooks = []
        this.readBooks = []
    }
    lend(book) {
        this.lentBooks.push(book)
        book.increaseLentCount()
    }
    borrow(book) {
        this.borrowedBooks.push(book)
        book.increaseBorrowedCount()
    }
    read(book) {
        this.readBooks.push(book)
        book.increaseReadCount()
    }
    printActivities() {
        console.log('Hi, My name is ' + this.name)
        console.log('I read the following ' + this.readBooks.length + ' books:')
        this.readBooks.forEach(printTitle)
        console.log('I lent following ' + this.lentBooks.length + ' books:')
        this.lentBooks.forEach(printTitle)
        console.log('I borrowed following ' + this.borrowedBooks.length + '  books:')
        this.borrowedBooks.forEach(printTitle)

    }
}

amr = new Person('Amr')
kata = new Person('Kata')

Book = class {
    constructor(title) {
        this.title = title
        this.borrowedCount = 0
        this.lentCount = 0
        this.readCount = 0
    }
    increaseLentCount() {
        this.lentCount = this.lentCount + 1
    }
    increaseBorrowedCount() {
        this.borrowedCount = this.borrowedCount + 1
    }
    increaseReadCount() {
        this.readCount = this.readCount + 1
    }
    printStatistics(){
        console.log('The book with the title: ' + this.title)
        console.log('Has been read ' + this.readCount + ' times.')
        console.log('Has been borrowed ' + this.borrowedCount + ' times.')
        console.log('Has been lent ' + this.lentCount + ' times.')
        
    }
}

printTitle = book => console.log(book.title)

harryPotter1 = new Book('Harry Potter & the Philosopers stone')
harryPotter2 = new Book('Harry Potter & the chamber of secrets')
harryPotter3 = new Book('Harry Potter & the prisoner of azkaban')

amr.borrow(harryPotter1)
kata.lend(harryPotter1)
kata.borrow(harryPotter2)
amr.lend(harryPotter2)
amr.read(harryPotter2)
amr.printActivities()
kata.printActivities()
harryPotter2.printStatistics()
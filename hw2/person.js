module.exports = class Person {
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
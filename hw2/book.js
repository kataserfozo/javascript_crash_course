module.exports = class Book {
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

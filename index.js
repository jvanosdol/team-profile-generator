const book1 = {
    title: 'harry potter',
    author: 'JK Rowling',
    year: '2001',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

console.log(Object.keys(book1))
console.log(book1.getSummary())
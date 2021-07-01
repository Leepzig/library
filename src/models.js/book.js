
class Book {

  static all = []
  
  constructor(title, series, author, bookNumber, description, bookCoverUrl, genre) {
    this.title = title
    this.series = series
    this.author = author
    this.bookNumber = bookNumber
    this.description = description
    this.bookCoverUrl = bookCoverUrl
    this.genre = genre
    Book.all.push(this)
  }

  displayBook = () => {
    const div = document.createElement("div")
    const h4 = document.createElement("h4")
    const img = document.createElement("img")
    const pAuthor = document.createElement("p")
    const pDescription = document.createElement("p")
  
    h4.innerText=this.title
    img.src = this.bookCoverUrl
    pAuthor.innerText = this.author
    pDescription.innerText = this.description
  
    div.append(h4, img, pAuthor)
    document.getElementById("book-list").appendChild(div)
  }



}
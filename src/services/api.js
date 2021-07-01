
class Api {


  static createNewBook = (e) => {
    e.preventDefault()
    const title = document.getElementById("title-input").value
    const author = document.getElementById("author-input").value
    const description = document.getElementById("description-input").value
    const bookCover = document.getElementById("book-cover").value
    const genre = document.getElementById("genre-input").value
    fetch(baseUrl, {
      method: "POST",
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify({title:title, author:author, description:description, bookCoverUrl:bookCover, genre:genre})
    })
      .then(resp => resp.json())  
      .then(book => console.log(book))
  }

  static fetchBooks = () => {
    document.getElementById("book-list").innerHTML=""

    fetch(baseUrl + "?_page="+ currentPage +"&_limit=5")
    .then(response => response.json())
    .then(books => {
      books.forEach(book => {
        const {title, series, author, bookNumber, description, bookCoverUrl, genre} = book
        book = new Book(title, series, author, bookNumber, description, bookCoverUrl, genre)
        book.displayBook()
      })
    })
  }


  static fetchFilteredBooks = () => {
    document.getElementById("book-list").innerHTML=""
    const filter = document.querySelector("select").value
    const searchValue = document.querySelector("#search-value").value
  
    fetch(baseUrl + "?" + filter + "_like=" + searchValue)
    .then(response => response.json())
    .then(books => {
      books.forEach(book => {
        const {title, series, author, bookNumber, description, bookCoverUrl, genre} = book
        book = new Book(title, series, author, bookNumber, description, bookCoverUrl, genre)
        book.displayBook()
      })
    })
  }


}
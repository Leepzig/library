
const baseUrl =   "http://localhost:3000/books"
let currentPage = 1
const pageLimit = 5
let books = 23


document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("new-book").addEventListener("submit", Api.createNewBook)
  Api.fetchBooks()
  document.querySelector("#search").addEventListener("click", Api.fetchFilteredBooks)
  document.querySelector("#next-button").addEventListener("click", nextPage)
  document.querySelector("#back-button").addEventListener("click", prevPage)

})

const nextPage = () => {
  if (currentPage < books/pageLimit) {
    currentPage = currentPage + 1
    Api.fetchBooks()
    return currentPage
  }
}

const prevPage = () => {
  if (currentPage > 1) {
    currentPage = currentPage - 1
    Api.fetchBooks()
    return currentPage
  }
}



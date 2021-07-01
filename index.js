
const baseUrl =   "http://localhost:3000/books"
let books = []


document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("new-book").addEventListener("submit", createNewBook)
  fetchBooks()
  document.querySelector("#search").addEventListener("click", fetchFilteredBooks)
})





const createNewBook = (e) => {
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

const displayBook = (book) => {
  const {title, author, description, bookCoverUrl} = book
  const div = document.createElement("div")
  const h4 = document.createElement("h4")
  const img = document.createElement("img")
  const pAuthor = document.createElement("p")
  const pDescription = document.createElement("p")

  h4.innerText=title
  img.src = bookCoverUrl
  pAuthor.innerText = author
  pDescription.innerText = description

  div.append(h4, img, pAuthor)
  document.getElementById("book-list").appendChild(div)
}

const fetchBooks = () => {

  fetch(baseUrl)
  .then(response => response.json())
  .then(books => {
    books.forEach(displayBook)
  })
}

const fetchFilteredBooks = () => {
  document.getElementById("book-list").innerHTML=""
  const filter = document.querySelector("select").value
  const searchValue = document.querySelector("#search-value").value

  fetch(baseUrl + "?" + filter + "_like=" + searchValue)
  .then(response => response.json())
  .then(books => {
    books.forEach(displayBook)
  })
}

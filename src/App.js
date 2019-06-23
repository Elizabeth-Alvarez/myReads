import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Books from './Books'
import BookShelves from './BookShelves'

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  }
  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState({
        books: books
      })
    //console.log(books);
  })
}


updateShelf = (id, shelf) => {
  BooksAPI.update(id, shelf)
  .then((response) => {
    this.setState({ books: this.state.books.map(book => {
      if(book.id === id) {
        response = shelf;
        book.shelf = shelf;
        //console.log(id, shelf)
      }
       return book;
    })
  })
  //console.log(response);
})
}

render() {

  return (
    <div className="app">
      {this.state.showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
            <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div>
              {/* <Books books={this.state.books} updateShelf={this.updateShelf} /> */}
              <BookShelves books={this.state.books} updateShelf={this.updateShelf} />


            </div>

            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp

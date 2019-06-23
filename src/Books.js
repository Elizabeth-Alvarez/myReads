
import React, { Component } from 'react'
import BookShelves from './BookShelves'


class Books extends Component {

  handleChange = (id, query) => {
    this.props.updateShelf(id,query);
    console.log("This is shelf: ", query);
    console.log("this is id: ", id);
  }
  render() {

    const { books, updateShelf} = this.props;
    console.log(books);

    return(
      <div>
        <div className="bookshelf">
          <div className="bookshelf-books">
            <ol className="books-grid">
              <li>
                {books.map(book =>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                      <div className="book-shelf-changer">
                        <select key={book.id} onChange={(event) => this.handleChange(book.id, event.target.value)} >
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors[0]}, {book.authors[1]}</div>
                    {book.shelf}
                  </div>
                )}
              </li>
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Books;

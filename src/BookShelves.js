import React, { Component, Fragment } from 'react'
import Books from './Books'

class BookShelves extends Component {

  // state = {
  //   newBooks: []
  // }

  render() {

    const { books, updateShelf} = this.props;
    //console.log(books);
    //console.log(updateShelf);

    const shelfCategories = [
      {
        title: 'Currently Reading',
        shelf: 'currentlyReading',
      },
      {
        title: 'Want to Read',
        shelf: 'wantToRead',
      },
      {
        title: 'Read',
        shelf: 'read',
      },
    ];

    return(
      <div className="list-books-content">
       <div>
         <div className="bookshelf">
             {books.filter(book => book.shelf === shelfCategories[0].shelf)
             .map(book => (
                 <div>
                   <h2 key={book.id} className="bookshelf-title">{shelfCategories[0].title}</h2>
                   <Books books={books} updateShelf={updateShelf} />
                 </div>
             ))}
         </div>
       </div>


       {/* <div>
         <div className="bookshelf">
             {books.filter((book) => (book.shelf === shelfCategories[1].shelf) )
             .map((book) => (
                 <div>
                   <h2 key={book.id} className="bookshelf-title">{shelfCategories[1].title}</h2>
                   <Books books={books} updateShelf={updateShelf}/>

                 </div>
             ))}
         </div>
       </div>

       <div>
         <div className="bookshelf">
             {books.filter((book) => (book.shelf === shelfCategories[2].shelf) )
             .map((book) => (
                 <div>
                   <h2 key={book.id} className="bookshelf-title">{shelfCategories[2].title}</h2>
                 </div>
             ))}
         </div>
       </div> */}

     </div>

    )
  }
}

export default BookShelves;

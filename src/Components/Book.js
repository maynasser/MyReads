import React from 'react'
import ShelfChanger from './ShelfChanger'

const Book = props => {
	const {book, shelf, changeShelf} = props;
    return(
        <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, 
          backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})` }}></div>
		      <ShelfChanger book={book} shelf={shelf} changeShelf={changeShelf} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors && book.authors.join(', ') }</div>
      </div>
    )
}

export default Book
import React from 'react'
import Book from './Book'


const Shelf = props => {
    const {books, changeShelf} = props;
      let shelfBooks = books.map(book => (
    <Book book={book} books={books} key={book.id} changeShelf={changeShelf}/>))  
 return (
             <div className = "bookshelf">
                   <h2 className = "bookshelf-title"> {props.title} </h2>
                   <div className = "bookshelf-books">
                     <ol className = "books-grid">
                         {shelfBooks}
                     </ol>
                   </div>
                 </div>
         )
}
export default Shelf

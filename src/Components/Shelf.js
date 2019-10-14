import React from 'react'
import Book from './Book'


const Shelf = props => {
    const {books, shelf, changeShelf} = props;
    const filterShelf = books.filter(book => book.shelf === shelf);
         return (
             <div className = "bookshelf">
                   <h2 className = "bookshelf-title"> {props.title} </h2>
                   <div className = "bookshelf-books">
                     <ol className = "books-grid">
                         {filterShelf.map(book => (
                            <Book
                            key = {book.id} book = {book} shelf = {shelf.key} changeShelf = {changeShelf}
                            />))}
                     </ol>
                   </div>
                 </div>
         )
     
}
export default Shelf
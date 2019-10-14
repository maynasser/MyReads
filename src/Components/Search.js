import React from 'react'
import * as BooksAPI from '../BooksAPI.js'
import Book from './Book'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


class Search extends React.Component{

  static propTypes = {
         books: PropTypes.array.isRequired,
         changeShelf: PropTypes.func.isRequired
       };
  state = {
    query :'',
    searchBooks: [],
    booklength:0,
    bookNotFound: false
  };

  
  inputChangeHandeler(val){
    const term = val.target.value;
    this.searchBook(term)
  };

  searchBook = (query) => {
    this.setState({query: query.trim()}); 
    BooksAPI.search(query).then((books) => { 
      console.log('search')
      if (!query){this.setState({searchBooks: [], bookNotFound: false})}
      else {
          if (books.length > 0)
          {books.map(book => 
                  (books.filter((item) =>
                    item.id === book.id).map((item) =>
                      book.shelf = item.shelf)))
                      this.setState({searchBooks: books, bookNotFound: false})
           } else {this.setState({searchBooks: [], bookNotFound: true})}
    }}
  )
    return
  };
  
  render(){
    const { query } = this.state
    return(
      <div className="search-books">
      <div className="search-books-bar">
      <Link className="close-search" to='/'>Close</Link>
        <div className="search-books-input-wrapper">
          <input
           type="text"
           value={query}
            placeholder="Search by title or author" 
            onChange={this.inputChangeHandeler.bind(this)}/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {this.state.searchBooks.map( book =>
        <Book
        book ={book}
        books ={this.books}
        key ={book.id}
        changeShelf ={this.changeShelf}
        />
          )}
        </ol>
        {this.state.bookNotFound ? <h3>Please, Try again</h3> : '' }
      </div> 
    </div>
  )
 }
}
export default Search
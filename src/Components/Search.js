import {Link} from 'react-router-dom';
import React from 'react'
import * as BooksAPI from '../BooksAPI.js'
import Book from './Book'
import PropTypes from 'prop-types';



class Search extends React.Component{

  static propTypes = {
         books: PropTypes.array.isRequired,
         changeShelf: PropTypes.func.isRequired
       };
  state = {
    query :'',
    searchBooks: [],
    bookNotFound: false
  };

  
  inputChangeHandeler(val){
    const term = val.target.value;
    this.searchBook(term)
  };

  searchBook = (query) => {
    this.setState({query: query}); 
    BooksAPI.search(query).then((books) => { 
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
    const { query, searchBooks, bookNotFound } = this.state;
    const {books , changeShelf} = this.props;
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
          {searchBooks.map((book)=>
          <Book book = {book} books = {books} key = {book.id} changeShelf = {changeShelf} />)}
        </ol>
        {bookNotFound ? <h3>Please, Try again</h3> : '' }
      </div> 
    </div>
  )
 }
}
export default Search

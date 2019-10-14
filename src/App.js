import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Components/Search'
import Shelves from './Components/Shelves'


class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books : []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) =>{
     this.setState ({books: books})
    })
};


  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => 
   { let updatedBooks = [];
    updatedBooks = this.state.books.filter(b => b.id !== book.id);
    
    if (shelf !== 'none') {
    book.shelf = shelf;
    updatedBooks = updatedBooks.concat(book);
  }

  this.setState({books: updatedBooks,});})
  };

  render() {
    
    return (
      <Router>
      <div className="app">
      <Route path="/search" render={() =>
       <Search books={this.state.books}
       changeShelf={this.changeShelf}/>}
        />
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <Shelves
            books={this.state.books}
            changeShelf={this.changeShelf}
            />
            <div className="open-search">
		<Link to='/search'>Add a book</Link>
            </div> 
          </div>
        )}
          />
        
      </div>
      </Router>
    )
  }
}

export default BooksApp

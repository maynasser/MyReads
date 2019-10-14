import React from 'react'
import Shelf from './Shelf'
import PropTypes from 'prop-types';

class Shelves extends React.Component {
     
    static propTypes = {
        books: PropTypes.array.isRequired, 
        changeShelf: PropTypes.func.isRequired
    }
    changeShelfHandler = (book , Shelf) =>{
    this.props.changeShelf(book , Shelf)
}
render()
{
    return(
    <div className="list-books-content">
            <div>
                <Shelf 
                title = "Currently Reading" 
                books = {this.props.books.filter((book) => book.shelf ==="CR")}
                changeShelf = {this.changeShelfHandler}
                />
                <Shelf 
                title = "Want To Read"
                books = {this.props.books.filter((book) => book.shelf ==="W2R")}
                changeShelf = {this.changeShelfHandler}
                />
                <Shelf 
                title = "Read"
                books = {this.props.books.filter((book) => book.shelf ==="R")}
                changeShelf = {this.changeShelfHandler}
                />
            </div>
        </div>
    )}
    
};
  
export default Shelves


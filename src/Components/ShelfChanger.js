import React from 'react'


class ShelfChanger extends React.Component {
    state = {
        shelf: this.props.shelf
    };
    
    changeShelfHandler = event => {
      this.props.changeShelf (this.props.book, event.target.value);
    }
render(){
  const shelf = this.state.shelf? this.props.shelf: 'none';
    return(
            <div className="book-shelf-changer">
            <select defaultValue={shelf}  onChange={event => this.changeShelfHandler(event)}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        )}
    
};
export default ShelfChanger;

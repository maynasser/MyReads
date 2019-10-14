import React from 'react'


class ShelfChanger extends React.Component {
    state = {
        shelf: this.props.shelf
    };
    
    changeShelfHandler = event => {
        this.setState({shelf: event.target.value});
    }
render(){
    
    return(
            <div className="book-shelf-changer">
            <select value={this.state.shelf} onChange={this.changeShelfHandler.bind(this)}>
              <option value="move" disabled>Move to...</option>
              <option value="CR">Currently Reading</option>
              <option value="W2R">Want to Read</option>
              <option value="R">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        )}
    
};
export default ShelfChanger;
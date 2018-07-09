import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Search extends React.Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
  }

  state = {
    query:'',
    showingBooks:[]
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    this.search(query);
  }

    search = (title)=>{
      BooksAPI.search(title).then((showingBooks) =>{
        if(showingBooks){
          //check if the book exist
          let i = 0 ;
          while(i < showingBooks.length){
            this.props.books.map((book)=>{
               return book.id === showingBooks[i].id ?showingBooks[i].shelf = book.shelf:''
            } )
            if(!showingBooks[i].shelf)
              showingBooks[i].shelf = 'none'
            i++;
          }
        }

        this.setState({ showingBooks })
      }).catch(
        // Log the rejection reason
        (reason) => {
          console.log('Handle rejected promise ('+reason+') here.');
        });
    }

  render(){
      const { query, showingBooks} = this.state
    return(
      <div className="app">
          <div className="search-books">
            <div className="search-books-bar">
              <Link className='close-search' to='/' >Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" defaultValue = {query}
                 onChange = {(event) => this.updateQuery(event.target.value)}
                 />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                { showingBooks && showingBooks.length > 0 && showingBooks.map((book) => (
                  <li key = {book.id}>
                    <div className="book">
                      <div className="book-top">
                        {book.imageLinks? (
                          <div className="book-cover"  style={{ width: 128, height: 188,backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                        ):(
                            <div className="book-cover"  style={{ width: 128, height: 188, backgroundImage:'' }}></div>
                          )}
                            <div className="book-shelf-changer">
                              <select value={book.shelf} onChange={(event) => this.props.handleChange(book, event.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                    ))}
                    </ol>
            </div>
          </div>
          </div>
    );
  }
}

export default Search

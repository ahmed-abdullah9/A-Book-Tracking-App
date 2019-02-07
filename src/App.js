import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BookShelve from './BookShelve'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  handleChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then((books) => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
    }).catch(
      (reason) => {
        console.log('Handle rejected promise ('+reason+') here.');
      });
    }

  render() {
    return (
      <div>
        <Route exact path='/home' render={() => (
          <BookShelve
            books={this.state.books}
            handleChange={this.handleChange}
          />
        )}/>
        <Route path='/search' render={({ history }) => (
          <Search
            books={this.state.books}
            handleChange={this.handleChange}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp

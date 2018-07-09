 import React from 'react'
 import PropTypes from 'prop-types'
 import './App.css'
 import { Link } from 'react-router-dom'

 function BookShelve(props) {
   BookShelve.propTypes = {
     books: PropTypes.array.isRequired,
     handleChange: PropTypes.func.isRequired
   }
   const { books, handleChange } = props
   let currentlyReading = books.filter(book =>{
     return book.shelf === "currentlyReading"
   })

   let wantToRead = books.filter(book =>{
     return book.shelf === "wantToRead"
   })

   let Read = books.filter(book =>{
     return book.shelf === "read"
   })

   return(
     <div className="app">
         <div className="list-books">
           <div className="list-books-title">
             <h1>MyReads</h1>
           </div>
           <div className="list-books-content">
               <div>
                 <div className="bookshelf">
                   <h2 className="bookshelf-title">Currently Reading</h2>
                   <div className="bookshelf-books">
                     <ol className="books-grid">
                       {currentlyReading.map((book) => (
                         <li key={book.id}>
                           <div className="book">
                             <div className="book-top">
                               {book.imageLinks? (
                                 <div className="book-cover"  style={{ width: 128, height: 188,backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                               ):(
                                 <div className="book-cover"  style={{ width: 128, height: 188, backgroundImage:'' }}></div>
                               )}
                               <div className="book-shelf-changer">
                                 <select value={book.shelf} onChange={(event) => handleChange(book, event.target.value)}>
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
               <div className="bookshelf">
                 <h2 className="bookshelf-title">Want to Read</h2>
                 <div className="bookshelf-books">
                   <ol className="books-grid">
                   {wantToRead.map((book) => (
                     <li key = {book.id}>
                       <div className="book">
                         <div className="book-top">
                           {book.imageLinks? (
                             <div className="book-cover"  style={{ width: 128, height: 188,backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                           ):(
                             <div className="book-cover"  style={{ width: 128, height: 188, backgroundImage:'' }}></div>
                           )}
                           <div className="book-shelf-changer">
                             <select value={book.shelf} onChange={(event) =>handleChange(book, event.target.value)}>
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
                 <div className="bookshelf">
                   <h2 className="bookshelf-title">Read</h2>
                   <div className="bookshelf-books">
                     <ol className="books-grid">
                     {Read.map((book) => (
                       <li key={book.id}>
                         <div className="book">
                           <div className="book-top">
                             {book.imageLinks? (
                               <div className="book-cover"  style={{ width: 128, height: 188,backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                             ):(
                               <div className="book-cover"  style={{ width: 128, height: 188, backgroundImage:'' }}></div>
                             )}
                             <div className="book-shelf-changer">
                               <select value={book.shelf} onChange={(event) => handleChange(book, event.target.value)}>
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
           </div>
           <Link className="open-search"
            to='/search'
             >Add a book</Link>
         </div>
     </div>
   )
 }

export default BookShelve

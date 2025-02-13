import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs';

import { deleteBook, toggleFavorite } from '../../redux/books/actionCreators';

import './BookList.scss';

const BookList = () => {
   const dispatch = useDispatch();
   const books = useSelector(state => state.books);

   const handleDeleteBook = id => {
      dispatch(deleteBook(id));
   };
   const handleToggleFavorite = book => {
      dispatch(toggleFavorite(book));
   };

   return (
      <div className="app-block book-list">
         <h2>Book List</h2>
         {books.length === 0 ? (
            <p className="mt-6">No books available</p>
         ) : (
            <ul>
               {books.map((book, index) => {
                  return (
                     <li key={book.id}>
                        <div className="book-info">
                           <span className="font-bold">{++index}.</span>
                           <span> {book.title}</span>
                           <span> by </span>
                           <span className="font-bold">{book.author}</span>
                        </div>
                        <div className="book-actions">
                           <span onClick={() => handleToggleFavorite(book)}>
                              {book.isFavorite ? <BsBookmarkStarFill className="star-icon" /> : <BsBookmarkStar className="star-icon" />}
                           </span>
                           <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
                        </div>
                     </li>
                  );
               })}
            </ul>
         )}
      </div>
   );
};

export default BookList;

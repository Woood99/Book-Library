import React from 'react';
import { useSelector } from 'react-redux';

import './BookList.scss';

const BookList = () => {
   const books = useSelector(state => state.books);
   console.log(books);
   return (
      <div className="app-block book-list">
         <h2>Book List</h2>
         {books.length === 0 ? (
            <p className="mt-6">No books available</p>
         ) : (
            <ul>
               {books.map((book, index) => {
                  return (
                     <li key={index}>
                        <div className="book-info">
                           <span className="font-bold">{++index}.</span>
                           <span> {book.title}</span>
                           <span> by </span>
                           <span className="font-bold">{book.author}</span>
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

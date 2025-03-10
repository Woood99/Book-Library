import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { addBook } from '../../redux/books/actionCreators';

import Input from '../../uiForm/Input';

import getRandomValueFromArray from '../../helpers/getRandomValueFromArray';
import randomBooksData from '../../data/books.json';
import createBook from '../../utils/createBook';

import './BookForm.scss';

const BookForm = () => {
   const dispatch = useDispatch();
   const { register, reset, handleSubmit } = useForm();

   const onSubmit = data => {
      const book = createBook(data);
      dispatch(addBook(book));
      reset();
   };

   const handleAddRandomBook = () => {
      const book = createBook(getRandomValueFromArray(randomBooksData));
      dispatch(addBook(book));
   };

   return (
      <div className="app-block book-form">
         <h2>Add a New Book</h2>
         <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <Input
               labelName="Title"
               validate={{
                  ...register('title', {
                     required: true,
                  }),
               }}
            />
            <Input
               labelName="Author"
               validate={{
                  ...register('author', {
                     required: true,
                  }),
               }}
            />
            <button type="submit">Add Book</button>
            <button type="button" onClick={handleAddRandomBook}>
               Add Random
            </button>
         </form>
      </div>
   );
};

export default BookForm;

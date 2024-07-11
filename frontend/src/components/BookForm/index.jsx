import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { addBook } from '../../redux/books/actionCreators';

import './BookForm.scss';

import Input from '../../uiForm/Input';
import { v4 as uuidv4 } from 'uuid';

const BookForm = () => {
   const dispatch = useDispatch();
   const { register, reset, handleSubmit } = useForm();

   const onSubmit = data => {
      const book = {
         ...data,
         id: uuidv4(),
      };
      dispatch(addBook(book));
      reset();
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
         </form>
      </div>
   );
};

export default BookForm;

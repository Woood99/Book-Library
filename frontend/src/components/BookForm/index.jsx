import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import './BookForm.scss';

import Input from '../../uiForm/Input';

const BookForm = () => {
   const { register, reset, handleSubmit } = useForm();

   const onSubmit = data => {
      console.log(data);
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

import React from 'react';

const Input = props => {
   const { type = 'text', labelName, value, onChange = () => {}, validate } = props;
   return (
      <label>
         {labelName && <span>{labelName}</span>}
         <input type={type} value={value} onChange={onChange} {...validate} />
      </label>
   );
};

export default Input;

import React from 'react';

export const Input = ({type='text',label = ' ',placeholder='',value,onChangeHandler, name}) => {
  return (
    <div >

        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black text-left">
          {label}
        </label>

         <input className="w-full mb-6 bg-gray-100 border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-gray-500 focus:border-red-300 block p-2.5 dark:bg-with-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-gray-800 dark:focus:ring-gray-500 dark:focus:border-gray-500" 
            name={name} 
            type={type} 
            placeholder={placeholder} 
            value={value} 
            onChange={onChangeHandler}>
         </input>
        

    </div>
  )
}


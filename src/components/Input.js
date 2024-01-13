import React from 'react'

export const Input = ({label,value,onset,placeholder,name}) => {
  return (
    <div >

        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black text-left">{label}
        
        <input className="w-full mb-6 bg-gray-100 border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-gray-500 focus:border-red-300 block p-2.5 dark:bg-with-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-gray-800 dark:focus:ring-gray-500 dark:focus:border-gray-500" 
            name={name} type='text' placeholder={placeholder} value={value} onChange={onset}></input>
        </label>
        

    </div>
  )
}


export const SelectInput = ({
  label,
  placeholder,
  options = [],
  name,
  value,
  onChange
}) => {
  return (
  <div className="mt-4">
    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black text-left">
        {label}

      <select
          className="bg-gray-50 mb-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name={name}
          value={value}
          onChange={onChange}
      >
          <option value="" >{placeholder}</option>
          {
            options.map(items => (
              <option key={items.id} value={items.id} >{items.name}</option>))
          }
      </select>
      
    </label>
  </div>
  );
};
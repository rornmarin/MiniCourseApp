import React from "react";

export const TextBox = ({
  placeholder = "Write a short summary to your course",
  value,
  name = 'summary',
  onChangeHandler,
  label
}) => {

  console.log(name,value)
  return (
    <>
      <label className="block mb-2 text-sm font-medium text-black-900 dark:text-black text-left">{label}</label>
      <textarea
      
        name={name}
        placeholder={placeholder}
        rows="4"
        value={value}
        onChange={onChangeHandler}
        class="w-full border rounded-md bg-gray-100 border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-gray-500 focus:border-red-300 block p-2.5 dark:bg-with-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-gray-800 dark:focus:ring-gray-500 dark:focus:border-gray-500"
      ></textarea>
    </>
  );
}

import React from "react";

export const TextBox = ({
  placeholder = "Write a short summary to your course",
  value,
  name = 'summary',
  onChangeHandler,
  onHandlerBlur,
  label
}) => {
  // float-start font-bold mb-2 text-xl text-gray-900 dark:text-white
  return (
    <>
      <label className="block font-bold mb-2 text-xl text-gray-900 dark:text-white text-left">{label}</label>
      <textarea
      
        name = {name}
        placeholder ={placeholder}
        rows = "4"
        value = {value}
        onChange = {onChangeHandler}
        onHandlerBlur ={onHandlerBlur}
        class="w-full border rounded-md bg-gray-100 border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-gray-500 focus:border-red-300 block p-2.5 dark:bg-with-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-gray-800 dark:focus:ring-gray-500 dark:focus:border-gray-500"
      ></textarea>
    </>
  );
}

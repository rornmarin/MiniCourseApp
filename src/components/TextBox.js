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
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black text-left">{label}</label>
      <textarea
      
        name={name}
        placeholder={placeholder}
        rows="4"
        value={value}
        onChange={onChangeHandler}
        class="mt-1 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
      ></textarea>
    </>
  );
}

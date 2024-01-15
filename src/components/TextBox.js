import React from "react";

export const TextBox = ({
  placeholder = "Write a short summary to your course",
  value,
  name = 'summary',
  onChangeHandler
}) => {

  console.log(name,value)
  return (
    <>
      <textarea
      
        name={name}
        placeholder={placeholder}
        rows="4"
        value={value}
        onChange={onChangeHandler}
        class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
      ></textarea>
    </>
  );
}

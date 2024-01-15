import React from "react";

export default function SelectOption({label,data,name,value,onChangeHandler}) {

  console.log('Data234567890:',data)
  return (
    <div class="relative inline-block w-full py-20">
     <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black text-left">{label}</label>
      <select
      name={name}
      value={value}
      onChange={onChangeHandler}
      
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="" disabled selected>
         Choose Category Courses
        </option>
        {
          data.length> 0 ?(
            data?.map((item)=>{
              return <>
              <option value={item.id}>{item?.name} </option>
              </>
            })
          ):<option value="">No Categories</option>
        }
      
      
      </select>
      
    </div>
  );
}

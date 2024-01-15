import React from "react";

export default function SelectOption({data,name,value,onChangeHandler}) {

  console.log('Data234567890:',data)
  return (
    <div class="relative inline-block w-64 space-y-9">
     <h1 className="text-xl font-bold">Category</h1>
      <select
      name={name}
      value={value}
      onChange={onChangeHandler}
      
       class="block appearance-none w-full bg-white border
        border-gray-300 text-gray-700 py-3 px-4 pr-8
         rounded leading-tight focus:outline-none focus:border-blue-500  ">
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

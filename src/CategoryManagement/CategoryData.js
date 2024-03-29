import React, { useState } from 'react'
import { Button } from '../components/Button'

export default function CategoryTable({data, onDelete, onEdit}) {

      const [isEdit, setEdit] = useState(false)
      
  return (

    <div>

        <div class="flex flex-col">
                <div class="-m-1.5 mx-10 py-5">
                <div class="p-1.5 min-w-full align-middle">
                    <div class="border rounded-lg shadow dark:border-gray-700 dark:shadow-gray-300">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className='bg-gray-50 dark:bg-gray-700 '>
                        <tr class="divide-x divide-gray-200 dark:divide-gray-700">
                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">ID</th>
                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Code</th>
                            <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
                        </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">

                        {
                          data?.map((category,index) => (
                            <tr key={index} >
                                <td class="px-6 py-3 whitespace-nowrap text-sm font-medium text-black-800 dark:text-black-200">{index +1}</td>
                                <td class="px-6 py-3 whitespace-nowrap text-sm text-black-800 dark:text-black-200">{category?.name}</td>
                                <td class="px-6 py-3 whitespace-nowrap text-sm text-black-800 dark:text-black-200">{category?.code}</td>
                                <td class="px-6 py-3 whitespace-nowrap text-end text-sm font-medium">
                                  
                                  <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-black-600"
                                    onClick={()=>{
                                      setEdit(pre=>!pre)
                                      onEdit({
                                        category,
                                        isEdit:!isEdit
                                      })
                                    }}
                                  >Edit /</button>
                                 
                                  <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-black-600"
                                    onClick={()=>onDelete(category?.id)}
                                  >Delete</button>
                                </td>
                              </tr>
                          ))

                            
                        }
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>
    </div>
  )
}



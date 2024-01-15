import React, { useState } from 'react'

export default function CourseData({
    data,
    category,
    onDelet,
    onEditing
}) 
{

    const [isEdit,setEdit] = useState(false);

  return (
    <div class="flex flex-col">
        <div class="-m-1.5 mx-10 py-5">
          <div class="p-1.5 min-w-full align-middle">
            <div class="border rounded-lg shadow dark:border-gray-700 dark:shadow-gray-300">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className='bg-gray-50 dark:bg-gray-700 '>
                  <tr class="divide-x divide-gray-200 dark:divide-gray-700">
                    <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">ID</th>
                    <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Summaries</th>
                    <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">category</th>
                    <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Total Chapter</th>
                    <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Total Lession</th>
                    <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  {
                    data?.map((course) => {
                        console.log(data)
                        const categoryName = category?.find(
                            (cate) => cate?.id === + course?.category_id
                        )?.name;
                        return (
                            <tr key={course.id}>
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-black-800 dark:text-black-200">{course.id}</td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-black-800 dark:text-black-200">{course.name}</td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-black-800 dark:text-black-200">{course.summary}</td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-black-800 dark:text-black-200">{course.category_id}/{categoryName}</td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-black-800 dark:text-black-200">0</td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-black-800 dark:text-black-200">0</td>
                          <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                            <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-black-600"
                                onClick={() => {
                                    setEdit((pre) => !pre);

                                    if (isEdit == false ){
                                        onEditing(course?.id, !isEdit);
                                        return;
                                    }
                                    onEditing(course?.id, !isEdit)
                                }}> Edit /
                            </button>

                            <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-black-600"
                                onClick={() => onDelet(course?.id)}>
                                Delete
                            </button>
                          </td>
                        </tr>
                          )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  )
}


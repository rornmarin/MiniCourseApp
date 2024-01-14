import React, { useState } from 'react';
import { Input } from './components/Input';
import { SelectInput } from './components/Input';
import { Button } from './components/Button';

export default function CourseManagement(categories) {
  const [form, setForm] = useState({ course_name: '', summarise: '',category_id:''});
  const [courses, setCourses] = useState([]);

  const onChange = (e) => {

    const field = e.target.name
    const value = e.target.value

    setForm({...form,[field]:value})

  }


  const handleAddClick = () => {
    if (form.course_name.trim() === '' || form.summarise.trim() === '') {
      return;
    }
  
    const newCourse = {
      id: courses.length + 1, 
      course_name: form.course_name,
      summarise: form.summarise,
      Category: form.selectedCategory
    };
  
    setCourses((prevCourses) => [...prevCourses, newCourse]);
  
    setForm({ course_name: '', summarise: '',Category:''});
  };

  console.log('form :',form)

  return (
    <div>

      <div  className="flex justify-between px-10 ">       
        <h1 className='font-sans text-xl'>Course Management</h1>
        <Button Button={'Add'} onClick = {handleAddClick} />
      </div>

      {/* <div className="w-full flex items-center justify-center">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-10 my-10">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Summarise</th>
              <th scope="col">Category</th>
              <th scope="col">Total Chapter</th>
              <th scope="col">Total Lesson</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td className="border border-gray-700">{course.id}</td>
                <td className="border border-gray-700">{course.course_name}</td>
                <td className="border border-gray-700">{course.summarise}</td>
                <td className="border border-gray-700">{course.Category}</td>
                <td className="border border-gray-700">0</td> 
                <td className="border border-gray-700">0</td> 
                <td className="border border-gray-700">
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

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
                    courses.map((course) => (
                      <tr key={course.id}>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-black-800 dark:text-black-200">{course.id}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-black-800 dark:text-black-200">{course.course_name}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-black-800 dark:text-black-200">{course.summarise}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-black-800 dark:text-black-200">{course.Category}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-black-800 dark:text-black-200">0</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-black-800 dark:text-black-200">0</td>
                    <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-black-600">Edit /</button>
                      <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-black-600">Delete</button>
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
      
      <div className='px-20 '>
        <Input
          label="Name"
          name="course_name"
          placeholder="Name"
          value={form.course_name}
          // onset={(value) => setForm({ ...form, course_name: value })}
          onset={onChange}
        />
        <SelectInput
          label="Category"
          name="category_id"
          placeholder="Please select category"
          value={form.category_id}
          onset={onChange}
          options={categories}
        />

        {/* <select id="categorySelect" name="category_id">
          {categories.map((category, index) => (
            <option key={index} value={category.code}>
              {category.name}
            </option>
          ))}
        </select> */}

        <Input
          label="Summaries"
          name="summarise"
          placeholder="Summaries"
          value={form.summarise}
          // onset={(value) => setForm({ ...form, summarise: value })}
          onset={onChange}
        />
      </div>
    </div>
  );
}
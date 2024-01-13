import React from 'react';
import { Input } from './components/Input';
import { Button } from './components/Button';

const Categories = ({ form, setForm, onAddClick, categories}) => {

  
  const onChange = (e) => {
    const field = e.target.name
    const value = e.target.value

    setForm({...form,[field]:value})
  }

  return (
    <div className='justify-center'>

      <h1 className='text-3xl my-5 font-sans'> Mini Course </h1>

      <div  className="flex justify-between px-10 ">       
        <h1 className='font-sans text-xl'>Category Management</h1>
        <Button Button={'Add'} onClick = {onAddClick} />
      </div>


      {/* <div className='w-full flex items-center justify-center py-5'>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-10 '>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ' >
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>Name</th>
              <th scope='col'>Code</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, index) => (
              <tr key={index}>
                <td className='border border-gray-700'>{index + 1}</td>
                <td className='border border-gray-700'>{cat.name}</td>
                <td className='border border-gray-700'>{cat.code}</td>
                <td className='border border-gray-700'>
                  <button>Edit /</button>
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
                    <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Code</th>
                    <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  {
                    categories.map((cat,index) => (
                      <tr key={index}>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-black-800 dark:text-black-200">{index +1}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-black-800 dark:text-black-200">{cat.name}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-black-800 dark:text-black-200">{cat.code}</td>
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
          placeholder={'input Category'}
          label={'Name'}
          name={'category'}
          value={form.category}
          onset={onChange}
        />
        <Input
          placeholder={'input Code'}
          label={'Code'}
          name={'code'}
          value={form.code}
          onset={onChange}
        />
      </div>

    </div>
  );
};

export default Categories;
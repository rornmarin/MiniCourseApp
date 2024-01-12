import React from 'react';
import { Input } from './components/Input';
import { Button } from './components/Button';

const Categories = ({ form, onInputChange, onAddClick, categories }) => {
  return (
    <div className='justify-center'>
      <h1 className='text-3xl my-5 font-sans'> Mini Course </h1>

      <div>
        <h3>Category Management</h3>
        <Button Button={'Add'} onClick={onAddClick} />
        <Input
          placeholder={'input Category'}
          label={'Name'}
          name={'category'}
          value={form.category}
          onset={(value) => onInputChange('category', value)}
        />
        <Input
          placeholder={'input Code'}
          label={'Code'}
          name={'code'}
          value={form.code}
          onset={(value) => onInputChange('code', value)}
        />
      </div>

      <div className='w-full flex items-center justify-center'>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-10 '>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 '>
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
      </div>
    </div>
  );
};

export default Categories;
import React, { useState } from 'react';
import './App.css';
import Categories from './CategoriesManagement';
import Course from './CourseManagement';
import Chapters from './Chapters';

function App() {
  const [form, setForm] = useState({ category: '', code: '' });
  const [categories, setCategories] = useState([]);
  

  const handleInputChange = (name, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleAddClick = () => {

    if (form.category.trim() === '' || form.code.trim() === '') {
      return;
    }
    
    setCategories((prevCategories) => [
      ...prevCategories,
      { name: form.category, code: form.code },
    ]);

    setForm({ category: '', code: '' });
  
  };

  console.log(categories);

  return (
    <div className='App'>
      <Categories
        onInputChange={handleInputChange}
        onAddClick={handleAddClick}
        categories={categories}
        setForm={setForm}
        form={form}
      />
      
      <Course categories={categories}/>

      <Chapters />
      
    </div>
  );
}

export default App;
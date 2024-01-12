import React, { useState } from 'react';
import './App.css';
import Categories from './CategoriesManagement';
import Course from './CourseManagement';

function App() {
  const [form, setForm] = useState({ category: '', code: '' });
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

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

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='App'>
      <Categories
        onInputChange={handleInputChange}
        onAddClick={handleAddClick}
        categories={categories}
        form={form}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <Course />
    </div>
  );
}

export default App;
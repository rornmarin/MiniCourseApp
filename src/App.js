import React, { useState } from 'react';
import './App.css';
import Chapters from './Chapters';
import { v4 as uuidv4 } from 'uuid';
import CategorySection from './CategoryManagement/CategorySection';
import CourseManagement from './CourseManagement/CourseSection';


function App() {
  const [form, setForm] = useState({ 
    id:"",
    name: '',
    code: '' });

  const [data,setData] = useState([ 
    {
      id: 10,
      name: "The Baddy Course",
      category_id: "12835ce6-163e-402b-b500-5651fd4d8093",
      summary: "This is the best course",
      chapters: [
        {
          id: 1,
          name: "The Chapter Course",
          summary: "This Chapter is so cool",
          lessons: [
            {
              id: 1,
              name: "The Lesson Course",
              summary: "This Lesson is so cool",
            },
          ],
        },
        {
          id: 2,
          name: "The Chapter Course",
          summary: "This Chapter is so cool",
          lessons: [
            {
              id: 1,
              name: "The Lesson Course",
              summary: "This Lesson is so cool",
            },
          ],
        },
        {
          id: 3,
          name: "The Chapter Course",
          summary: "This Chapter is so cool",
          lessons: [
            {
              id: 1,
              name: "The Lesson Course",
              summary: "This Lesson is so cool",
            },
          ],
        },
      ],
    },

  ])

  const [listCategories, setCategories] = useState([
    {
      id: "12835ce6-163e-402b-b500-5651fd4d8091",
      name: "React",
      code: "4567890;",
    },
    {
      id: "12835ce6-163e-402b-b500-5651fd4d8092",
      name: "Testing",
      code: "234567890",
    }
   
  ]);
  

  const onSaveCategory = (params, isEdit) =>{
    setForm ({

      id:"",
      name:"",
      code:"",

    });

    if(isEdit == true ){
      setCategories((pre) => 
        pre.map((category,index,arr) => {
          if(category.id === params?.id){
            category = params;
          }
          return category;
        })
      );
      return;
    }
    setCategories((pre) => {
      const arr = pre.slice();
      arr.push({
        id: uuidv4(),
        name:params?.name,
        code:params?.code,
      })
      return [...arr];
    })
  }


  const onEditCategory = (params) => {
    setForm({
      id:"",
      name:"",
      code:"",
    })
  };

  const onDeleteCategory = (id) => {
    setCategories((pre) => pre.filter((category) => category?.id !== id));
    setData((pre) => {
      return pre.filter((data) => data.category_id !== id);
    })
  }

  return (
    <div className='App'>
      <CategorySection
        data={listCategories}
        onSave={onSaveCategory}
        onEdit={onEditCategory}
        onDelete={onDeleteCategory}
        form={form}
      />

      <CourseManagement 
        category={listCategories}
        data={data}
        setData={setData}
      />
    

      <Chapters />
      
    </div>
  );
}

export default App;
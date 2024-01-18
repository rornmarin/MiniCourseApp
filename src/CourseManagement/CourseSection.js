import React, { useState } from 'react';
import CourseData from './CourseData';
import CourseForm from './CourseForm';
import { v4 as uuidv4 } from 'uuid';


export default function CourseManagement ({category, data, setData}) {
  
  const [editForm, setEditForm] = useState({});
  const [isCouresEdit, setCourseEdit] = useState(false);

  const onSaveData = (save, isEdit) => {
    console.log(save);
    if(isEdit === true ) {
        setData((pre) => 
            pre.map((data) => {
                if(data.id === save?.id){
                    data = save;
                }
                return data;
            })
        );
        setEditForm({})
        setCourseEdit(false)

        return;
    }
    setData((pre) => [...pre, {
      ...save,
      id:uuidv4()
    }]);
  };

  const onDeleteData = (id) => {
    setData((pre) => pre.filter((data) => data?.id !== id));
  };

  const onEditingCourse = (id) => {

    console.log(isCouresEdit)
    setCourseEdit(pre=>!pre)
    if (isCouresEdit === false) 
    
    {
  
      const result = data?.find((course) => course.id === id);
      setEditForm(result);
   
 
      return;
    }
    setEditForm({});
  };

  console.log('isCouresEdit',editForm)


  return (
    <div>

      <div  className="flex justify-between px-10 ">       
        <h1 className='font-sans text-xl font-bold'>Course Management</h1>
        {/* <Button Button={'Add'} onClick = {handleAddClick} /> */}
      </div>

      <CourseData

        data={data}
        category={category}
        onDelet={onDeleteData}
        onEditing={onEditingCourse}
      
      />
      <CourseForm 
      
        data={category}
        setData={setData}
        value={editForm}
        onSave={onSaveData}

      />
      
    </div>
  );
}
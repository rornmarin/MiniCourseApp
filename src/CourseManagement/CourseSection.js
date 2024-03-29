import React, { useState } from 'react';
import CourseData from './CourseData';
import CourseForm from './CourseForm';

export default function CourseManagement ({category, data, setData}) {
  
  const [editForm, setEditForm] = useState({});

  const onSaveData = (save, isEdit) => {
    if(isEdit == true ) {
        setData((pre) => 
            pre.map((data) => {
                if(data.id === save?.id){
                    data = save;
                }
                return data;
            })
        );
        return;
    }
    setData((pre) => [...pre, save]);
  };

  const onDeleteData = (id) => {
    setData((pre) => pre.filter((data) => data?.id !== id));
  };

  const onEditingCourse = (id, isEdit) => {

    if (isEdit == true) {
      const result = data?.find((course) => course.id === id);
      setEditForm(result);
      return;
    }

    setEditForm({});
  };


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
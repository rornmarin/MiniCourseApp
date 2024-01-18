import React from 'react'
import CategoryForm from './CategoriesForm'
import CategoryTable from './CategoryData' 

export default function CategorySection({
    data=[],
    onSave,
    onDelete,
    form,
    onEdit,
    setEdit,
    isEdit,
}) {
  return (
    <div>
      <h1 className='text-3xl my-5 font-sans font-bold'> Mini Course </h1>
      <div  className="flex justify-between px-10 ">       
        <h1 className='font-sans text-xl font-bold'>Category Management</h1>
        {/* <Button Button={'Add'} onClick = {handleAddClick} /> */}
      </div>
      <CategoryTable data={data} onDelete={onDelete} onEdit={onEdit} onSave={onSave} setEdit={setEdit} isEdit={isEdit}/>

      <div className='py-5 my-5 border-primary700 rounded-xl bg-indigo-200 shadow-lg shadow-slate-100 mx-10'>
        <CategoryForm onSave={onSave} value={form} />
      </div>

    </div>
  )
}


import React from 'react'
import CategoryForm from './CategoriesForm'
import CategoryTable from './CategoryData' 

export default function CategorySection({
    data=[],
    onSave,
    onDelete,
    form,
    onEdit,
    setEdit
}) {
  return (
    <div>
    
      <CategoryForm onSave={onSave} value={form} />
      <CategoryTable data={data} onDelete={onDelete} onEdit={onEdit} onSave={onSave} setEdit={setEdit}/>
    </div>
  )
}


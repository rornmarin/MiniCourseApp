import React from 'react'
import { Input } from '../components/Input'
import { TextBox } from '../components/TextBox'

export default function LessionForm({onChange,chapterIndex,index,value}) {
  return (
    
    <div>
      <div className="header flex justify-between">
        <h1 className="text-xl font-bold pt-5">Lession</h1>
      </div>
      <div className='p-10 mb-4 py-2 my-5'>
        <Input 
        label='Lession'
        placeholder='Input Lession Name'
        value={value.name}
        name="name"
        onChangeHandler={(e) => onChange (e, index, chapterIndex)}
        />

        <TextBox
        placeholder='Write a short summary to lession'
        value={value.summary}
        name='summary'
        onChangeHandler={(e) => onChange(e,index,chapterIndex)}
        /> 
      </div>
    </div>
  )
}


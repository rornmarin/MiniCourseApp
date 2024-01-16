import React from 'react'
import { Input } from '../components/Input';
import { TextBox } from '../components/TextBox';
import LessionForm from '../Lession/LessionForm';

export default function InputChapterForm({
    value,
    form:lessonForm,
    onChange,
    chapterIndex,
    onAdd,
    onRemove,
    onChangeLesson,
    onRemoveLesson,
    onAddLesson,
}) {
  return (
    <div className="px-10">
     <div className="header flex justify-between">
       <h1 className="text-xl font-bold"> Chapter {chapterIndex + 1} </h1>
       <div className="flex gap-2">
         <button
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
           onClick={() => onRemove(chapterIndex)}>
           Delete 
         </button>

         <button 
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={() => onAdd(chapterIndex)}>
          Add
          </button>
       </div>
     </div>
     <Input
       label="Chapter"
       placeholder="Enter Chapter Name"
       value={value.name}
       name="name"
       onChangeHandler={(e) => onChange(e, chapterIndex)}
     />
     <TextBox
       placeholder="Write a short summary to your Chapter"
       value={value.summary}
       name="summary"
       onChangeHandler={(e) => onChange(e, chapterIndex)}
     /> 

     {lessonForm?.map((input, index) => {
       return (
         <>
           <LessionForm
             key={index}
             value={input}
             index={index}
             chapterIndex={chapterIndex}
             onChange={onChangeLesson}
           />
           <div className="flex gap-2">

             <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              onClick={() => onAddLesson(chapterIndex)}>
               Add
             </button>
             <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
               onClick={() => onRemoveLesson(chapterIndex, index)}  
             >
               Delete
             </button>
           </div>
         </>
       );
     })}
     {/* <pre>{JSON.stringify(form)}</pre> */}
   </div>
  )
}


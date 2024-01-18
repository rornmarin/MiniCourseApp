import React from 'react';
import { TextBox } from '../components/TextBox';
import { FormikInput } from '../components/Input';
import { ErrorMessage } from 'formik';
import { v4 as uuidv4 } from 'uuid';

export default function LessionForm({
  chapterIndex,
  lessonindex,
  props,
  lesson,
  push,
  remove
}) {
  return (

    <div>
      
      <div className='px-20 text-left'>

            <FormikInput 
            label='Lession'
            placeholder='Input Lession Name'
            name={`chapters.${chapterIndex}.lessons.${lessonindex}.name`}
            value={lesson.name}
            onChangeHandler={props.handleChange}
            onBlurHandler={props.handleBlur}
            />
            <ErrorMessage
              name={`chapters.${chapterIndex}.lessons.${lessonindex}.name`}
              component={"div"}
              className="text-red-500"
            />

            <TextBox
              label={"Summary"}
              placeholder="Write a short summary to your lesson"
              value={lesson.summary}
              name={`chapters.${chapterIndex}.lessons.${lessonindex}.summary`}
              onChangeHandler={props.handleChange}
              onBlurHandler={props.handleBlur}
            /> 
            <ErrorMessage
              name={`chapters.${chapterIndex}.lessons.${lessonindex}.summary`}
              component={"div"}
              className="text-red-500"
            />

            <div className='flex gap-2 justify-end mt-5'>
              <button
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                onClick={() => remove(lessonindex)}>
                Delete 
              </button>
              <button
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                onClick={() => {
                  push({
                    id: uuidv4(),
                        name: "",
                        summary:"",
                  })
                }}>
                Add 
              </button>
            </div>

      </div>

    </div>
  )
}


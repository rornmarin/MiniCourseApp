import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { FormikInput } from '../components/Input';
import { FieldArray, ErrorMessage } from 'formik';
import { TextBox } from '../components/TextBox';
import LessionForm from '../Lession/LessionForm';

export default function ChapterForm({
    chapterIndex,
    chapter,
    props,
    push,
    remove,
  }) {

    return ( 
      <>
      <h1 className='mb-5 text-2xl font-bold'>Chapters</h1>
        <div className="py-5 my-5 border-primary700 rounded-xl bg-indigo-100 shadow-lg shadow-slate-100 mx-10">
          <div className="space-y-4 w-full">
            <div className="header justify-between">
            <div className="flex gap-2">
              <button
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                onClick={() => remove(chapterIndex)}>
                Delete 
              </button>

              <button 
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                onClick={() => 
                  push ({
                    id : uuidv4(),
                    name: "",
                    summary: "",
                    lessons: [
                      {
                        id: uuidv4(),
                        name: "",
                        summary:"",
                      }
                    ]
                  })
                }>
                Add
                </button>
            </div>
            <div>

            </div>
            <div>
              <FormikInput
                label="Chapter"
                name={`chapters.${chapterIndex}.name`}
                placeholder="Input Chapter Title"
                onBlurHandler={props?.handleBlur}
                onChangeHandler={props?.handleChange}
                value={chapter.name}
              />
              <ErrorMessage 
                name={`chapters.${chapterIndex}.name`} 
                component={'dev'} 
                className='text-red-500'/>

              <TextBox
                label="Summary"
                placeholder="Write a short summary to your Chapter"
                value={chapter.summary}
                name={`chapters.${chapterIndex}.summary`}
                onChangeHandler={props.handleChange}
                onBlurHandler={props.handleBlur}
              />
              <ErrorMessage name={`chapters.${chapterIndex}.name`} component={'dev'} className='text-red-500'/>

            </div>
              <FieldArray name = {`chapters.${chapterIndex}.lessons`} >
                {({insert, remove, push}) => {
                  return (

                    <div>
                    {props?.values?.chapters[chapterIndex].lessons?.length > 0 && 
                      props?.values?.chapters[chapterIndex].lessons.map((lesson,lessonindex) => {
                        return (
                          <LessionForm
                          key={lesson?.id}
                          lessonindex = {lessonindex}
                          chapterIndex = {chapterIndex}
                          push = {push}
                          remove = {remove}
                          lesson = {lesson}
                          props={props}
                          />
                        )
                      })}
                    </div>
                  )
                }}
              </FieldArray>
            </div>
          </div>
        </div>
      </>
    );
  }
  



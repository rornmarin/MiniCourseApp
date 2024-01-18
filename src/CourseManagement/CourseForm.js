import React from 'react'
import SelectOption from "../components/SelectOption";
import { v4 as uuidv4 } from 'uuid';
import ChapterForm from '../Chapters/ChapterForm';
import { Formik, Form, FieldArray,ErrorMessage } from 'formik';
import { FormikInput } from '../components/Input';
import { validateCourse } from '../schema';
import { TextBox } from '../components/TextBox';

export default function CourseForm ({data,onSave,value}) {


  const initialValues = {
    name: "",
    category_id: "",
    summary: "",
        chapters: [
          {
            id: uuidv4(),
            name: "",
            summary: "",
            lessons: [
              {
                id: uuidv4(),
                name: "",
                summary: "",
              },
            ],
          },
        ],
  };

    return (
      <Formik 
      // enableReinitialize={true}
      initialValues={value?.id ? value :initialValues} 
      validationSchema={validateCourse} 
      onSubmit={(values, actions) => {
        actions.resetForm();
        if (value?.id){
          onSave(values, true);
        } else {
          onSave(values, false);
        }
      }}

      >
        {(props) => {
          return (
            <Form onSubmit={(e) => {
              props.handleSubmit(e);
            }}
            className='px-10 py-10 border-primary700 rounded-xl bg-indigo-200 shadow-lg shadow-slate-100 mx-10'>
            <div className="header flex justify-between px-10" >
                <h1 className='font-sans text-xl font-bold'> Add New Course</h1>
                  <div className="flex gap-2">

                    <button  
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        type='submit'>
                        {value?.id ? "Update Course" : "Save"}
                    </button>

                    <button 
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        type='reset'
                    >
                      Reset
                    </button>

                  </div>
                </div>

            <div className='px-10 text-left '>

            <FormikInput
              label="Course"
              placeholder="Input Course Name"
              name="name"
              onBlurHandler={props?.handleBlur}
              onChangeHandler={props?.handleChange}
              value={props?.values?.name}
            />
            <ErrorMessage name='name' component="div" className='text-red-500' />

            <TextBox
              label="Summaries"
              name="summary"
              placeholder="Summaries"
              onBlurHandler={props?.handleBlur}
              onChangeHandler={props?.handleChange}
              value={props?.values?.summary}
            />
            <ErrorMessage name='summary' component="div" className='text-red-500' />

            <SelectOption
                label="Category"
                data={data}
                name = "category_id"
                onBlurHandler={props?.handleBlur}
                onChangeHandler={props?.handleChange}
                value={props?.values?.category_id}
               

            />
            <ErrorMessage name='category_id' component="div" className='text-red-500' />

          </div>

            <FieldArray name = "chapters">
              {({insert, remove, push}) => (

                <>
                {props?.values?.chapters.length > 0 && 
                  props?.values?.chapters.map((chapter,chapterindex) => (

                    <ChapterForm
                      key={chapter.id}
                      chapterIndex = {chapterindex}
                      chapter = {chapter}
                      props = {props}
                      remove = {remove}
                      push = {push}
                      />

                  ))}
                </>
              )}
            </FieldArray>
          
        </Form>
          )
        }}
      </Formik>
    )
}

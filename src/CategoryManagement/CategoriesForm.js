import React from 'react';
import { FormikInput } from '../components/Input';
import { Formik,Form,ErrorMessage } from 'formik';
import { validationCategory } from '../schema';

export default function CategoryForm ({ onSave}) {

  const initialValues = {
    id:'',
    name:'',
    code:''
  }

  const onSubmit =(values, {resetForm}) =>{
  
    if(values?.id){
      onSave(values,true)
      return
    }
    resetForm();
    onSave (values,false)
    console.log('value--------------:',values)

  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validateYupSchema={validationCategory} validationSchema={validationCategory}>
      <Form className='justify-center'>

      <div  className="flex justify-between px-20 ">       
        <h1 className='font-sans text-xl'>Add New Category </h1>

        <button 
          type='submit' 
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
         save

        </button>
      </div>


      <div className='px-20 text-left'>
        
        <div>
          <FormikInput label='Category' name={'name'} placeholder="Input Category Name"/>
          <ErrorMessage name='name' component="div" className='text-red-500' />
        </div>
        <div>
        <FormikInput label='Code' name={'code'} placeholder="Input Code"/>
        <ErrorMessage name='code' component="div" className='text-red-500' />
        </div>
      </div>

      </Form>
    </Formik>
  );
};


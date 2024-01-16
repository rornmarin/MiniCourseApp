import React,{useEffect,useState} from 'react';
import { Input } from '../components/Input';
import { Formik } from 'formik';

export default function CategoryForm ({ onSave,value}) {

  const initialValues = {
    id: value?.id || '',
    name: value?.name || '',
    code: value?.code || '',
  }

  const onSubmit =(value, {resetForm}) =>{
    onSave (value,value?.id? true:false);
    resetForm();
  }
    
//  const [form, setForm] = useState ({
//   id: "",
//   name: "",
//   code: "",
//  });
  
//   const onChange = (e) => {
//     const name= e.target.name
//     const value = e.target.value
//     console.log("value",value)
//     setForm({
//       ...form,
//       [name]:value
//     })
//   }

//   const onSaveCategory = (e,params) => {

//     e.preventDefault();

//     if (!form?.name || !form?.code){
//       alert ("Please fill in Category Form");
//       return;
//     }
//     setForm ({ name: "" ,code:"" });
//     onSave(form,params);

//   };
//   console.log('form:',form)

//   useEffect(() => {
//     if (value) {
//       setForm(value);
//       return;
//     }
//     setForm({ name: "", code: "" });
//   }, [value]);


  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className='justify-center' onSubmit={onSubmit}>

      <div  className="flex justify-between px-20 ">       
        <h1 className='font-sans text-xl'>Add New Category </h1>

        <button 
          type='submit' 
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={(e) =>
              value?.id ? onSaveCategory(e, true) : onSaveCategory(e, false)
            } >{value?.id ? "Update" : "Save"}</button>
      </div>


      <div className='px-20 '>
        <Input 
          placeholder="input Category"
          label="Name"
          name="name"

        />
        <Input
          placeholder='input Code'
          label="Code"
          name="code"

        />
      </div>

      </Form>
    </Formik>
  );
};


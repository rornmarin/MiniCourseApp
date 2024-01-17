import React,{ useState, useEffect} from 'react'
import { Input } from '../components/Input'
import { TextBox } from '../components/TextBox'
import SelectOption from "../components/SelectOption";
import { v4 as uuidv4 } from 'uuid';
import ChapterForm from '../Chapters/ChapterForm';
import { Formik, Form, Field,ErrorMessage } from 'formik';
import { FormikInput } from '../components/Input';
import * as Yup from 'yup';
import { CourseSchema } from '../schema';


// const validationSchema = Yup.object({
//   name: Yup.string().required('Course name is required'),
//   summary: Yup.string().required('Summary is required'),
//   // category_id: Yup.string().required('Category is required'),
//   // chapters: Yup.array().of(
//   //   Yup.object().shape({
//   //     name: Yup.string().required('Chapter name is required'),
//   //     summary: Yup.string().required('Chapter summary is required'),
//   //     lessons: Yup.array().of(
//   //       Yup.object().shape({
//   //         name: Yup.string().required('Lesson name is required'),
//   //         summary: Yup.string().required('Lesson summary is required'),
//   //       })
//   //     ),
//   //   })
//   // ),
// });

export default function CourseForm ({data,onSave,value}) {


  const [form, setForm] = useState( {
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
  });
  
    const onChangeCourse = (e) => {
        const {name, value} = e.target;
        setForm((pre) => (
          {
            ...pre,
            [name]:value,
          }
        ))
    }

    // const onSaveCourse =(values, {resetForm}) =>{
    //   onSave(values,values?.id? true : false);
    //   resetForm();
    //   console.log('value--------------:',values)
    // }

    const onSaveCourse = (values) => {
      console.log(values);
      console.log('category_id',values)
    
      if (form?.id) {
        onSave(values, true);
      } else {
        onSave(values, false);
      }
    
  
    
      setForm({
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
      });
    };

      const onAddChapter = (chapterIndex) => {
        setForm((pre) => {
          const result = { ...pre };
    
        result.chapters.push({
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
        });
        return(result);

        })
        
      };

      const onChangeChapter = (e, index) => {
        const { name, value } = e.target;
    
        // const result = form?.chapters;
    
        // result[index][name] = value;
    
        setForm((pre) => {
          const result = {...pre };
          result.chapters[index][name] = value;
          return result;
        });
      };

      const onAddLesson = (chapterIndex) => {
        // console.log(form, chapterIndex);
        // const result = { ...form };
        // console.log(result?.chapters);
        // result?.chapters[chapterIndex].lessons?.push({
        //   id: uuidv4(),
        //   name: "",
        //   summary: "",
        // });
    
        // setForm(result);
        setForm((pre) => {
          const result = {...pre };
          result.chapters[chapterIndex].lessons.push({
            id: uuidv4(),
            name:'',
            summary:'',
          });
          return result
        })
      };

      const onRemoveLesson = (chapterIndex, index) => {
        // console.log(chapterIndex);
        // const result = { ...form };
    
        // if (result.chapters[chapterIndex].lessons?.length === 1) {
        //   alert("There is no lesson left !!! you cannot delete any more lesson");
        //   return;
        // }
        // result.chapters[chapterIndex].lessons?.splice(index, 1);
        // setForm(result);
        setForm ((pre) => {
          const result = { ...pre };
          if(result.chapters[chapterIndex].lessons.length === 1){
            alert('There is no lesson')
            return result;
          }
          result.chapters[chapterIndex].lessons.splice(index,1);
          return result;
        })
      };

      const onChangeLesson = (e, index, chapterIndex) => {
    
        console.log(chapterIndex, index);
        const { name, value } = e.target;
    
        const arr = { ...form };
    
        arr.chapters[chapterIndex].lessons[index][name] = value;
        setForm(arr);
      };

      const onRemoveChapter = (chapterIndex) => {
        console.log(chapterIndex);
        const result = { ...form };
    
        if (result?.chapters?.length === 1) {
          alert("There is no chapters left !!! you cannot delete any more chapter");
          return;
        }
        result?.chapters.splice(chapterIndex, 1);
        setForm(result);
      };

    return (
      <Formik initialValues={form} onSubmit={onSaveCourse} validationSchema={CourseSchema}>
        <Form className='px-10 py-10 border-primary700 rounded-xl bg-indigo-200 shadow-lg shadow-slate-100 mx-10'>
          <div className="header flex justify-between px-10" >
              <h1 className='font-sans text-xl font-bold'> Add New Course</h1>
                <div className="flex gap-2">

                  <button  
                      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      type='submit'>
                      {form?.id ? "Update Course" : "Save"}
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
          />
          <ErrorMessage name='name' component="div" className='text-red-500' />

          <FormikInput
            label="Summaries"
            name="summary"
            placeholder="Summaries"
          />
          <ErrorMessage name='summary' component="div" className='text-red-500' />

          <SelectOption
              label="Category"
              data={data}
              onChangeHandler={onChangeCourse}
              name = "category_id"
              value={form?.category_id}
          />
          {/* <ErrorMessage name='category_id' component="div" className='text-red-500' /> */}

        </div>

        <ChapterForm
          onAddChapter={onAddChapter}
          form={form?.chapters}
          onChangeForm={onChangeChapter}
          onAddLesson={onAddLesson}
          onRemoveLesson={onRemoveLesson}
          onChangeLesson={onChangeLesson}
          onRemoveChapter={onRemoveChapter}
          />
      </Form>
      </Formik>
    )
}

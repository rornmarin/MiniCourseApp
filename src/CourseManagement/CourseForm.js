import React,{ useState, useEffect} from 'react'
import { Input } from '../components/Input'
import { TextBox } from '../components/TextBox'
import SelectOption from "../components/SelectOption";
import { v4 as uuidv4 } from 'uuid';


export default function CourseForm ({data,onSave,value}) {

    const [form, setForm] = useState({

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
      console.log('Form-------------:',form)

    const onChangeCourse = (e) => {
        const {name, value} = e.target;
        setForm((pre) => {
            return {
                ...pre,
                [name]:value,
            }
        })
    }

    const isEmpty = (value) =>
    value === null ||
    value === "" ||
    (Array.isArray(value) && value.length === 0);


    const validateObject = (obj) => {
        for (const [key, value] of Object.entries(obj)) {
          if (isEmpty(value)) {
            return false;
          }
    
          if (typeof value === "object" && !validateObject(value)) {
            return false;
          }
        }
        return true;
    };

    const onSaveCourse = () => {

        // if (!validateObject(form)) {
        //   alert("Please fill in Courses Form");
        //   return;
        // }
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
        if (form?.id) {
          onSave({ ...form }, true);
          return;
        }
        onSave({ ...form, id: uuidv4() }, false);
      };

      useEffect(() => {
        if (value?.id) {
          setForm(value);
          return;
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
      }, [value]);
      console.log(value);

  return (
    <div>

        <div className="header flex justify-between">
              <h1 className='font-sans text-xl px-20'> Add New Course</h1>
              <div className="flex gap-2">

                <button  
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    onClick={onSaveCourse}>
                    {form?.id ? "Update Course" : "Save"}
                </button>

                <button 
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    onClick={() =>
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
                        })
                    }
                >
                  Reset
                </button>

              </div>
            </div>

        <div className='px-20 '>
        <Input
          label="Course"
          placeholder="Input Course Name"
          name="name"
          value={form.name}
          onChangeHandler={onChangeCourse}
        />

        <TextBox
          label="Summaries"
          name="summary"
          placeholder="Summaries"
          value={form.summary}
          onChangeHandler={onChangeCourse}
          
        />

        <SelectOption
            label="Category"
            data={data}
            onChangeHandler={onChangeCourse}
            name = "category_id"
            value={form?.category_id}
        />
      </div>
    </div>
  )
}

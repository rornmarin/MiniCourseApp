import React,{ useState, useEffect} from 'react'
import { Input } from '../components/Input'
import { TextBox } from '../components/TextBox'
import SelectOption from "../components/SelectOption";
import { v4 as uuidv4 } from 'uuid';
import ChapterForm from '../Chapters/ChapterForm';


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

      const onAddChapter = (chapterIndex) => {
        console.log(chapterIndex);
    
        const result = { ...form };
    
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
        setForm(result);
      };

      const onChangeChapter = (e, index) => {
        const { name, value } = e.target;
        console.log("chapter index", index);
    
        const result = form?.chapters;
    
        result[index][name] = value;
    
        setForm((pre) => {

          return {
            ...pre,
            chapters: result,
          };
        });
      };

      const onAddLesson = (chapterIndex) => {
        console.log(form, chapterIndex);
        const result = { ...form };
        console.log(result?.chapters);
        result?.chapters[chapterIndex].lessons?.push({
          id: uuidv4(),
          name: "",
          summary: "",
        });
    
        setForm(result);
      };

      const onRemoveLesson = (chapterIndex, index) => {
        console.log(chapterIndex);
        const result = { ...form };
    
        if (result.chapters[chapterIndex].lessons?.length === 1) {
          alert("There is no lesson left !!! you cannot delete any more lesson");
          return;
        }
        result.chapters[chapterIndex].lessons?.splice(index, 1);
        setForm(result);
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
    <div className='px-10 py-10 border-primary700 rounded-xl bg-indigo-200 shadow-lg shadow-slate-100 mx-10'>
        <div className="header flex justify-between px-10" >
              <h1 className='font-sans text-xl font-bold'> Add New Course</h1>
              <div className="flex gap-2">

                <button  
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    onClick={onSaveCourse}>
                    {form?.id ? "Update Course" : "Save"}
                </button>

                <button 
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
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

        <div className='px-10 '>
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

      <ChapterForm
        onAddChapter={onAddChapter}
        form={form?.chapters}
        onChangeForm={onChangeChapter}
        onAddLesson={onAddLesson}
        onRemoveLesson={onRemoveLesson}
        onChangeLesson={onChangeLesson}
        onRemoveChapter={onRemoveChapter}
        />
    </div>
  )
}

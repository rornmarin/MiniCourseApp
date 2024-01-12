import React, { useState } from 'react';
import { Input } from './components/Input';
import { SelectInput } from './components/Input';
import { Button } from './components/Button';

export default function CourseManagement() {
  const [form, setForm] = useState({ course_name: '', summaties: '' });
  const [courses, setCourses] = useState([]);

  const handleAddClick = () => {
    if (form.course_name.trim() === '' || form.summaties.trim() === '') {
      return;
    }
  
    const newCourse = {
      id: courses.length + 1, 
      course_name: form.course_name,
      summaties: form.summaties,
    };
  
    setCourses((prevCourses) => [...prevCourses, newCourse]);
  
    setForm({ course_name: '', summaties: '' });
  };

  console.log(courses)

  return (
    <div>
      <Button className="content-end my-5" Button="Add" onClick={handleAddClick} />
      <div className="w-full flex items-center justify-center">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-10 my-10">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Summarise</th>
              <th scope="col">Category</th>
              <th scope="col">Total Chapter</th>
              <th scope="col">Total Lesson</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td className="border border-gray-700">{course.id}</td>
                <td className="border border-gray-700">{course.course_name}</td>
                <td className="border border-gray-700">{course.summaties}</td>
                <td className="border border-gray-700">{course.Category}</td>
                <td className="border border-gray-700">0</td> {/* Update with proper counts */}
                <td className="border border-gray-700">0</td> {/* Update with proper counts */}
                <td className="border border-gray-700">
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Input
          label="Name"
          name="course_name"
          placeholder="Name"
          value={form.course_name}
          onset={(value) => setForm({ ...form, course_name: value })}
        />
        <SelectInput
          label="Category"
          name="Category"
          placeholder="Please select category"
          value={form.Category}
          onset={(value) => setForm({ ...form, Category: value })}
        />
        <Input
          label="Summaries"
          name="summaties"
          placeholder="Summaries"
          value={form.summaties}
          onset={(value) => setForm({ ...form, summaties: value })}
        />
      </div>
    </div>
  );
}
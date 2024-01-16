import React from 'react'
import InputChapterForm from './InputChapterForm';

export default function ChapterForm({
    form: chapterForm,
    onAddChapter,
    onChangeForm,
    onChangeLesson,
    onAddLesson,
    onRemoveChapter,
    onRemoveLesson,
  }) {

    return ( 
      <>
      <h1 className='mb-5 text-2xl font-bold'>Chapters</h1>
        <div className="py-5 my-5 border-primary700 rounded-xl bg-indigo-100 shadow-lg shadow-slate-100 mx-10">
          <div className="space-y-4 w-full">
            <div className="header justify-between">
              {chapterForm?.map((chapter, index) => {
                return (
                  <main key={index} className="mb-9">
                    <InputChapterForm
                      value={chapter}
                      form={chapterForm[index]?.lessons}
                      onChange={onChangeForm}
                      chapterIndex={index}
                      index={index}
                      onAdd={onAddChapter}
                      onRemove={onRemoveChapter}
                      onChangeLesson={onChangeLesson}
                      onRemoveLesson={onRemoveLesson}
                      onAddLesson={onAddLesson}
                    />
                  </main>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
  



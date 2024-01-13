import React from 'react'
import { Input } from './components/Input'
import { Button } from './components/Button'

export default function Chapters() {
  return (
    <div>
        <div className="flex justify-between px-10 py-5 ">
            <h1 className='font-sans text-xl'>Chapter</h1>
            <Button Button={"Add Chapter"} />
        </div>
        <div className="border border-1 border-sky-700 p-4 mb-4 mx-10">
        <div className=" px-20 ">
            <Input name={"name"} placeholder={"Title_chapter"} label={"Name"}></Input>
            <Input name={"summaries"} placeholder={"summaries"}label={"Summaries"} />
        </div>
        
        <div className="flex justify-between py-5">
            <h1 className='font-sans text-xl'>Lession</h1>
            <Button Button={"Add Lession"} />
        </div>
        <div className="border border-1 border-sky-700 p-4 mb-4 px-20">
            <Input name={"name"} placeholder={"lession_name"} label={"Name"}></Input>
            <Input name={"chapter"} placeholder={"chapter"}label={"Chaptere"} />
        </div>
        
        </div>
        <div className="flex justify-left px-10 py-5"><Button Button={"Save"}/> <Button Button={"Reset"}/></div>
    </div>
  )
}



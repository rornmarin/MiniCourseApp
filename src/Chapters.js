import React from 'react'
import { Input } from './components/Input'
import { Button } from './components/Button'

export default function Chapters() {
  return (
    <div>
        <div className="flex justify-between px-10 py-5 ">
            <h1 className='font-sans text-xl'>Chapter</h1>

            <Button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            Button={"Add Chapter"} />

        </div>
        <div className="border border-1 border-sky-700 p-4 mb-4 mx-10">
        <div className=" px-20 ">
            <Input name={"name"} placeholder={"Title_chapter"} label={"Name"}></Input>
            <Input name={"summaries"} placeholder={"summaries"}label={"Summaries"} />
        </div>
        
        <div className="flex justify-between py-5">

            <h1 className='font-sans text-xl'>Lession</h1>

            <Button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            Button={"Add Lession"} />
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



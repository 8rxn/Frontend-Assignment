
import { pizzaSchema } from '../constants'
import React from 'react'

const Editor = ({value,handler,setUiSchemaString}) => {
  return (
    <div className='flex flex-row gap-10 items-center'>
      <div className='flex flex-col gap-4'>
      <h2 className='font-bold text-2xl'>Enter Your JSON Schema Here:</h2>
      <textarea  type="text" value={value} placeholder={"Example JSON Schema \n"+JSON.stringify(pizzaSchema).slice(0,100)+"..."} className='w-[40vw] h-[40vw] p-2 rounded-lg border-2 border-white' onChange={(e)=>{setUiSchemaString(e.target.value)}} />
      </div>
      <button className='bg-blue-600 px-5 py-1 rounded-lg ' onClick={handler}>Preview Form ⇒</button>
    </div>
  )
}

export default Editor
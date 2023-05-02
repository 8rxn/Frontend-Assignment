import React from 'react'

const ResultModal = ({json,toggle}) => {
  return (
    <div className="w-full flex justify-center items-center aspect-square h-full top-[50%] left-[50%] fixed -translate-x-[50%] -translate-y-[50%] z-[2000] rgba(255,255,255,0.5) rounded-lg overflow-hidden">
    <div className="relative w-full max-w-2xl h-[60%]">

        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 h-full overflow-auto">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    JSON To Be sent to Backend
                </h3>
                <button type="button" onClick={()=>{toggle(false)}} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                </button>
            </div>
            <div className='flex flex-row gap-10 items-center'>
      
      <textarea  type="text" value={JSON.stringify(json)} disabled className='w-full p-2 rounded-lg border-2 border-white' onChange={(e)=>{setUiSchemaString(e.target.value)}} />
    </div>
        </div>
    </div>
</div>
  )
}

export default ResultModal
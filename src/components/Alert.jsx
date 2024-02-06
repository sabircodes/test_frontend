import React from 'react'

function Alert({type ,text}) {
  return (
    <div className="absolute top-10 left-0 right-0 flex items-center justify-center">
   
        <div className={`${ type==='danger'?'bg-red-600':'bg-blue-700'} p-2 text-indigo-50 leading-none lg:rounded-full flex lg:inline-flex`} role='alert'>
            <p className={`${type==='danger'?'bg-red-600':'bg-blue-800' } flex rounded-full uppercase px-2 py-1 font-semibold mr-3`}>{type==='danger'?'Failed':'Success'}</p>
            <p className='mr-2 text-left' >{text}</p>
        </div>
    </div>
  )
}

export default Alert
import React from 'react'

const Form = () => {
  return (
    <form className='flex w-2/6 m-auto rounded-md h-16 my-10 border border-primary'>
        <input placeholder='example@gmail.com' className='outline-none w-4/5 rounded-l-md p-4'/>
        <button className='w-1/5 bg-primary text-white rounded-r-md h-16 px-4'>Submit</button>
    </form>
  )
}

export default Form
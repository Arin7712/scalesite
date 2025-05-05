import React from 'react'
import Timeline from './Timeline'

const Process = () => {
  return (
    <div className='flex px-[6rem] py-[4rem] md:px-[10rem] md:py-[8rem]'>
      <div className='w-[50%]'>
        <h1>Process</h1>
      </div>
      <div>
        <Timeline/>
      </div>
    </div>
  )
}

export default Process

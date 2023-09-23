import React from 'react'
import Bg from '../assets/images/bgs/designBg.png'
import DesignImg from '../assets/images/design.png'

const Design = () => {
  return (
    <>
      <section id="design" className=' mt-32'>
        <div className="bgLeft absolute z-0 -top-20">
          <img src={Bg} className='w-full left-0  ' alt="" />
        </div>
        <div className="flex flex-wrap justify-center items-center mx-auto">

          <div className="  z-50">
            <img src={DesignImg} className='z-50  ' alt="" />
          </div>
          <div className="textContainer z-50">
            <h3 className='text-md font-semibold'>Design Process</h3>
            <h1 className='text-2xl text-center md:text-start md:text-6xl text-[#614AD3] font-bold mt-4'>
                Easy than you think,
                <br />
                Use your prompt.
                <br />
                Make it happen!
            </h1>
            <h2 className='text-[#614AD3] md:text-xl mt-10'> <span className='font-semibold text-black'>Step 1: </span>Input your amazing prompt to generate costumes.</h2>
            <h2 className='text-[#614AD3] md:text-xl mt-5'> <span className='font-semibold text-black'>Step 2: </span>Select a design that you want to proceed.</h2>
            <h2 className='text-[#614AD3] md:text-xl mt-5'> <span className='font-semibold text-black'>Step 3: </span>If you not satisfied, change the prompt or re-generate designs.</h2>
          </div>
        </div>
      </section>
    </>
  )
}

export default Design

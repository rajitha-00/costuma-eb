import React from 'react'
import ReactPlayer from 'react-player/youtube'
const About = () => {
  return (
    <>
      <section id="about" className='about p-20'>
        <div className="flex justify-center items-center  mx-auto lg:w-[90%]">

          <div className=" lg:w-1/2">
          <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
          </div>
          <div className="textContainer lg:w-1/2 z-50">
            <h3 className='text-md font-semibold'>Who we are</h3>
            <h1 className='md:text-4xl text-[#614AD3] font-bold mt-4 z-50'>
            At Costuma, we're not just a brand; we're a creative revolution.
            We believe in the magic that happens when creativity meets technology,
            and it's our passion to bring that magic to life through costume design.
            </h1>
            <h3 className='text-md font-semibold mt-10'>What We Offer</h3>
            <ul className='mt-'>
              <li>
                <h2 className='text-black text-xl mt-5'>AI-Powered Costume Generation</h2>
              </li>
              <li>
                <h2 className='text-black text-xl mt-5'>Costuma Marketplace</h2>
              </li>
              <li>
                <h2 className='text-black text-xl mt-5'>News and Updates</h2>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default About

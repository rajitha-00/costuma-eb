import React from 'react'
import Bg from '../assets/images/bgs/marketBg.png'
import MarketImg from '../assets/images/market.png'
const Marketplace = () => {
  return (
    <>
      <div className="absolute h-[80%]  z-0 right-0 ">
          <img src={Bg} className='w-full ' alt="" />
      </div>
      <section id='market' className='mt-36'>
        <h1 className='text-center md:text-8xl font-bold '>
            Marketplace
        </h1>
        <div className="flex justify-center items-center mx-auto mt-20">

          <div className="textContainer p-20">
            <h1 className='md:text-6xl text-[#614AD3] font-bold mt-4'>
                Discover Costumes Created 
                <br />
                by Our Community
            </h1>
            <ul cl>
              <li>
                <h2 className='text-black text-xl mt-5'>Shop for Unique and Customizable Costumes.</h2>
              </li>
              <li>
                <h2 className='text-black text-xl mt-5'>Find Your Perfect Costume for Every Occasion.</h2>
              </li>
              <li>
                <h2 className='text-black text-xl mt-5'>Support Independent Designers and Creators.</h2>
              </li>
              <li>
                <h2 className='text-black text-xl mt-5'>Chat with tailors and make your designs into real.</h2>
              </li>
              <li>
                <h2 className='text-black text-xl mt-5'>Join the Costuma Marketplace and Start Selling Your Designs!</h2>
              </li>
            </ul>
          </div>
          <div className=" bg-white p-20">
            <img src={MarketImg} className='z-50  ' alt="" />
          </div>
        </div>
      </section>
 
    </>
  )
}

export default Marketplace

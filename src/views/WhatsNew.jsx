import React from 'react'
import Bg from '../assets/images/bgs/howBg.png'
import Download from '../assets/images/icons/download.png'
import Profile from '../assets/images/icons/account.png'
import Soso from '../assets/images/icons/soso.png'
import Play from '../assets/images/icons/play.png'
import App from '../assets/images/icons/app.png'
import Whats from '../assets/images/whats.png'


const WhatsNew = () => {
  return (
    <>
        <section id='new' className='mt-32'>
            <div className="bgright absolute z-0 right-0 top-[80%]">
                <img src={Bg} className='w-full ' alt="" />
            </div>
            <h1 className='text-center text-3xl md:text-8xl font-bold'>
                How it works?
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-around mt-10 md:mt-40 z-50">
                <div className="containerCard items-center justify-center text-center mt-5 ">
                    <div className="iconBox w-20 h-20 rounded-[20px] bg-[#614ad393] mx-auto justify-center items-center flex">
                        <img src={Download} className='w-10 h-10 m-auto' alt="" />
                    </div>
                    <h2 className="text-center md:text-2xl font-semibold mt-5">Download For Free</h2>
                </div>
                <div className="containerCard mt-5 ">
                    <div className="iconBox w-20 h-20 mx-auto rounded-[20px] bg-[#614ad393] justify-center items-center flex">
                        <img src={Profile} className='w-10 h-10 m-auto' alt="" />
                    </div>
                    <h2 className="text-center md:text-2xl font-semibold mt-5">Open an Account</h2>
                </div>
                <div className="containerCard mt-5 ">
                    <div className="iconBox w-20 h-20 mx-auto rounded-[20px] bg-[#614ad393] justify-center items-center flex">
                        <img src={Soso} className='w-10 h-10 m-auto' alt="" />
                    </div>
                    <h2 className="text-center md:text-2xl font-semibold mt-5">Enjoy our App</h2>
                </div>
            </div>
            <div className="DownloadContainer h-50 w-[80%] justify-center mt-10 md:mt-20 flex flex-wrap mx-auto rounded-[40px] ">
                <div className="textContainer md:p-10 mt-10">
                    <h3 className='text-center md:text-start text-md font-semibold text-[#614AD3]'>Download Now!</h3>
                    <h1 className='text-center md:text-start text-2xl md:text-5xl text-black font-bold mt-4'>
                        Download our 
                        <br />
                        Mobile Application 
                       
                    </h1>
                    <h2 className='text-black md:text-xl mt-5 md:mt-10'>Download Costuma mobile  app for <br /> IOS & Android to Unleash your way.</h2>
                    <div className="Button bg-[#614AD3] mx-auto md:mx-0 flex mt-5 p-2 rounded-[20px] w-52">
                        <div>
                            <img src={Play} alt="" />
                        </div>
                        <div className='ml-2'> 

                            <p className='text-white'>Download from</p>
                            <h2 className='text-white font-semibold md:text-2xl'>Play store</h2>
                        </div>
                    </div>
                    <div className="Button bg-black mx-auto md:mx-0 flex mt-5 p-2 rounded-[20px] w-52">
                        <div>
                            <img src={App} alt="" />
                        </div>
                        <div className='ml-2'>

                            <p className='text-white'>Download from</p>
                            <h2 className='text-white font-semibold md:text-2xl'>Play store</h2>
                        </div>
                    </div>
                </div>
                <div className="imgContainer lg:mt-28 items-end justify-end">
                    <img src={Whats} className='' alt="" />
                </div>
            </div>
        </section>
    </>
  )
}

export default WhatsNew

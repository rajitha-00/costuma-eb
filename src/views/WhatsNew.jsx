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
            <h1 className='text-center md:text-8xl font-bold'>
                How it works?
            </h1>
            <div className="flex justify-around mt-40 z-50">
                <div className="containerCard items-center justify-center text-center ">
                    <div className="iconBox w-20 h-20 rounded-[20px] bg-[#614ad393] mx-auto justify-center items-center flex">
                        <img src={Download} className='w-10 h-10 m-auto' alt="" />
                    </div>
                    <h2 className="text-center text-2xl font-semibold mt-5">Download For Free</h2>
                </div>
                <div className="containerCard">
                    <div className="iconBox w-20 h-20 mx-auto rounded-[20px] bg-[#614ad393] justify-center items-center flex">
                        <img src={Profile} className='w-10 h-10 m-auto' alt="" />
                    </div>
                    <h2 className="text-center text-2xl font-semibold mt-5">Open an Account</h2>
                </div>
                <div className="containerCard">
                    <div className="iconBox w-20 h-20 mx-auto rounded-[20px] bg-[#614ad393] justify-center items-center flex">
                        <img src={Soso} className='w-10 h-10 m-auto' alt="" />
                    </div>
                    <h2 className="text-center text-2xl font-semibold mt-5">Enjoy our App</h2>
                </div>
            </div>
            <div className="DownloadContainer h-50 w-[80%] justify-center mt-20 flex mx-auto rounded-[40px] ">
                <div className="textContainer p-10 mt-10">
                    <h3 className='text-md font-semibold text-[#614AD3]'>Download Now!</h3>
                    <h1 className='md:text-5xl text-black font-bold mt-4'>
                        Download our 
                        <br />
                        Mobile Application 
                       
                    </h1>
                    <h2 className='text-black text-xl mt-10'>Download Costuma mobile  app for <br /> IOS & Android to Unleash your way.</h2>
                    <div className="Button bg-[#614AD3] flex mt-5 p-2 rounded-[20px] w-52">
                        <div>
                            <img src={Play} alt="" />
                        </div>
                        <div className='ml-2'> 

                            <p className='text-white'>Download from</p>
                            <h2 className='text-white font-semibold text-2xl'>Play store</h2>
                        </div>
                    </div>
                    <div className="Button bg-black flex mt-5 p-2 rounded-[20px] w-52">
                        <div>
                            <img src={App} alt="" />
                        </div>
                        <div className='ml-2'>

                            <p className='text-white'>Download from</p>
                            <h2 className='text-white font-semibold text-2xl'>Play store</h2>
                        </div>
                    </div>
                </div>
                <div className="imgContainer mt-28 items-end justify-end">
                    <img src={Whats} className='' alt="" />
                </div>
            </div>
        </section>
    </>
  )
}

export default WhatsNew

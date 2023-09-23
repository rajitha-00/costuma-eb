import React from 'react'
import Left from '../assets/images/heroLeft.png'
import Right from '../assets/images/heroRight.png'

const Home = () => {
  return (
    <section className='home'>
      <div className="relative isolate px-6 pt-14 lg:px-8">

        <div className="mx-auto  max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="absolute z-0 lg:left-[20%]">
            <img src={Left} alt="" />
          </div>
          <div className="absolute z-0 -right-32 md:right-[1%] lg:right-[10%]">
            <img src={Right} alt="" />
          </div>
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next release.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center relative z-50">
            <h1 className="text-4xl font-bold z-50 tracking-tight text-gray-900 sm:text-6xl">
             Costuma
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Unleash your style, your way!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-full bg-indigo-600 px-12 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                GO!
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Home

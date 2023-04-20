import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'

export default function Modal({shows}) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
        <div onClick={() => setShowModal(true)} className="grid justify-center lg:mb-4 lg:text-left dark:bg-neutral-800/30 rounded-lg heropattern-diagonallines-zinc-900">
        <Link 
          href={`/shows`}
          className="group rounded-lg text-white border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
            <LazyLoadImage
             src={shows.image.original}
             alt={shows.name}
             effect='blur'
          />
          <h2 className={`mt-4 mb-3 text-2xl font-semibold`}>
                {shows.name}
                <span className="inline-block pl-2 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  &raquo;
                </span>
              </h2>
              <p className={`mb-2 max-w-[30ch] text-sm opacity-80`}>
              {shows.premiered}
              </p>
              <p className={` max-w-[30ch] text-sm opacity-80`}>
               {shows.language} | Rating: {shows.rating.average} IMDB
              </p>
        </Link>
      </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative my-6 mx-auto w-4/5">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg bg-zinc-950 relative flex flex-col w-full outline-none focus:outline-none">
                      
                {/*all shows body*/}
                <div className=" bg-dark-100 relative lg:py-20  mt-3 border border-transparent  heropattern-diagonallines-zinc-900">
        <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-full xl:px-5 lg:flex-row">
          <div className="flex flex-col w-screen p-10 items-center md:flex-col lg:flex-row">
            <div className="flex flex-col justify-center  relative lg:pr-10">
              <img src={shows.image.original} alt={shows.name} width={600} height={600} />
            </div>
            <div className="w-full mt-5 rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">

              <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 shadow-2xl rounded-xl
            relative z-10">
                <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8 text-white">
                  <div className="relative">
                    <span className="text-md font-semibold inline-block py-1 px-8 mb-2 rounded text-zinc-600 bg-gray-200 uppercase last:mr-0 mr-1">
                      {shows.network.name}
                    </span>
                    <h2 className={`mt-4 mb-3 text-5xl font-semibold`}>
                      {shows.name}
                    </h2>
                  </div>
                  <div className="relative">
                    <p className={`m-2 w-full text-md opacity-80`}>
                      {shows.language} | Rating: {shows.rating.average} IMDB
                    </p>
                    <p className={`m-2 w-full text-md opacity-80`}>
                      Genres : {shows.genres}
                    </p>
                    <p className={`m-2 mt-6 w-full text-sm opacity-80`}>
                      {shows.summary}
                    </p>
                    <p className={`mt-5 m-2 w-full text-md opacity-80`}>
                      Runtime : {shows.runtime}min
                    </p>
                  </div>
                  <div className="relative">
                    <a href={shows.officialSite} className="rounded-md bg-red-600 mb-5 hover:bg-red-800 p-2 pr-8 pl-8 font-bold">
                      Watch Now
                    </a>
                    <div className="flex mt-8 rounded border-b-2 border-grey-dark overflow-hidden">
                      <div className="bg-gray-500 shadow-border p-4 ">
                        <div className="w-4 h-4">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                          </svg>
                        </div>
                      </div>
                      <button className="block text-white text-md shadow-border bg-green hover:bg-green-dark text-sm py-3 px-4 font-sans uppercase font-bold">
                        Rent Today $2.99/-
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-white hover:bg-white hover:text-red-500 rounded-md background-transparent font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
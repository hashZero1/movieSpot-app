import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";

export default function Modal({ show }) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="grid justify-center lg:mb-4 lg:text-left dark:bg-neutral-800/30 rounded-lg heropattern-diagonallines-zinc-900 w-11/12 m-auto lg:w-full lg:m-0"
      >
        <Link
          href={`/shows`}
          className="group rounded-lg text-white border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <LazyLoadImage
            src={show.image.original}
            alt={show.name}
            effect="blur"
          />
          <h2 className={`mt-4 mb-3 text-2xl font-semibold`}>
            {show.name}
            <span className="inline-block pl-2 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              &raquo;
            </span>
          </h2>
          <p className={`mb-2 max-w-[30ch] text-sm opacity-80`}>
            {show.premiered}
          </p>
          <p className={` max-w-[30ch] text-sm opacity-80`}>
            {show.language} | Rating: {show.rating.average} IMDB
          </p>
        </Link>
      </div>
      {showModal ? (
        <>
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            exit={{ opacity: 1 }}
            className="justify-center w-screen items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none -mt-28 backdrop-blur-sm"
          >
            <div className="relative w-11/12 h-3/5 lg:w-4/5 lg:h-2/3 ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg bg-zinc-950 relative flex flex-col w-full outline-none focus:outline-none">
                {/*all show body*/}
                <div className="bg-dark-100 relative py-0 border border-transparent heropattern-diagonallines-zinc-900">
                  <div className="flex flex-col items-center justify-between max-w-full xl:px-5 lg:flex-row">
                    <div className="flex flex-col w-screen p-10 items-center md:flex-col lg:flex-row">
                      <div className="flex flex-col justify-center w-3/4 lg:w-3/5 relative lg:pr-10">
                        <img
                          src={show.image.original}
                          alt={show.name}
                          width={600}
                          height={600}
                        />
                      </div>
                      <div className="w-full rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                        <div
                          className="flex flex-col items-start justify-start py-2 px-2 shadow-2xl rounded-xl
            relative z-10"
                        >
                          <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8 text-white">
                            <div className="relative">
                              <span className="text-sm lg:text-md font-semibold inline-block py-1 px-8 mb-2 rounded text-zinc-600 bg-gray-200 uppercase last:mr-0 mr-1">
                                {show.network.name}
                              </span>
                              <h2
                                className={`mt-4 mb-3 text-4xl lg:text-5xl font-semibold`}
                              >
                                {show.name}
                              </h2>
                            </div>
                            <div className="relative">
                              <p className={`m-2 w-full text-md opacity-80`}>
                                {show.language} | Rating: {show.rating.average}{" "}
                                IMDB
                              </p>
                              <p className={`m-2 w-full text-md opacity-80`}>
                                Genres : {show.genres}
                              </p>
                              <p
                                className={`m-2 mt-6 w-full text-sm opacity-80`}
                              >
                                {show.summary}
                              </p>
                              <p
                                className={`mt-5 m-2 w-full text-md opacity-80`}
                              >
                                Runtime : {show.runtime}min
                              </p>
                            </div>
                            <div className="relative">
                              <a
                                href={show.officialSite}
                                className="rounded-md bg-red-600 mb-5 hover:bg-red-800 p-2 pr-8 pl-8 font-bold"
                              >
                                Watch Now
                              </a>
                              <div className="flex mt-8 rounded border-b-2 border-grey-dark overflow-hidden">
                                <div className="bg-gray-500 shadow-border p-4 ">
                                  <div className="w-4 h-4">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="w-6 h-6"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                                      />
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
          </motion.div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

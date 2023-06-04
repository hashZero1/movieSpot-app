import { useContext } from "react";
import { MovieContext } from "../Context";
import { motion } from "framer-motion";

const SinglePage = () => {
  const { show } = useContext(MovieContext);
  return (
    <div className="bg-black pb-10">
      {show ? (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          exit={{ opacity: 1 }}
          className=" bg-dark-100 relative w-11/12 mx-auto lg:py-20 rounded-lg mt-2 border border-transparent border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 heropattern-diagonallines-zinc-900"
        >
          <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-full xl:px-5 lg:flex-row">
            <div className="flex flex-col w-screen p-10 items-center md:flex-col lg:flex-row">
              <div className="flex flex-col justify-center relative lg:pr-10">
                <img
                  src={show.image.original}
                  alt={show.name}
                  width={600}
                  height={600}
                />
              </div>
              <div className="w-full mt-5 rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                <div
                  className="flex flex-col px-0 py-0 items-start justify-start lg:py-10 lg:px-10 shadow-2xl rounded-xl
             relative z-10"
                >
                  <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8 text-white">
                    <div className="relative">
                      <span className="text-md font-semibold inline-block py-1 px-8 mb-2 rounded text-zinc-600 bg-gray-200 uppercase last:mr-0 mr-1">
                        {show.network.name}
                      </span>
                      <h2 className={`mt-4 mb-3 text-5xl font-semibold`}>
                        {show.name}
                      </h2>
                    </div>
                    <div className="relative">
                      <p className={`m-2 w-full text-md opacity-80`}>
                        {show.language} | Rating: {show.rating.average} IMDB
                      </p>
                      <p className={`m-2 w-full text-md opacity-80`}>
                        Genres : {show.genres}
                      </p>
                      <p className={`m-2 mt-6 w-full text-sm opacity-80`}>
                        {show.summary}
                      </p>
                      <p className={`mt-5 m-2 w-full text-md opacity-80`}>
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
        </motion.div>
      ) : null}
    </div>
  );
};

export default SinglePage;

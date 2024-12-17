"use client";

import CopyUrlButton from "./CopyUrlButton";

import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";

const Slide = ({
  children,
  id,
  wrapperClasses,
  boxClasses,
  isLast
}: Readonly<{
  children: React.ReactNode;
  id: number;
  wrapperClasses?: string;
  boxClasses?: string;
  isLast?: boolean;
}>) => {
  return (
    <div id={`slide${id}`} className="slide-wrap bg-gradient-to-t from-white/10 dark:from-gray-950/30">
      <section className={`slide w-full ~p-4/20 min-h-screen sticky top-0 z-10 flex items-center ${wrapperClasses}`}>
        <div className={`relative min-h-[600px] bg-white dark:bg-gray-900 dark:text-white rounded-3xl w-full max-w-screen-2xl mx-auto ~px-6/24 ~py-8/24 shadow-2xl shadow-yellow-700 dark:shadow-none content-center font-semibold ~text-base/2xl ${boxClasses}`}>
          
          {children}

          <nav className="w-full lg:w-auto lg:absolute bottom-0 left-0 flex justify-center pt-8 lg:p-3 gap-2 mt-auto">
            {id !== 1 ? (
              <a className="btn border-slate-400 hover:border-black dark:hover:border-white transition border rounded-full w-9 h-9 flex text-black dark:text-white" href={`#slide${id-1}`}><IoIosArrowRoundUp className="m-auto"/></a>
            ) : (
              <button className="btn border-slate-400 border rounded-full w-9 h-9 flex text-black dark:text-white opacity-30" disabled aria-label="No Previous Slide"><IoIosArrowRoundUp className="m-auto"/></button>
            )}
            {!isLast ? (
              <a className="btn border-slate-400 hover:border-black dark:hover:border-white transition border rounded-full w-9 h-9 flex text-black dark:text-white" href={`#slide${id+1}`} aria-label="Next Slide"><IoIosArrowRoundDown className="m-auto"/></a>
            ) : (
              <button className="btn border-slate-400 border rounded-full w-9 h-9 flex text-black dark:text-white opacity-30" disabled aria-label="No Next Slide"><IoIosArrowRoundDown className="m-auto"/></button>
            )}
            <CopyUrlButton anchor={`slide${id}`} buttonText="Copy slide link" />
          </nav>

        </div>
      </section>
      {/* <div className="w-full bg-red h-[500px] relative z-50 pointer-events-none"></div> */}
    </div>
  )
}

export default Slide
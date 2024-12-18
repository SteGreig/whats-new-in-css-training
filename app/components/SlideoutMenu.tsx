"use client";

import { useState } from "react";
import pages from "../data/pages";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { GoArrowUpRight } from "react-icons/go";
import { HiBars3BottomLeft } from "react-icons/hi2";

const SlideoutMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Menu Trigger */}
      <button
        onClick={toggleMenu}
        className="w-10 h-10 rounded-full bg-white text-black left-2 bottom-2 fixed z-[51] flex justify-center items-center text-xl transition hover:scale-105 shadow-lg"
      >
        {isOpen ? <AiOutlineClose /> : <HiBars3BottomLeft />}
      </button>

      {/* Off-canvas menu */}
      <div
        className={`${isOpen ? "slideout-open shadow-2xl translate-x-0" : "-translate-x-full"} fixed top-0 left-0 h-screen w-full max-w-screen-sm bg-yellow-500 dark:bg-gray-900 z-50 transition duration-300 ~p-8/14`}
      >
        <div className="flex items-center mb-4 gap-4">
          <p className="font-primary font-normal text-xl">Menu</p>
          <span className="h-[2px] flex-1 bg-black dark:bg-yellow-500"></span>
        </div>
        <nav className="">
          <ul className="flex flex-col">
            {pages.map((page, i) => (
              <li key={i}>
                <Link
                  onClick={toggleMenu}
                  className="~text-lg/xl ~py-2/3 flex gap-2 items-center group leading-none transition-all duration-300 menu-item"
                  href={`${page.slug}`}
                >
                  <span>{page.title}</span>
                  <GoArrowUpRight className="opacity-0 -translate-x-2 group-hover:opacity-90 group-hover:translate-x-0 transition ~text-lg/2xl" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Backdrop for when menu is open */}
      <div
        className={`${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} fixed inset-0 bg-black/50 z-40 backdrop-blur-sm transition`}
        onClick={toggleMenu}
      ></div>
    </>
  );
};

export default SlideoutMenu;

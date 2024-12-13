import { spawn } from "child_process";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

const Navigation = ({
  title,
  nextLink,
  prevLink
} : {
  title: string;
  nextLink?: string;
  prevLink?: string;
}) => {

  const btnClass = 'w-10 h-10 rounded-full border border-black flex items-center justify-center shadow-md transition';

  return (
    <div className="w-full fixed bottom-0 right-0 ~p-2/6 flex items-center justify-end">
      <p className="mr-6">{title}</p>
      <nav className="">
        <ul className="flex gap-2">
          <li>
            {prevLink ? (
              <a className={`${btnClass} hover:text-black hover:scale-110 origin-right`} href={prevLink} aria-label="Previous Page">
                <IoIosArrowRoundBack className="text-2xl" />
              </a>
            ) : (
              <button className={`${btnClass} opacity-30`} aria-label="No Previous Page Link" disabled>
                <IoIosArrowRoundBack className="text-2xl" />
              </button>
            )}
          </li>
          <li>
            {nextLink ? (
              <a className={`${btnClass} hover:text-black hover:scale-110 origin-left`} href={nextLink} aria-label="Next Page">
                <IoIosArrowRoundForward className="text-2xl" />
              </a>
            ) : (
              <button className={`${btnClass} opacity-30`} aria-label="No Next Page Link" disabled>
                <IoIosArrowRoundForward className="text-2xl" />
              </button>
            )}
          </li>
        </ul>
      </nav>
    </div>
  )

}

export default Navigation
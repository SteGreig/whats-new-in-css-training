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

  const btnClass = 'w-8 h-8 rounded-full border border-black flex items-center justify-center shadow-md transition';

  //return (<></>)

  return (
    <div className="rounded-full fixed bottom-2 right-2 p-2 pl-4 z-40 flex items-center justify-end bg-white shadow-lg">
      <p className="mr-3 text-sm">{title}</p>
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
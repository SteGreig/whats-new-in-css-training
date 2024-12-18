import { IoIosLink } from "react-icons/io";

export default function CopyUrlButton({ btnText }: { btnText: string }) {

  return (
    <button 
      className="p-3 w-12 hover:w-auto h-12 transition-all duration-300 overflow-hidden bg-slate-200 hover:border-black dark:hover:border-white dark:text-black rounded-full focus:outline-none text-base flex items-center gap-3"
    >
      <IoIosLink className="text-2xl flex-none" />
      <span className={`whitespace-nowrap`}>{btnText}</span>
    </button>
  );
}

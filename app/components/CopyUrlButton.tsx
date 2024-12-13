"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoIosLink } from "react-icons/io";

interface CopyUrlButtonProps {
  anchor?: string; // Optional anchor link to append
  buttonText?: string; // Customizable button text
}

export default function CopyUrlButton({ anchor, buttonText = "Copy URL" }: CopyUrlButtonProps) {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const baseUrl = window.location.origin;
    const fullUrl = anchor ? `${baseUrl}${pathname}#${anchor}` : `${baseUrl}${pathname}`;

    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);

      // Reset copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy URL: ", err);
    }
  };

  return (
    <button 
      onClick={handleCopy} 
      className="p-2 w-9 hover:w-auto h-9 transition-all overflow-hidden border-slate-400 hover:border-black border rounded-full focus:outline-none text-sm flex items-center gap-2"
    >
      <IoIosLink className="text-xl flex-none" />
      <span className={`whitespace-nowrap`}>{copied ? "Copied!" : buttonText}</span>
    </button>
  );
}

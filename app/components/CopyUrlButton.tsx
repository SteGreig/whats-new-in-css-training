"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

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
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
    >
      {copied ? "Copied!" : buttonText}
    </button>
  );
}

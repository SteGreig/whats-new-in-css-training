"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AiOutlineSun } from "react-icons/ai";
import { AiOutlineMoon } from "react-icons/ai";


export function ThemeSwitcher({classes} : {classes?: string;}) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`theme-toggle ${classes}`}>
      <button onClick={() => setTheme("light")} aria-label="Light Mode" className={`${theme == 'light' ? 'theme-active outline-dashed outline-offset-1 outline-black/80 dark:outline-white/80' : 'theme-inactive'} p-2 border border-black dark:border-white dark:text-white rounded-full shadow-lg text-black transition hover:scale-105`}>
        <AiOutlineSun className="text-lg" />
      </button>
      <button onClick={() => setTheme("dark")} aria-label="Dark Mode" className={`${theme == 'dark' ? 'theme-active outline-dashed outline-offset-1 outline-black/80 dark:outline-white/80' : 'theme-inactive'} p-2 border border-black dark:border-white dark:text-white rounded-full shadow-lg text-black transition hover:scale-105`}>
        <AiOutlineMoon className="text-lg" />
      </button>
    </div>
  );
}

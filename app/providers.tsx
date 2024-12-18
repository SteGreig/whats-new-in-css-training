"use client";

import { ThemeProvider } from "next-themes"

const Providers = ({children} : { children: React.ReactNode }) => {

  return (
    <ThemeProvider disableTransitionOnChange attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  )
}

export default Providers;
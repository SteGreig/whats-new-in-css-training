import CopyUrlButton from "./CopyUrlButton";

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
    <div id={`slide${id}`} className="slide-wrap">
      <section className={`slide w-full ~p-4/20 min-h-screen sticky top-0 z-10 flex items-center ${wrapperClasses}`}>
        <div className={`min-h-[600px] bg-white rounded-3xl w-full max-w-screen-2xl mx-auto ~px-6/24 ~py-8/24 shadow-2xl shadow-yellow-700 content-center font-semibold ~text-base/2xl ${boxClasses}`}>
          
          {children}

          <nav>
            {id !== 0 && (
              <a href={`#slide${id-1}`}>Prev</a>
            )}
            {!isLast && (
              <a href={`#slide${id+1}`}>Next</a>
            )}
            <CopyUrlButton anchor={`slide${id}`} buttonText="Copy Slide Link" />
          </nav>

        </div>
      </section>
      <div className="w-full bg-red h-[500px] relative z-50 pointer-events-none"></div>
    </div>
  )
}

export default Slide
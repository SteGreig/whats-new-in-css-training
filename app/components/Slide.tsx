
const Slide = ({
  children,
  id,
  wrapperClasses,
  boxClasses
}: Readonly<{
  children: React.ReactNode;
  id?: string;
  wrapperClasses?: string;
  boxClasses?: string;
}>) => {
  return (
    <div id={id} className="slide-wrap">
      <section className={`slide w-full ~p-4/20 min-h-screen sticky top-0 z-10 ${wrapperClasses}`}>
        <div className={`min-h-[600px] bg-white rounded-3xl w-full max-w-screen-2xl mx-auto ~px-6/24 ~py-8/24 shadow-2xl shadow-yellow-700 content-center font-semibold ~text-base/2xl ${boxClasses}`}>
          
          {children}

        </div>
      </section>
      <div className="w-full bg-red h-[500px] relative z-50 pointer-events-none"></div>
    </div>
  )
}

export default Slide
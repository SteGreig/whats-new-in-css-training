
const Slide = ({
  children,
  classes
}: Readonly<{
  children: React.ReactNode;
  classes?: string;
}>) => {
  return (
    <div className="snap-start">
      <section className={`slide w-full ~p-4/20 h-screen sticky top-0 z-10 ${classes}`}>
        <div className=" overflow-auto h-full bg-white rounded-3xl w-full max-w-screen-2xl mx-auto ~p-6/20 shadow-2xl shadow-yellow-700 flex">
          
          {children}

        </div>
      </section>
      <div className="w-full bg-red h-[300px] relative z-50"></div>
    </div>
  )
}

export default Slide
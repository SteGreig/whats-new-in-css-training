import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full ~p-4/20">
      <div className="bg-white rounded-3xl w-full max-w-screen-2xl mx-auto mt-20 ~p-6/20 shadow-2xl shadow-yellow-700">
        
        <h2 className="">
          <span className="~text-base/4xl font-sans font-black uppercase">The current state of CSS and how it got here</span>
          <span className="~text-sm/lg font-mono mt-4 uppercase tracking-widest flex items-center">A Quick Overview<span className="h-px ml-4 flex-1 bg-black"></span></span>
        </h2>

      </div>
    </section>
  );
}

import DefaultTemplate from "../../components/DefaultTemplate"
import SlidesList from "../../components/SlidesList";

import slides from "../../slides/isolate";

export default function page() {
  return (
    <DefaultTemplate
      title="isolate"
      prevSlug="/align-content-block-layouts"
      nextSlug="/inset"
    >
    
      <SlidesList slides={slides} />

      <div className="p-2">
        <div className="w-full p-10 bg-yellow-500 border-8 border-black dark:border-yellow-800 dark:text-black text-center">
          <h2 className="slide-heading leading-none mb-2">isolation: auto <small>(default)</small></h2>
          <p className="w-full max-w-screen-lg mx-auto">Notice how the below elements interact with the bottom right navigation component (which is fixed with a z-index of 30). This is a common issue with fixed headers etc.</p>
          <ul className="mt-8 flex flex-col items-end text-center ~text-lg/3xl font-wide font-normal">
            <li className="w-11/12 px-6 py-12 bg-orange-200 rounded relative z-10">I have z-index: 10</li>
            <li className="w-10/12 px-6 py-12 bg-orange-300 rounded relative z-20 -mt-6">I have z-index: 20</li>
            <li className="w-9/12 px-6 py-12 bg-orange-400 rounded relative z-30 -mt-6">I have z-index: 30</li>
            <li className="w-8/12 px-6 py-12 bg-orange-500 rounded relative z-40 -mt-6">I have z-index: 40</li>
            <li className="w-7/12 px-6 py-12 bg-orange-600 rounded relative z-50 -mt-6">I have z-index: 50</li>
          </ul>
        </div>
      </div>

      <div className="p-2">
        <div className="w-full p-10 bg-yellow-500 border-8 border-black dark:border-yellow-800 dark:text-black text-center isolate">
          <h2 className="slide-heading leading-none mb-2">isolation: isolate</h2>
          <p className="w-full max-w-screen-lg mx-auto">Instead of whacking a z-[100000] on the fixed component (which then inevitably causes another stacking issue elsewhere), <code>isolation:isolate</code> allows us to confine the stacking context of the below boxes to this particular containing element.</p>
          <ul className="mt-8 flex flex-col items-end text-center ~text-lg/3xl font-wide font-normal">
            <li className="w-11/12 px-6 py-12 bg-orange-200 rounded relative z-10">I have z-index: 10</li>
            <li className="w-10/12 px-6 py-12 bg-orange-300 rounded relative z-20 -mt-6">I have z-index: 20</li>
            <li className="w-9/12 px-6 py-12 bg-orange-400 rounded relative z-30 -mt-6">I have z-index: 30</li>
            <li className="w-8/12 px-6 py-12 bg-orange-500 rounded relative z-40 -mt-6">I have z-index: 40</li>
            <li className="w-7/12 px-6 py-12 bg-orange-600 rounded relative z-50 -mt-6">I have z-index: 50</li>
          </ul>
        </div>
      </div>
    
    </DefaultTemplate>
  );
}

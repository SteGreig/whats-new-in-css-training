import Image from "next/image";
import Slide from "./components/Slide";

import css3Logo from '/public/css3-logo.svg'
import cssLogo from '/public/new-css-logo.svg'
import css3GoogleTrends from '/public/css3-google-trends.webp'

export default function Home() {
  return (
    <>

      <Slide id="slide1" wrapperClasses="-mt-52" boxClasses="flex">
        <div className="m-auto text-center">
          <h2 className="slide-heading">The current state of CSS and how it got here</h2>
          <p className="flex items-center mt-4 gap-4">
            <span className="h-px flex-1 bg-black"></span>
            <span className="~text-xs/lg font-mono uppercase tracking-widest">A Quick Overview</span>
            <span className="h-px flex-1 bg-black"></span>
          </p>
        </div>
      </Slide>

      <Slide id="slide2" boxClasses="flex flex-col lg:flex-row justify-center items-center ~gap-8/20">
        <Image
          src={css3Logo}
          alt="CSS3 Logo"
          width={350}
          height={493}
        />
        <div>
          <h2 className="slide-heading ~mb-4/10 text-left">The CSS3 Era</h2>
          <div className="flex flex-col gap-8">
            <p>There was a time when everything new in CSS was referred to as "CSS3".</p>
            <p>That era began well over a decade ago now, and it was really quite the buzzword for a number of years, receiving a huge amount of coverage.</p>
            <p>The term has somewhat fizzled out over the last few years, and rather than being displaced by a "CSS4", everyone just went back to calling it plain old CSS again.</p>
            <p>In fact, it was pretty categorically stated that were would never be a CSS4.</p>
            <p>To understand why, and why that may no longer be the case, we need to look at how CSS has evolved over time.</p>
          </div>
        </div>
      </Slide>

      <Slide id="slide3">
        <h2 className="slide-heading ~mb-4/10 text-center">The original CSS mega specs</h2>

        <div className="flex flex-wrap gap-4">
          <div className="p-8 border border-black content-center w-full md:w-auto md:flex-1 h-72 text-center">
            <p className="slide-heading">CSS 1.0</p>
            <span className="text-lg">Released 1996</span>
            <ul className="mt-4 text-sm">
              <li>Selectors</li>
              <li>Box Model</li>
              <li>Colors and Backgrounds</li>
              <li>etc.</li>
            </ul>
          </div>
          <div className="p-8 border border-black content-center w-full md:w-auto md:flex-1 h-72 text-center">
            <p className="slide-heading">CSS 2.0</p>
            <span className="text-lg">Released 1998</span>
            <ul className="mt-4 text-sm">
              <li>Selectors</li>
              <li>Box Model</li>
              <li>Colors and Backgrounds</li>
              <li>etc.</li>
            </ul>
          </div>
          <div className="p-8 border border-black content-center w-full md:w-auto md:flex-1 h-72 text-center">
            <p className="slide-heading">CSS 2.1</p>
            <span className="text-lg">Released 2011</span>
            <ul className="mt-4 text-sm">
              <li>Selectors</li>
              <li>Box Model</li>
              <li>Colors and Backgrounds</li>
              <li>etc.</li>
            </ul>
          </div>
        </div>

        <h2 className="slide-heading ~mb-4/10 mt-16 text-center">CSS 3</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-8 border border-black content-center w-full md:w-auto md:flex-[25%] text-center">
            <p className="font-primary ~text-base/xl font-normal">CSS Selectors Level 3</p>
          </div>
          <div className="p-8 border border-black content-center w-full md:w-auto md:flex-[25%] text-center">
            <p className="font-primary ~text-base/xl font-normal">CSS Text Level 3</p>
          </div>
          <div className="p-8 border border-black content-center w-full md:w-auto md:flex-[25%] text-center">
            <p className="font-primary ~text-base/xl font-normal">CSS Flexible Box Layout Level 1</p>
          </div>
          <div className="p-8 border border-black content-center w-full md:w-auto md:flex-[25%] text-center">
            <p className="font-primary ~text-base/xl font-normal">CSS Transitions Level 1</p>
          </div>
          <div className="p-8 border border-black content-center w-full md:w-auto md:flex-[25%] text-center">
            <p className="font-primary ~text-base/xl font-normal">CSS Colour Level 3</p>
          </div>
          <div className="p-8 border border-black content-center w-full md:w-auto md:flex-[25%] text-center">
            <p className="font-primary ~text-base/xl font-normal">CSS Animations Level 1</p>
          </div>
          <div className="p-8 border border-black content-center w-full md:w-auto md:flex-[25%] text-center">
            <p className="font-primary ~text-base/xl font-normal">CSS Box Model Level 3</p>
          </div>
          <div className="p-8 border border-black content-center w-full md:w-auto md:flex-[25%] text-center">
            <p className="font-primary ~text-base/xl font-normal">etc.</p>
          </div>
        </div>

        <div className="text-lg flex flex-col gap-5 mt-14">
          <p>After CSS 2.1, CSS was split into a vast collection of individual modules, which would be free to advance at their own pace.</p>

          <p>Some modules, such as CSS Selectors, began at "Level 3", to show their continuation from CSS 2.1.</p>

          <p>Other modules, such as Flexible Box Layout (Flexbox), were brand new and so began at Level 1.</p>

          <p>Regardless of their individual level, every CSS module from this point on would come under the umbrella of "CSS3".</p>

          <p>So this is why we could say, logically, there would never be a CSS4. There would only be, for example, CSS Selectors Level 4, or CSS Transitions Level 2.</p>
        </div>
      </Slide>

      <Slide id="slide4" boxClasses="flex flex-col gap-8">
        <h2 className="slide-heading text-center">The decline of "CSS3"</h2>
        <Image
          src={css3GoogleTrends}
          alt="CSS3 Google Trends Graph"
          width={1186}
          height={463}
        />
        <div className="flex flex-col gap-5 mt-14">
          <p>With the individual CSS modules now advancing independently of each other, the CSS3 term has naturally died off, but this has had unintended consequences.</p>
          <p>It's created a perception that CSS is a bit static</p>
        </div>
      </Slide>
    
    </>
  );
}


import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Slide from "@/app/components/Slide";
import Image from "next/image";

import css3Logo from '/public/css3-logo.svg'
import css3GoogleTrends from '/public/css3-google-trends.webp'
import cssLogo from '/public/new-css-logo.svg'
import cssLogoWithOthers from '/public/new-css-logo-with-others.png'

export default function Home() {
  return (
    <>

      <Header classes="h-screen" leftSubtitle="19.12.2024" rightSubtitle="Ste Greig">
        <a className="pulse flex m-auto w-60 h-60 rounded-full border-4 border-black dark:border-yellow-500 content-center" href="#slide1">
          <svg className="w-24 h-24 m-auto translate-x-1 dark:fill-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M384 256L0 32V480L384 256z"/></svg>
        </a>
      </Header>

      <Slide id={1} boxClasses="flex flex-col">
        <div className="m-auto text-center">
          <h2 className="slide-heading">The current state of CSS and how it got here</h2>
          <p className="flex items-center mt-4 gap-4">
            <span className="h-px flex-1 bg-black dark:bg-white"></span>
            <span className="~text-xs/lg font-mono uppercase tracking-widest">A Quick Overview</span>
            <span className="h-px flex-1 bg-black dark:bg-white"></span>
          </p>
        </div>
      </Slide>

      <Slide id={2} boxClasses="flex flex-col lg:flex-row justify-center items-center ~gap-8/20">
        <Image
          src={css3Logo}
          alt="CSS3 Logo"
          width={350}
          height={493}
        />
        <div>
          <h2 className="slide-heading ~mb-4/10 text-left">The CSS3 Era</h2>
          <div className="flex flex-col ~gap-5/8">
            <p>There was a time when everything new in CSS was referred to as "CSS3".</p>
            <p>That era began well over a decade ago now, and it was really quite the buzzword for a number of years, receiving a huge amount of coverage.</p>
            <p>The term has somewhat fizzled out over the last few years, and rather than being displaced by a "CSS4", everyone just went back to calling it plain old CSS again.</p>
            <p>In fact, it was pretty categorically stated that there would never be a CSS4.</p>
            <p>To understand why (and why that may no longer be the case 😄), we need to look at how CSS has evolved over time.</p>
          </div>
        </div>
      </Slide>

      <Slide id={3} boxClasses="flex flex-col">
        <h2 className="slide-heading ~mb-4/10 text-center">The original CSS mega specs</h2>

        <div className="flex flex-wrap gap-4">
          <div className="p-8 lg:py-12 border border-black dark:border-white content-center w-full md:w-auto md:flex-1 text-center">
            <p className="slide-heading">CSS 1.0</p>
            <span className="text-lg">Released 1996</span>
            <ul className="mt-2 text-sm">
              <li>Selectors</li>
              <li>Box Model</li>
              <li>Colors and Backgrounds</li>
              <li>etc.</li>
            </ul>
          </div>
          <div className="p-8 lg:py-12 border border-black dark:border-white content-center w-full md:w-auto md:flex-1 text-center">
            <p className="slide-heading">CSS 2.0</p>
            <span className="text-lg">Released 1998</span>
            <ul className="mt-2 text-sm">
              <li>Selectors</li>
              <li>Box Model</li>
              <li>Colors and Backgrounds</li>
              <li>etc.</li>
            </ul>
          </div>
          <div className="p-8 lg:py-12 border border-black dark:border-white content-center w-full md:w-auto md:flex-1 text-center">
            <p className="slide-heading">CSS 2.1</p>
            <span className="text-lg">Released 2011</span>
            <ul className="mt-2 text-sm">
              <li>Selectors</li>
              <li>Box Model</li>
              <li>Colors and Backgrounds</li>
              <li>etc.</li>
            </ul>
          </div>
        </div>

        <h2 className="slide-heading ~mb-4/10 ~mt-8/16 text-center">CSS 3</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="~p-2/8 border border-black dark:border-white content-center w-full md:w-auto text-center">
            <p className="font-primary ~text-base/xl font-normal leading-none">CSS Selectors Level 3</p>
          </div>
          <div className="~p-2/8 border border-black dark:border-white content-center w-full md:w-auto text-center">
            <p className="font-primary ~text-base/xl font-normal leading-none">CSS Text Level 3</p>
          </div>
          <div className="~p-2/8 border border-black dark:border-white content-center w-full md:w-auto text-center">
            <p className="font-primary ~text-base/xl font-normal leading-none">CSS Flexible Box Layout Level 1</p>
          </div>
          <div className="~p-2/8 border border-black dark:border-white content-center w-full md:w-auto text-center">
            <p className="font-primary ~text-base/xl font-normal leading-none">CSS Transitions Level 1</p>
          </div>
          <div className="~p-2/8 border border-black dark:border-white content-center w-full md:w-auto text-center">
            <p className="font-primary ~text-base/xl font-normal leading-none">CSS Colour Level 3</p>
          </div>
          <div className="~p-2/8 border border-black dark:border-white content-center w-full md:w-auto text-center">
            <p className="font-primary ~text-base/xl font-normal leading-none">CSS Animations Level 1</p>
          </div>
          <div className="~p-2/8 border border-black dark:border-white content-center w-full md:w-auto text-center">
            <p className="font-primary ~text-base/xl font-normal leading-none">CSS Box Model Level 3</p>
          </div>
          <div className="~p-2/8 border border-black dark:border-white content-center w-full md:w-auto text-center">
            <p className="font-primary ~text-base/xl font-normal leading-none">etc. etc.</p>
          </div>
        </div>

        <div className="~text-base/lg flex flex-col gap-5 ~mt-8/14 max-w-screen-md mx-auto">
          <p>After CSS 2.1, CSS was split into a vast collection of individual modules, which would be free to advance at their own pace.</p>

          <p>Some modules, such as CSS Selectors, began at "Level 3", to show their continuation from CSS 2.1.</p>

          <p>Other modules, such as Flexible Box Layout (Flexbox), were brand new and so began at Level 1.</p>

          <p>Regardless of their individual level, every CSS module from this point on would come under the umbrella of "CSS3".</p>

          <p>So this is why we could say, logically, there would never be a CSS4. There would only be, for example, CSS Selectors Level 4, or CSS Transitions Level 2.</p>
        </div>
      </Slide>

      <Slide id={4} boxClasses="flex flex-col gap-8">
        <h2 className="slide-heading text-center">The decline of "CSS3"</h2>
        <figure>
          <Image
            src={css3GoogleTrends}
            alt="CSS3 Google Trends Graph"
            width={1186}
            height={463}
          />
          <figcaption>Global Google searches for "CSS3" from 2007 to 2024</figcaption>
        </figure>
        <div className="flex flex-col gap-5 max-w-screen-md mx-auto">
          <p>With the individual CSS modules now advancing independently of each other, the "CSS3" term has naturally died off, but this has had unintended consequences.</p>
          <p>It's created a perception that CSS is a bit static, with developers seemingly paying less attention to new CSS features.</p>
          <p>It's a lot harder to promote lots of little advancements compared to a memorable catch-all buzzword.</p>
          <p>And that is seemingly the realisation that the CSS Working Group have arrived at...</p>
        </div>
      </Slide>

      <Slide id={5} boxClasses="flex flex-col gap-8">
        <h2 className="slide-heading text-center">CSS4 (and beyond) is coming!</h2>
        <div className="flex flex-col gap-5 max-w-screen-md mx-auto">
          <p>After a <a href="https://github.com/w3c/csswg-drafts/issues/4770">GitHub discussion</a> spanning several years, the decision was made in November 2023 to start defining CSS4.</p>
          <p>There won't be any actual changes to the way the CSS specifications are worked on or the way in which they advance - the different modules will continue to progress independently at their own pace.</p>
          <p>The idea of batching these individual module levels into buckets of "CSS4", "CSS5" and so on, is purely for the benefit of the community, and the marketing benefits.</p>
          <p>It will eliminate any misconceptions that CSS is now stagnant (which couldn't be further from the truth), it will help devs learn, teachers teach, employers hire... there is a lot of potential upside.</p>
        </div>
      </Slide>

      <Slide id={6} isLast={true} boxClasses="flex flex-col lg:flex-row justify-center items-start ~gap-8/20">
        <Image
          src={cssLogo}
          alt="The new CSS logo"
          width={400}
          height={400}
        />
        <div>
        <h2 className="slide-heading ~mb-4/10">A New Official CSS Logo</h2>
          <div className="flex flex-col ~gap-5/8">
            <p>The first step of this new push to market the new CSS eras is a brand new logo!</p>
            <p>There was a <a href="https://github.com/CSS-Next/css-next/issues/105">vote on GitHub</a>, and this was the winner!</p>
            <p>One of the conditions was that it should work with or without a number. It's also in-keeping with the logos used for other languages, and the colour choice (rebeccapurple) has a <a href="https://dev.to/joacod/the-special-meaning-behind-the-new-css-logo-rebeccapurple-2205">moving backstory</a>.</p>
          </div>
          <Image
            src={cssLogoWithOthers}
            alt="The new CSS logo with other coding language logos"
            width={1061}
            height={221}
            className="~mt-5/8"
          />
        </div>
      </Slide>

      <Navigation
        title="Evolution of CSS"
        nextLink='/text-wrap-balance'
      />
    
    </>
  );
}

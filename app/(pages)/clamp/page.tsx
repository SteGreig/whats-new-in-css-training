import DefaultTemplate from "../../components/DefaultTemplate"
import BaselineStatus from "@/app/components/BaselineStatus";
import CodeBlock from "@/app/components/CodeBlock";
import Slide from "@/app/components/Slide";
import Image from "next/image";

import clampCalc from '/public/clamp-calculator.jpg'

const codeCSS = `h1 {
  font-size: clamp(1.25rem, 4vw, 3.75rem);
}`

const codeTW = `<h1 class="text-[clamp(1.25rem,4vw,3.75rem)]">`

const codeOne = `font-size: clamp(16px, 2vw, 36px);`
const codeTwo = `font-size: 2vw;`

const codeThree = `font-size: clamp(1.5rem, 0.9706rem + 2.2588vw, 4.5rem);`

const codeFour = `<div class="p-4 lg:p-8 xl:p-12">
  <p class="text-base md:text-xl xl:text-3xl"></p>
</div>`

const codeFive = `<div class="~p-4/12">
  <p class="~text-base/3xl"></p>
</div>`

const codeSix = `screens: {
  "2xs": "23.4375rem", /* 375px */
  xs: "30rem", /* 480px */
  sm: "37.5rem", /* 600px */
  md: "48rem", /* 768px */
  lg: "64rem", /* 1024px */
  xl: "80rem", /* 1280px */
  "2xl": "87.5rem", /* 1400px */
  "3xl": "100rem", /* 1600px */
  "4xl": "118.75rem", /* 1900px */
},`

export default function page() {
  return (
    <DefaultTemplate
      title="clamp()"
      prevSlug="/view-transitions"
      nextSlug="/scroll-driven-animations"
    >
    
      <Slide id={1} boxClasses="flex flex-col lg:flex-row justify-center ~gap-8/20" wrapperClasses="overflow-hidden">
        <div className="flex flex-col gap-5 lg:w-1/2 mx-auto">
          <h2 className="slide-heading">clamp()</h2>
          <p>The CSS <code>clamp()</code>, <code>min()</code> and <code>max()</code> properties have had full support since 2020, but Tailwinders might have missed out on its benefits as TW doesn't have a built-in mechanism for it (outside of arbitrary values).</p>
          <p><code>clamp()</code> takes 3 parameters - a minimum value, a preferred value, and a maximum value. And can be used on everything from font sizes to padding, enabling a truly responsive layout.</p>
          <BaselineStatus featureId="min-max-clamp" classes="mt-3" />
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-base mb-1">Standard CSS</h3>
          <CodeBlock code={codeCSS} language="css" />
          <h3 className="text-base mb-1 mt-8">Tailwind</h3>
          <CodeBlock code={codeTW} language="markup" />
          <p className="mt-6 text-base">This can be vastly improved with the <a href="https://fluid.tw/">fluid.tw</a> plugin</p>
        </div>
      </Slide>

      <Slide id={2} boxClasses="content-start gap-8 flex flex-col">
        <h2 className="slide-heading">The Benefits</h2>
        <p>If you resize your browser, here we see the difference between using <code>clamp()</code> and simply using a <code>vw</code> value for the font-size. Without <code>clamp()</code> the text gets too small on small screens and too big on wider screens! The text also loses the ability to resize if someone uses the zoom controls in their browser.</p>
        <div className="flex flex-col lg:flex-row ~gap-4/8">
          <div className="flex-1 rounded-xl bg-blue-100 dark:bg-slate-800 relative text-center content-center ~py-6/12 ~px-3/6">
            <p className="font-primary font-normal text-[clamp(16px,2vw,36px)] leading-snug">Lorem ipsum dolor sit</p>
          </div>
          <div className="flex-1">
            <CodeBlock code={codeOne} language="css" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row ~gap-4/8">
          <div className="flex-1 rounded-xl bg-blue-100 dark:bg-slate-800 relative text-center content-center ~py-6/12 ~px-3/6">
            <p className="font-primary font-normal text-[2vw] leading-snug">Lorem ipsum dolor sit</p>
          </div>
          <div className="flex-1">
            <CodeBlock code={codeTwo} language="css" />
          </div>
        </div>
      </Slide>

      <Slide id={3} boxClasses="content-start gap-8 flex flex-col">
        <h2 className="slide-heading">The Magic "preferred" value</h2>
        <p>Deciding what to use for the middle 'ideal' value in the <code>clamp()</code> can feel a bit arbitrary, but there is a mathematically ideal number that will ensure the smoothest scaling between your min and max values.</p>
        <p>It's far too complex to do manually, but there are many <a href="https://clamp.font-size.app/">calculators</a> that will work this out for you.</p>
        <Image
            src={clampCalc}
            alt="A clamp calculator screenshot"
            width={650}
            height={375}
          />
        <div className="flex-1 rounded-xl bg-blue-100 dark:bg-slate-800 relative text-center content-center ~py-6/12 ~px-3/6">
          <p className="font-primary font-normal text-[clamp(1.5rem,+0.9706rem_+_2.2588vw,4.5rem)] leading-snug">Lorem ipsum dolor sit</p>
        </div>
        <div className="flex-1">
          <CodeBlock code={codeThree} language="css" />
        </div>
        <p>The problem with this is it's quite a cumbersome manual process, particularly if you want to go heavy on <code>clamp()</code> usage for all spacing and sizing in your layout.</p>
        <p>For Tailwind, there is a plugin which allows you to make use of <code>clamp()</code> (complete with the 'magic' ideal values) with an (in my opinion) intuitive syntax...</p>
      </Slide>

      <Slide id={4} isLast boxClasses="content-start gap-8 flex flex-col">
        <h2 className="slide-heading">clamp() in Tailwind via fluid.tw</h2>
        <p>With the <a href="https://fluid.tw/">fluid.tw</a> plugin, instead of adjusting your sizing/spacing values at different breakpoints like this...</p>
        <div className="flex flex-col lg:flex-row ~gap-4/8">
          <div className="lg:w-1/2 rounded-xl bg-blue-100 dark:bg-slate-800 p-4 lg:p-8 xl:p-12 content-center">
            <p className="font-primary font-normal text-base md:text-xl xl:text-3xl bg-blue-200 dark:bg-gray-900 rounded-lg">Lorem ipsum dolor sit</p>
          </div>
          <div className="lg:w-1/2">
            <CodeBlock code={codeFour} language="css" />
          </div>
        </div>
        <p>...you can just define a minimum value and a maximum value and it will scale smoothly in between...</p>
        <div className="flex flex-col lg:flex-row ~gap-4/8">
          <div className="lg:w-1/2 rounded-xl bg-blue-100 dark:bg-slate-800 ~p-4/12 content-center">
            <p className="font-primary font-normal ~text-base/3xl bg-blue-200 dark:bg-gray-900 rounded-lg">Lorem ipsum dolor sit</p>
          </div>
          <div className="lg:w-1/2">
            <CodeBlock code={codeFive} language="css" />
          </div>
        </div>
        <p>One thing to bear in mind is the plugin requires all units to be in <code>rem</code> units, including the breakpoints defined in your Tailwind config, so you will need to convert these to <code>rem</code> if they're not already, e.g...</p>
        <CodeBlock code={codeSix} language="css" />
      </Slide>
    
    </DefaultTemplate>
  );
}

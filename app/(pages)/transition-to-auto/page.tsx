import DefaultTemplate from "../../components/DefaultTemplate"
import BaselineStatus from "@/app/components/BaselineStatus";
import CodeBlock from "@/app/components/CodeBlock";
import Slide from "@/app/components/Slide";
import IconButton from "./IconButton";
import Card from "../container-queries/Card";

const codeCSS = `:root {
  interpolate-size: allow-keywords;
}`

const codeCSS2 = `button {
  width: 48px;
  transition: width .3s;
}

button:hover {
  width: auto;
}`

const codeTW = `<button class="w-12 hover:w-auto transition-[width]">`

const codeCSS3 = `.cards {
  height: 208px;
  transition: height .5s;
}

.cards:has(:checked) {
  height: auto;
}`

const codeTW2 = `<div class="h-52 has-[:checked]:h-auto transition-[height]">`

export default function page() {
  return (
    <DefaultTemplate
      title="Transition to auto"
      prevSlug="/container-queries"
      nextSlug="/transition-from-display-none"
    >
    
      <Slide id={1} boxClasses="flex flex-col lg:flex-row justify-center ~gap-8/20">
        <div className="flex flex-col gap-5 lg:w-7/12 mx-auto">
          <h2 className="slide-heading">Transitioning to height/width auto</h2>
          <p>One of the biggest frustrations in CSS has been not being able to transition to <code>auto</code> width/height values.</p>
          <p>Thankfully that has now been fixed with a simple global property that sits on your <code>:root</code> element.</p>
          <BaselineStatus featureId="interpolate-size" classes="mt-3" />
        </div>
        <div className="lg:w-5/12">
          <CodeBlock code={codeCSS} language="css" />
        </div>
      </Slide>

      <Slide id={2} boxClasses="flex flex-col lg:flex-row justify-center ~gap-8/20">
        <div className="flex flex-col gap-5 lg:w-7/12 mr-auto">
          <h2 className="slide-heading">width auto Transition</h2>
          <p>Hover over the icons below (these will only transition if your browser supports <code>interpolate-size</code>)...</p>
          <div className="flex flex-col items-start gap-2">
            <IconButton btnText="This text could be any length" />
            <IconButton btnText="So I need to be able" />
            <IconButton btnText="To transition to width auto" />
          </div>
        </div>
        <div className="lg:w-5/12">
          <h3 className="text-base mb-1">Standard CSS</h3>
          <CodeBlock code={codeCSS2} language="css" />
          <h3 className="text-base mb-1 mt-8">Tailwind</h3>
          <CodeBlock code={codeTW} language="markup" wrap={true} />
        </div>
      </Slide>

      <Slide id={3} isLast boxClasses="flex flex-col lg:flex-row justify-center ~gap-8/20">
        <div className="flex flex-col gap-5 lg:w-7/12 mr-auto">
          <h2 className="slide-heading">height auto Transition</h2>
          <div className="relative">
            <div className="h-52 has-[:checked]:h-auto overflow-hidden transition-[height] duration-500">
              <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full">
                <Card /><Card /><Card />
                <Card /><Card /><Card />
                <Card /><Card /><Card />
              </div>
              <label className="absolute -bottom-6 has-[:checked]:-bottom-16 transition-all left-1/2 -translate-x-1/2 whitespace-nowrap bg-indigo-200 hover:bg-indigo-300 rounded-full px-4 py-2 cursor-pointer" htmlFor="auto-demo">Show More <input className="invisible absolute" type="checkbox" id="auto-demo" /></label>
            </div>
          </div>
        </div>
        <div className="lg:w-5/12">
          <h3 className="text-base mb-1">Standard CSS</h3>
          <CodeBlock code={codeCSS3} language="css" />
          <h3 className="text-base mb-1 mt-8">Tailwind</h3>
          <CodeBlock code={codeTW2} language="markup" wrap={true} />
          <p className="mt-6 text-base">(For the sake of this demo, I've made the button a checkbox under the hood and used :has)</p>
        </div>
      </Slide>
    
    </DefaultTemplate>
  );
}

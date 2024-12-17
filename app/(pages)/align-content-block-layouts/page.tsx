import DefaultTemplate from "../../components/DefaultTemplate"
import BaselineStatus from "@/app/components/BaselineStatus";
import CodeBlock from "@/app/components/CodeBlock";
import Slide from "@/app/components/Slide";

const codeCSS = `div {
  align-content: center;
}`;

const codeTW = `<div class="content-center">
    <p>I'm vertically centered!</p>
</div>`;

export default function page() {
  return (
    <DefaultTemplate
      title="align-content in Block Layouts"
      prevSlug="/scroll-behavior-smooth"
      nextSlug="/isolate"
    >
    
      <Slide id={1} boxClasses="flex flex-col lg:flex-row justify-center ~gap-8/20">
        <div className="flex flex-col gap-5 lg:w-7/12 mx-auto">
          <h2 className="slide-heading">align-content in Block Layouts</h2>
          <p>The <code>align-content</code> property has always worked in conjunction with Flexbox or Grid, but we can now use it on standard block level elements, too!</p>
          <p>Vertical centering used to be the quintessential pain point in CSS - now it couldn't be simpler!</p>
          <BaselineStatus featureId="align-content-block" classes="mt-3" />
        </div>
        <div className="lg:w-5/12">
          <h3 className="text-base mb-1">Standard CSS</h3>
          <CodeBlock code={codeCSS} language="css" />
          <h3 className="text-base mb-1 mt-8">Tailwind</h3>
          <CodeBlock code={codeTW} language="markup" wrap={true} />
        </div>
      </Slide>

      <Slide id={2} isLast={true} boxClasses="content-start">
        <h2 className="slide-heading mb-8">Normal divs with display: block</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 bg-blue-50 text-slate-600 rounded-2xl p-8 content-start h-64">
            <p>align-content: start;</p>
          </div>
          <div className="flex-1 bg-blue-50 text-slate-600 rounded-2xl p-8 content-center h-64">
            <p>align-content: center;</p>
          </div>
          <div className="flex-1 bg-blue-50 text-slate-600 rounded-2xl p-8 content-end h-64">
            <p>align-content: end;</p>
          </div>
        </div>
      </Slide>
    
    </DefaultTemplate>
  );
}

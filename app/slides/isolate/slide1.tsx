import BaselineStatus from "@/app/components/BaselineStatus";
import CodeBlock from "@/app/components/CodeBlock";

const codeCSS = `div {
  isolation: isolate;
}`;

const codeTW = `<div class="isolate"></div>`;

export default {
  boxClasses: "flex flex-col lg:flex-row justify-center ~gap-8/20",
  content: (
    <>
      <div className="flex flex-col gap-5 lg:w-7/12 mx-auto">
        <h2 className="slide-heading">isolation: isolate</h2>
        <p>Although this property has had baseline support since 2020, I feel it's unknown enough to warrant inclusion here.</p>
        <p>It allows an element to create a new stacking context that is confined to that element. The examples below show its usefulness with z-indexed elements on your page.</p>
        <BaselineStatus featureId="isolation" classes="mt-3" />
      </div>
      <div className="lg:w-5/12">
        <h3 className="text-base mb-1">Standard CSS</h3>
        <CodeBlock code={codeCSS} language="css" />
        <h3 className="text-base mb-1 mt-8">Tailwind</h3>
        <CodeBlock code={codeTW} language="css" wrap={true} />
      </div>
    </>
  ),
};
import BaselineStatus from "@/app/components/BaselineStatus";
import CodeBlock from "@/app/components/CodeBlock";

const codeCSS = `div {
  align-content: center;
}`;

const codeTW = `<div class="content-center">
    <p>I'm vertically centered!</p>
</div>`;

export default {
  boxClasses: "flex flex-col lg:flex-row justify-center ~gap-8/20",
  content: (
    <>
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
        <CodeBlock code={codeTW} language="css" wrap={true} />
      </div>
    </>
  ),
};
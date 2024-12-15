import BaselineStatus from "@/app/components/BaselineStatus";
import CodeBlock from "@/app/components/CodeBlock";

const codeCSS = `html {
  scroll-behavior: smooth;
}`;

const codeTW = `<html class="scroll-smooth">`;

export default {
  boxClasses: "flex flex-col lg:flex-row justify-center ~gap-8/20",
  content: (
    <>
      <div className="flex flex-col gap-5 lg:w-7/12 mx-auto">
        <h2 className="slide-heading">scroll-behavior: smooth</h2>
        <p>Another satisfying one-liner - this CSS rule allows your page to scroll smoothly when anchor links are clicked.</p>
        <p>You can apply this to any element that has scroll, but is most useful on your <code>html</code> element as the behavior will then be applied to the viewport.</p>
        <BaselineStatus featureId="scroll-behavior" classes="mt-3" />
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
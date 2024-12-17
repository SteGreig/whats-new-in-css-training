import DefaultTemplate from "../../components/DefaultTemplate"
import BaselineStatus from "@/app/components/BaselineStatus";
import CodeBlock from "@/app/components/CodeBlock";
import Slide from "@/app/components/Slide";

const codeCSS = `div:has(p) {
  background: red;
}`;
const codeTW = `<div class="has-[p]:bg-red"></div>`;

const codeCSS2 = `<label>
  Option One
  <input type="radio" />
</label>`;
const codeCSS3 = `label:has(input:checked) {
  /* Styles */
}`;

export default function page() {
  return (
    <DefaultTemplate title=":has() Pseudo-class" prevSlug="/light-dark-function" nextSlug="/container-queries">
    
      <Slide id={1} boxClasses="flex flex-col lg:flex-row justify-center ~gap-8/20">
        <div className="flex flex-col gap-5 lg:w-7/12 mx-auto">
          <h2 className="slide-heading">The :has() Pseudo-class</h2>
          <p>This humble looking new pseudo-class might just be the most powerful pound-for-pound feature CSS has dropped in years.</p>
          <p>It's base functionality is simple - select an element that contains something else, but this utility opens up so many doors and allows so many things to be accomplished in CSS where you would have previously had to reach for JS.</p>
          <BaselineStatus featureId="has" classes="mt-3" />
        </div>
        <div className="lg:w-5/12">
          <h3 className="text-base mb-1">Standard CSS</h3>
          <CodeBlock code={codeCSS} language="css" />
          <h3 className="text-base mb-1 mt-8">Tailwind</h3>
          <CodeBlock code={codeTW} language="css" wrap={true} />
        </div>
      </Slide>

      <Slide id={2} boxClasses="flex flex-col lg:flex-row justify-center ~gap-8/20">
        <div className="flex flex-col gap-5 lg:w-7/12 mx-auto">
          <h2 className="slide-heading">Selecting Containers</h2>
          <p>The most obvious use case for <code>:has()</code> is of course targeting an element's container.</p>
          <form className="flex flex-col gap-2 mt-4 border border-indigo-50 rounded-lg p-6">
            <label className="rounded-lg hover:bg-gray-100 has-[:checked]:text-indigo-800 has-[:checked]:hover:bg-indigo-50 has-[:checked]:bg-indigo-50 border border-white has-[:checked]:border-indigo-200 font-sans p-4 text-base flex justify-between items-center">
              <span>Option One</span>
              <input type="radio" name="has-demo" defaultChecked />
            </label>
            <label className="rounded-lg hover:bg-gray-100 has-[:checked]:text-indigo-800 has-[:checked]:hover:bg-indigo-50 has-[:checked]:bg-indigo-50 border border-white has-[:checked]:border-indigo-200 font-sans p-4 text-base flex justify-between items-center">
              <span>Option Two</span>
              <input type="radio" name="has-demo" />
            </label>
            <label className="rounded-lg hover:bg-gray-100 has-[:checked]:text-indigo-800 has-[:checked]:hover:bg-indigo-50 has-[:checked]:bg-indigo-50 border border-white has-[:checked]:border-indigo-200 font-sans p-4 text-base flex justify-between items-center">
              <span>Option Three</span>
              <input type="radio" name="has-demo" />
            </label>
          </form>
        </div>
        <div className="lg:w-5/12">
          <h3 className="text-base mb-1">HTML Markup</h3>
          <CodeBlock code={codeCSS2} language="css" />
          <h3 className="text-base mb-1 mt-8">Standard CSS</h3>
          <CodeBlock code={codeCSS3} language="css" />
        </div>
      </Slide>
    
    </DefaultTemplate>
  );
}

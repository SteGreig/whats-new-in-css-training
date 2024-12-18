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

const codeCSS3 = `label:has(:checked) {
  /* Styles */
}`;

const codeTW2 = `<label className="has-[:checked]:text-indigo-800 has-[:checked]:bg-indigo-50 ...">
  Option Two
  <input type="radio" />
</label>`

const codeCSS4 = `/* Target p after an img */
img + p { font-weight: bold; }`;
const codeCSS5 = `/* Target p before an img */
p:has(+ img) { font-weight: bold; }`;

const codeTW3 = `/* Target p after an img */
<img class="[&+p]:font-bold" />`;

const codeTW4 = `/* Target p before an img */
<p class="has-[+img]:font-bold"></p>`;

const codeCSS6 = `body:has(.slideout-menu-active) {
  overflow: hidden;
}`;

const codeTW5 = `<body class="has-[.slideout-menu-active]:overflow-hidden">`;

const codeCSS7 = `.tabs:has(.tab1:checked) .tab-panel1,
.tabs:has(.tab2:checked) .tab-panel2,
.tabs:has(.tab3:checked) .tab-panel3 {
  display: block;
}`

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

      <Slide id={2}>
        <div className="flex flex-col lg:flex-row justify-center ~gap-8/20">
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
            <CodeBlock code={codeCSS2} language="markup" />
            <h3 className="text-base mb-1 mt-8">Standard CSS</h3>
            <CodeBlock code={codeCSS3} language="css" />
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-base mb-1">Tailwind</h3>
          <CodeBlock code={codeTW2} language="markup" />
        </div>
      </Slide>

      <Slide id={3}>
        <div className="flex flex-col lg:flex-row justify-center ~gap-8/20">
          <div className="flex flex-col gap-5 lg:w-7/12 mx-auto">
            <h2 className="slide-heading">Selecting Previous Sibling</h2>
            <p>We've been able to select adjacent siblings that <em>follow</em> an element for a long time now with the <code>+</code> and <code>~</code> combinators, but we can now use these to select adjacent siblings that come <em>before</em> an element!</p>
            <div className="flex flex-col gap-2 mt-4 bg-indigo-50 rounded-lg p-6 font-sans text-base">
              <p className="has-[+img]:font-bold">We can now easily select elements that come BEFORE another element!</p>
              <img className="rounded-lg" src="https://picsum.photos/seed/picsum/600/215" alt="Random demo image from picsum CDN" />
              <p className="">(And we can still easily select elements that come after too of course!)</p>
            </div>
          </div>
          <div className="lg:w-5/12">
            <h3 className="text-base mb-1">Standard CSS</h3>
            <CodeBlock code={codeCSS4} language="css" />
            <CodeBlock code={codeCSS5} language="css" classes="mt-4" />
            <h3 className="text-base mb-1 mt-8">Tailwind</h3>
            <CodeBlock code={codeTW3} language="markup" />
            <CodeBlock code={codeTW4} language="markup" classes="mt-4" />
          </div>
        </div>
      </Slide>

      <Slide id={4}>
        <div className="flex flex-col lg:flex-row justify-center ~gap-8/20">
          <div className="flex flex-col gap-5 lg:w-7/12 mx-auto">
            <h2 className="slide-heading">Global Conditional Targeting</h2>
            <p>The <code>:has</code> pseudo-class isn't limited to direct children - you can use it as high up the tree as you want, to the extent that we can use it as a kind of global selector that's based on certain conditions.</p>
            <p>For example, a common use-case for me is to disable overflow on the <code>body</code> tag if there is a modal or off-canvas menu currently active.</p>
            <p>Go ahead and click the menu button in the bottom left of this page, and you will see the body can no longer be scrolled - without any JavaScript!</p>
          </div>
          <div className="lg:w-5/12">
            <h3 className="text-base mb-1">Standard CSS</h3>
            <CodeBlock code={codeCSS6} language="css" />
            <h3 className="text-base mb-1 mt-8">Tailwind</h3>
            <CodeBlock code={codeTW5} language="markup" wrap={true} />
          </div>
        </div>
      </Slide>

      <Slide id={5} isLast={true} boxClasses="content-start">
        <div className="flex flex-col lg:flex-row justify-center ~gap-8/20 mb-8">
          <div className="flex flex-col gap-5 lg:w-7/12 mr-auto">
            <h2 className="slide-heading">The scope is huge!</h2>
            <p>The possibilities are endless with <code>:has()</code> - you could feasibly use it to create any number of interactive components, but remember, in many cases JS will be the more appopriate tool for the job!</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center ~gap-8/20">
          <div className="flex-1 has-demo2 mt-4 border border-indigo-200 rounded-lg p-6">
            <form className="flex gap-2">
              <label className="cursor-pointer rounded-lg hover:bg-gray-100 has-[:checked]:text-indigo-800 has-[:checked]:hover:bg-indigo-50 has-[:checked]:bg-indigo-50 border border-gray-200 has-[:checked]:border-indigo-200 font-sans p-4 text-base flex justify-between items-center">
                <span>Tab One</span>
                <input type="radio" name="has-demo2" className="tab-1 invisible absolute" defaultChecked />
              </label>
              <label className="cursor-pointer rounded-lg hover:bg-gray-100 has-[:checked]:text-indigo-800 has-[:checked]:hover:bg-indigo-50 has-[:checked]:bg-indigo-50 border border-gray-200 has-[:checked]:border-indigo-200 font-sans p-4 text-base flex justify-between items-center">
                <span>Tab Two</span>
                <input type="radio" name="has-demo2" className="tab-2 invisible absolute" />
              </label>
              <label className="cursor-pointer rounded-lg hover:bg-gray-100 has-[:checked]:text-indigo-800 has-[:checked]:hover:bg-indigo-50 has-[:checked]:bg-indigo-50 border border-gray-200 has-[:checked]:border-indigo-200 font-sans p-4 text-base flex justify-between items-center">
                <span>Tab Three</span>
                <input type="radio" name="has-demo2" className="tab-3 invisible absolute" />
              </label>
            </form>
            <p className="has-demo2-tab has-demo2-tab-1 mt-4 text-base font-sans">I'm some content for tab one.</p>
            <p className="has-demo2-tab has-demo2-tab-2 mt-4 text-base font-sans">I'm some content for tab two.</p>
            <p className="has-demo2-tab has-demo2-tab-3 mt-4 text-base font-sans">I'm some content for tab three.</p>
          </div>
          <div className="flex-1">
            <h3 className="text-base mb-1">Standard CSS</h3>
            <CodeBlock code={codeCSS7} language="css" />
          </div>
        </div>
      </Slide>
    
    </DefaultTemplate>
  );
}

import DefaultTemplate from "../../components/DefaultTemplate"
import BaselineStatus from "@/app/components/BaselineStatus";
import CodeBlock from "@/app/components/CodeBlock";
import Slide from "@/app/components/Slide";
import Modal from "./Modal";

const codeCSS = `/* ACTIVE STATE */
.modal[open] {
  translate: 0 0;
  display: block;
}

/* EXIT END STATE */
.modal {
  display: none;
  translate: 0 -100vh;
  transition: 0.7s;
  transition-behavior: allow-discrete;
}

/* ENTRY START STATE   */
@starting-style {
  .modal[open] {
    translate: 0 100vh;
  }
}`

export default function page() {
  return (
    <DefaultTemplate
      title="Transition from display: none"
      prevSlug="/transition-to-auto"
      nextSlug="/view-transitions"
    >
    
      <Slide id={1} boxClasses="flex flex-col lg:flex-row justify-center ~gap-8/20" wrapperClasses="overflow-hidden">
        <div className="flex flex-col gap-5 lg:w-7/12 mx-auto flex-none">
          <h2 className="slide-heading">display none Transitions</h2>
          <p>We can also now transition elements that are shown/hidden using the <code>display</code> property! 😱</p>
          <p>And not only that, you can also apply different entry and exit animations too.</p>
          <Modal classes="starting-style" btnText="Toggle @starting-style modal" />
          <BaselineStatus featureId="transition-behavior" classes="mt-3" />
          <BaselineStatus featureId="starting-style" classes="mt-3" />
        </div>
        <div className="lg:w-5/12">
          <CodeBlock code={codeCSS} language="css" />
        </div>
      </Slide>

      <Slide id={2} isLast boxClasses="content-start">
        <div className="">
          <h2 className="slide-heading">Visualing how it works</h2>

          <p className="mt-4">The below shows how the <code>transition-behavior: allow-discrete</code> rule works.</p>
          
          <div className="~p-4/8 rounded-2xl bg-indigo-50 dark:bg-gray-800 mt-10">
            <h3 className="font-primary font-normal text-center mb-6">Going from display none to block</h3>
            <div className="flex w-full mb-2 gap-2 text-center">
              <p className="~text-xs/base ~w-28/48 p-2 bg-indigo-100 dark:bg-gray-700 rounded-xl">Snap change from none to block</p>
            </div>
            <div className="flex justify-between w-full mb-2 gap-2 text-center">
              <p className="~text-xs/base ~w-28/48 p-2 bg-indigo-100 dark:bg-gray-700 rounded-xl">@starting-style styles</p>
              <p className="~text-xs/base ~w-28/48 p-2 bg-indigo-100 dark:bg-gray-700 rounded-xl content-center">active styles</p>
            </div>
            <div className="flex flex-1 mx-8 pt-1 border-t border-black dark:border-white">
              <span>0%</span>
              <span className="flex-1 text-center">the animation</span>
              <span>100%</span>
            </div>
          </div>

          <div className="~p-4/8 rounded-2xl bg-indigo-50 dark:bg-gray-800 mt-8">
            <h3 className="font-primary font-normal text-center mb-6">Going from display block to none</h3>
            <div className="flex justify-end w-full mb-2 gap-2 text-center">
              <p className="~text-xs/base ~w-28/48 p-2 bg-indigo-100 dark:bg-gray-700 rounded-xl">Snap change from block to none</p>
            </div>
            <div className="flex justify-between w-full mb-2 gap-2 text-center">
              <p className="~text-xs/base ~w-28/48 p-2 bg-indigo-100 dark:bg-gray-700 rounded-xl content-center">active styles</p>
              <p className="~text-xs/base ~w-28/48 p-2 bg-indigo-100 dark:bg-gray-700 rounded-xl content-center">non-active styles</p>
            </div>
            <div className="flex flex-1 mx-8 pt-1 border-t border-black dark:border-white">
              <span>0%</span>
              <span className="flex-1 text-center">the animation</span>
              <span>100%</span>
            </div>
          </div>

        </div>
      </Slide>
    
    </DefaultTemplate>
  );
}

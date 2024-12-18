import DefaultTemplate from "../../components/DefaultTemplate"
import BaselineStatus from "@/app/components/BaselineStatus";
import CodeBlock from "@/app/components/CodeBlock";
import Slide from "@/app/components/Slide";

const codeCSS = `@view-transition {
  navigation: auto;
}`

export default function page() {
  return (
    <DefaultTemplate
      title="View Transitions"
      prevSlug="/transition-from-display-none"
      nextSlug="/clamp"
    >
    
      <Slide id={1} isLast boxClasses="flex flex-col lg:flex-row justify-center ~gap-8/20" wrapperClasses="overflow-hidden">
        <div className="flex flex-col gap-5 lg:w-7/12 mx-auto flex-none">
          <h2 className="slide-heading">Cross Document View Transitions</h2>
          <p>There's a lot of scope to the new View Transitions API, but the headline grabber is you can now transition between <strong>*separate pages*</strong> with a simple CSS rule.</p>
          <p>The code snippet will enable a simple fade transition between any pages that have this in place.</p>
          <p>To test this out, use the arrows in the bottom right to navigate between the pages of this site!</p>
          <BaselineStatus featureId="view-transitions" classes="mt-3" />
        </div>
        <div className="lg:w-5/12">
          <CodeBlock code={codeCSS} language="css" />
        </div>
      </Slide>
    
    </DefaultTemplate>
  );
}

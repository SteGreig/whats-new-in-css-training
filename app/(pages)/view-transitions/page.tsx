import DefaultTemplate from "../../components/DefaultTemplate"
import BaselineStatus from "@/app/components/BaselineStatus";
import CodeBlock from "@/app/components/CodeBlock";
import Slide from "@/app/components/Slide";

const codeCSS = `@view-transition {
  navigation: auto;
}`

const codeCSS2 = `::view-transition
├─ ::view-transition-group(root)
│  └─ ::view-transition-image-pair(root)
│     ├─ ::view-transition-old(root)
│     └─ ::view-transition-new(root)`

const codeCSS3 = `.my-header {
  view-transition-name: my-header;
}`

const codeCSS4 = `::view-transition
├─ ::view-transition-group(root)
│  └─ ::view-transition-image-pair(root)
│     ├─ ::view-transition-old(root)
│     └─ ::view-transition-new(root)
└─ ::view-transition-group(my-header)
    └─ ::view-transition-image-pair(my-header)
      ├─ ::view-transition-old(my-header)
      └─ ::view-transition-new(my-header)`

const codeCSS5 = `@keyframes fade-in {
  from { opacity: 0; }
}

@keyframes fade-out {
  to { opacity: 0; }
}

@keyframes slide-from-right {
  from { transform: translateX(100px); }
}

@keyframes slide-to-left {
  to { transform: translateX(-100px); }
}

::view-transition-old(root) {
  animation: 1s fade-out, 1s slide-to-left;
}

::view-transition-new(root) {
  animation: 1s fade-in, 1s slide-from-right;
}`

export default function page() {
  return (
    <DefaultTemplate
      title="View Transitions"
      prevSlug="/transition-from-display-none"
      nextSlug="/clamp"
    >
    
      <Slide id={1} boxClasses="flex flex-col lg:flex-row justify-center ~gap-8/20" wrapperClasses="overflow-hidden">
        <div className="flex flex-col gap-5 lg:w-7/12 mx-auto">
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

      <Slide id={2} isLast boxClasses="flex flex-col ~gap-6/8">
        <div className="flex flex-col gap-5 lg:w-7/12">
          <h2 className="slide-heading">More Control</h2>
          <p>The API provides a bunch of pseudo-classes that allow you more control over the animations of the exiting and entering pages.</p>
        </div>
        <div className="w-full">
          <CodeBlock code={codeCSS2} language="css" />
        </div>
        <p>These all target the root element, but you can use the <code>view-transition-name</code> property on any element to animate specific elements.</p>
        <div className="w-full">
          <CodeBlock code={codeCSS3} language="css" />
        </div>
        <p>After this, you now have additional pseudo-classes to target for your specific element.</p>
        <div className="w-full">
          <CodeBlock code={codeCSS4} language="css" />
        </div>
        <p>Here's an example of CSS animations being applied to the exiting page (<code>::view-transition-old(root)</code>) and the entering page (<code>::view-transition-new(root)</code>).</p>
        <div className="w-full">
          <CodeBlock code={codeCSS5} language="css" />
        </div>
      </Slide>
    
    </DefaultTemplate>
  );
}

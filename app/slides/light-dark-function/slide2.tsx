import BaselineStatus from "@/app/components/BaselineStatus";
import CodeBlock from "@/app/components/CodeBlock";

const codeCSS = `:root {
  color-scheme: light dark;
}`

const codeCSSTwo = `:root {
  /* Force light scheme */
  color-scheme: light;
}`

const codeCSSThree = `:root {
  /* Force dark scheme */
  color-scheme: dark;
}`

export default {
  boxClasses: "flex flex-col lg:flex-row justify-center ~gap-8/20",
  content: (
    <>
      <div className="flex flex-col gap-5 lg:w-7/12 mx-auto">
        <h2 className="slide-heading">color-scheme</h2>
        <p>As mentioned above, it also requires the <code>color-scheme</code> property to be set (usually on the <code>:root</code> pseudo-class).</p>
        <p>It should generally have a value of <code>light dark</code> so as to not override the user's light/dark mode preference, but you can force light or dark schemes by default if you wish.</p>
        <p>You can also set this <code>color-scheme</code> property on any elements of your page to force a particular section to use light or dark mode.</p>
        <BaselineStatus featureId="color-scheme" classes="mt-3" />
      </div>
      <div className="lg:w-5/12 flex flex-col gap-4">
        <CodeBlock code={codeCSS} language="css" />
        <CodeBlock code={codeCSSTwo} language="css" />
        <CodeBlock code={codeCSSThree} language="css" />
      </div>
    </>
  ),
};
import BaselineStatus from "@/app/components/BaselineStatus";
import CodeBlock from "@/app/components/CodeBlock";

const codeCSS = `:root {
  /* required */
  color-scheme: light dark;
}

body {
  background: light-dark(#fff, #000);
  color: light-dark(#000, #fff);
}
  
div {
  border-color: light-dark(black, yellow);
}`

export default {
  boxClasses: "flex flex-col lg:flex-row justify-center ~gap-8/20",
  content: (
    <>
      <div className="flex flex-col gap-5 lg:w-7/12 mx-auto">
        <h2 className="slide-heading">The light-dark() Function</h2>
        <p>Instead of having to wrap light/dark styles in a <code>prefers-color-scheme</code> media query, we can now use the <code>light-dark()</code> function to specify a color for light mode and a color for dark mode (in that order). </p>
        <p>You can use it anywhere you'd normally specify a color value!</p>
        <p>You won't need to reach for this much if you're using Tailwind, but it's a really nice utility to be aware of if you're writing vanilla CSS.</p>
        <BaselineStatus featureId="light-dark" classes="mt-3" />
      </div>
      <div className="lg:w-5/12">
        <CodeBlock code={codeCSS} language="css" />
      </div>
    </>
  ),
};
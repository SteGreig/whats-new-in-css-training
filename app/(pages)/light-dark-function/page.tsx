import DefaultTemplate from "../../components/DefaultTemplate"
import BaselineStatus from "@/app/components/BaselineStatus";
import CodeBlock from "@/app/components/CodeBlock";
import Slide from "@/app/components/Slide";

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

const codeCSSTwo = `:root {
  color-scheme: light dark;
}`

const codeCSSThree = `:root {
  /* Force light scheme */
  color-scheme: light;
}`

const codeCSSFour = `:root {
  /* Force dark scheme */
  color-scheme: dark;
}`

const codeOne = `div {
  background-color: light-dark(antiquewhite, #283249);
  color: light-dark(#000, #fff);
  border: 10px solid light-dark(#dacebd, #969fb5);
}`;

export default function page() {
  return (
    <DefaultTemplate
      title="light-dark() Function"
      prevSlug="/inset"
      nextSlug="/has-pseudo-class"
    >
    
      <Slide id={1} boxClasses="flex flex-col lg:flex-row justify-center ~gap-8/20">
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
      </Slide>

      <Slide id={2} boxClasses="flex flex-col lg:flex-row justify-center ~gap-8/20">
        <div className="flex flex-col gap-5 lg:w-7/12 mx-auto">
          <h2 className="slide-heading">color-scheme</h2>
          <p>As mentioned above, it also requires the <code>color-scheme</code> property to be set (usually on the <code>:root</code> pseudo-class).</p>
          <p>It should generally have a value of <code>light dark</code> so as to not override the user's light/dark mode preference, but you can force light or dark schemes by default if you wish.</p>
          <p>You can also set this <code>color-scheme</code> property on any elements of your page to force a particular section to use light or dark mode.</p>
          <BaselineStatus featureId="color-scheme" classes="mt-3" />
        </div>
        <div className="lg:w-5/12 flex flex-col gap-4">
          <CodeBlock code={codeCSSTwo} language="css" />
          <CodeBlock code={codeCSSThree} language="css" />
          <CodeBlock code={codeCSSFour} language="css" />
        </div>
      </Slide>

      <Slide id={3} isLast={true} boxClasses="content-start gap-8 flex flex-col light-dark-example">
        <h2 className="slide-heading">Try it out</h2>
        <p>Use the light/dark mode toggle to switch theme and see how these rules take effect.</p>
        <div className="flex flex-col lg:flex-row ~gap-4/8">
          <div className="example flex-1 rounded-xl relative ~text-xl/3xl font-primary font-normal text-center content-center">
            <p>Hello</p>
          </div>
          <div className="flex-1">
            <CodeBlock code={codeOne} language="css" />
          </div>
        </div>
      </Slide>
    
    </DefaultTemplate>
  );
}

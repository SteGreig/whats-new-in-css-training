import DefaultTemplate from "../../components/DefaultTemplate"
import BaselineStatus from "@/app/components/BaselineStatus";
import CodeBlock from "@/app/components/CodeBlock";
import Slide from "@/app/components/Slide";

const codeCSSLong = `div {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}`;
const codeCSSShort = `div {
  /* inset: 0 0 0 0; */
  inset: 0;
}`;

const codeTWLong = `<div class="top-0 right-0 bottom-0 left-0"></div>`;

const codeTWShort = `<div class="inset-0"></div>`;

const codeOne = `div {
  inset: 25%;
}

<div class="inset-1/4"></div>`;

const codeTwo = `div {
  /* inset: 0 33.333% 0 33.333% */
  inset: 0 33.333%;
}

<div class="inset-y-0 inset-x-1/3"></div>`;

const codeThree = `div {
  inset: 0 0 0 50%;
}

<div class="inset-y-0 left-1/2 right-0"></div>`;

const codeFour = `div {
  inset: 75% 0 0 0;
}

<div class="inset-x-0 bottom-0 top-3/4"></div>`;

export default function page() {

  return (
    <DefaultTemplate
      title="inset"
      prevSlug="/isolate"
      nextSlug="/light-dark-function"
    >
      
      <Slide id={1} boxClasses="flex flex-col items-start ~gap-8/14">
        <div className="flex flex-col gap-5 lg:w-7/12 mr-auto">
          <h2 className="slide-heading">inset Shorthand</h2>
          <p>Again, this property has been around a few years now (2021) but is a nice shortener to be aware of.</p>
          <p>It's a shorthand for the <code>top</code>, <code>right</code>, <code>bottom</code> and <code>left</code> properties (in that order) on positioned elements.</p>
          {/* <BaselineStatus featureId="inset" classes="mt-3" /> */}
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-8">
          <div className="flex-1">
            <h3 className="text-base mb-1">👎 Standard CSS (Longhand)</h3>
            <CodeBlock code={codeCSSLong} language="css" />
          </div>
          <div className="flex-1">
            <h3 className="text-base mb-1">👍 Standard CSS (Shorthand)</h3>
            <CodeBlock code={codeCSSShort} language="css" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-8">
          <div className="flex-1">
            <h3 className="text-base mb-1">👎 Tailwind (Longhand)</h3>
            <CodeBlock code={codeTWLong} language="markup" wrap={true} />
          </div>
          <div className="flex-1">
            <h3 className="text-base mb-1">👍 Tailwind (Shorthand)</h3>
            <CodeBlock code={codeTWShort} language="markup" wrap={true} />
          </div>
        </div>
      </Slide>


      <Slide id={2} isLast={true} boxClasses="content-start gap-8 flex flex-col">
        <h2 className="slide-heading">A Few Examples</h2>
        <div className="flex flex-col lg:flex-row ~gap-4/8">
          <div className="flex-1 rounded-xl bg-blue-100 relative">
            <div className="absolute inset-1/4 bg-gradient-to-tl from-blue-500 to-blue-400 rounded-xl">
            </div>
          </div>
          <div className="flex-1">
            <CodeBlock code={codeOne} language="css" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row ~gap-4/8">
          <div className="flex-1 rounded-xl bg-blue-100 relative">
            <div className="absolute inset-x-1/3 inset-y-0 bg-gradient-to-tl from-blue-500 to-blue-400 rounded-xl">
            </div>
          </div>
          <div className="flex-1">
            <CodeBlock code={codeTwo} language="css" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row ~gap-4/8">
          <div className="flex-1 rounded-xl bg-blue-100 relative">
            <div className="absolute left-1/2 right-0 inset-y-0 bg-gradient-to-tl from-blue-500 to-blue-400 rounded-xl">
            </div>
          </div>
          <div className="flex-1">
            <CodeBlock code={codeThree} language="css" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row ~gap-4/8">
          <div className="flex-1 rounded-xl bg-blue-100 relative">
            <div className="absolute inset-x-0 bottom-0 top-3/4 bg-gradient-to-tl from-blue-500 to-blue-400 rounded-xl">
            </div>
          </div>
          <div className="flex-1">
            <CodeBlock code={codeFour} language="css" />
          </div>
        </div>
      </Slide>
    
    </DefaultTemplate>
  );
}

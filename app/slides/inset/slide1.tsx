import BaselineStatus from "@/app/components/BaselineStatus";
import CodeBlock from "@/app/components/CodeBlock";

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

export default {
  boxClasses: "flex flex-col items-start ~gap-8/14",
  content: (
    <>
      <div className="flex flex-col gap-5 lg:w-7/12 mr-auto">
        <h2 className="slide-heading">inset Shorthand</h2>
        <p>Again, this property has been around a few years now (2021) but is a nice shortener to be aware of.</p>
        <p>It's a shorthand for the <code>top</code>, <code>right</code>, <code>bottom</code> and <code>left</code> properties (in that order) on positioned elements.</p>
        {/* <BaselineStatus featureId="inset" classes="mt-3" /> */}
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-8">
        <div className="flex-1">
          <h3 className="text-base mb-1">Standard CSS (Longhand)</h3>
          <CodeBlock code={codeCSSLong} language="css" />
        </div>
        <div className="flex-1">
          <h3 className="text-base mb-1">Standard CSS (Shorthand)</h3>
          <CodeBlock code={codeCSSShort} language="css" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-8">
        <div className="flex-1">
          <h3 className="text-base mb-1">Tailwind (Longhand)</h3>
          <CodeBlock code={codeTWLong} language="css" wrap={true} />
        </div>
        <div className="flex-1">
          <h3 className="text-base mb-1">Tailwind (Shorthand)</h3>
          <CodeBlock code={codeTWShort} language="css" wrap={true} />
        </div>
      </div>
    </>
  ),
};
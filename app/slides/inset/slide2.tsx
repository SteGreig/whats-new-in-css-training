import CodeBlock from "@/app/components/CodeBlock";

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

export default {
  boxClasses: "content-start gap-8 flex flex-col",
  content: (
    <>
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
    </>
  ),
};
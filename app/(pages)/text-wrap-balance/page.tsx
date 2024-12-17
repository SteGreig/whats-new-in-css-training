import DefaultTemplate from "../../components/DefaultTemplate"
import BaselineStatus from "@/app/components/BaselineStatus";
import CodeBlock from "@/app/components/CodeBlock";
import Slide from "@/app/components/Slide";

const codeTW = `<h1 class="text-balance">My headline that spans multiple lines</h1>`;
const codeCSS = `h1 {
    text-wrap: balance;
}`;

export default function page() {
  return (
    <DefaultTemplate title="text-wrap: balance" prevSlug="/" nextSlug="/scroll-behavior-smooth">
    
      <Slide id={1} boxClasses="flex flex-col lg:flex-row justify-center ~gap-8/20">
        <div className="flex flex-col gap-5 lg:w-7/12 mx-auto">
          <h2 className="slide-heading">text-wrap: balance</h2>
          <p>This wonderfully simple property will split multi-line text evenly across each line.</p>
          <p>It eliminates the need to put max-widths on your headlines, or insert <code>br</code> / <code>span</code> tags to control how the text wraps. One of my most used new features!</p>
          <BaselineStatus featureId="text-wrap-balance" classes="mt-3" />
        </div>
        <div className="lg:w-5/12">
          <p className="text-slate-600 text-sm mb-1"><code>text-wrap: wrap</code> (default)</p>
          <div className="bg-blue-50 text-slate-500 rounded-2xl p-8 max-w-[460px]">
            <p className="font-primary font-normal max-w-[396px] text-xl">A headline spanning multiple lines</p>
          </div>
          <p className="text-slate-600 text-sm mb-1 mt-8"><code>text-wrap: balance</code></p>
          <div className="bg-blue-50 text-slate-500 rounded-2xl p-8 max-w-[460px]">
            <p className="font-primary font-normal max-w-[396px] text-xl text-balance">A headline spanning multiple lines</p>
          </div>
        </div>
      </Slide>

      <Slide id={2} isLast={true} boxClasses="flex flex-col lg:flex-row justify-center ~gap-8/20">
        <div className="lg:w-1/2">
          <h3 className="text-base mb-1">Standard CSS</h3>
          <CodeBlock code={codeCSS} language="css" />
        </div>

        <div className="lg:w-1/2">
          <h3 className="text-base mb-1">Tailwind</h3>
          <CodeBlock code={codeTW} language="css" wrap={true} />
        </div>
      </Slide>
    
    </DefaultTemplate>
  );
}

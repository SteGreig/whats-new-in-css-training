import BaselineStatus from "@/app/components/BaselineStatus";
import CodeBlock from "@/app/components/CodeBlock";

const codeTW = `<h1 class="text-balance">My headline that spans multiple lines</h1>`;
const codeCSS = `h1 {
    text-wrap: balance;
}`;

export default {
  boxClasses: "flex flex-col lg:flex-row justify-center ~gap-8/20",
  content: (
    <>
      <div className="lg:w-1/2">
        <h3 className="text-base mb-1">Standard CSS</h3>
        <CodeBlock code={codeCSS} language="css" />
      </div>

      <div className="lg:w-1/2">
        <h3 className="text-base mb-1">Tailwind</h3>
        <CodeBlock code={codeTW} language="css" wrap={true} />
      </div>
      
    </>
  ),
};
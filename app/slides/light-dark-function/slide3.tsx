import CodeBlock from "@/app/components/CodeBlock";

const codeOne = `div {
  background-color: light-dark(antiquewhite, #283249);
  color: light-dark(#000, #fff);
  border: 10px solid light-dark(#dacebd, #969fb5);
}`;

export default {
  boxClasses: "content-start gap-8 flex flex-col light-dark-example",
  content: (
    <>
      <h2 className="slide-heading">Try it out</h2>
      <div className="flex gap-2">
        <input id="ld-toggle" type="checkbox" name="ld-toggle" />
        <label htmlFor="ld-toggle" className="text-base cursor-pointer">Toggle Light/Dark Mode</label>
      </div>
      <div className="flex flex-col lg:flex-row ~gap-4/8">
        <div className="example flex-1 rounded-xl relative ~text-xl/3xl font-primary font-normal text-center content-center">
          <p>Hello</p>
        </div>
        <div className="flex-1">
          <CodeBlock code={codeOne} language="css" />
        </div>
      </div>
    </>
  ),
};
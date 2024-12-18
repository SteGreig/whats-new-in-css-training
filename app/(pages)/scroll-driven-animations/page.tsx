import DefaultTemplate from "../../components/DefaultTemplate"
import BaselineStatus from "@/app/components/BaselineStatus";
import CodeBlock from "@/app/components/CodeBlock";
import Slide from "@/app/components/Slide";

const code1 = `animation-timeline: scroll()`
const code2 = `animation-timeline: view()`

export default function page() {
  return (
    <DefaultTemplate
      title="Scroll Driven Animations"
      prevSlug="/clamp"
    >
    
      <Slide id={1} boxClasses="flex flex-col lg:flex-row justify-center ~gap-8/20" wrapperClasses="overflow-hidden">
        <div className="flex flex-col gap-5 lg:w-7/12 mr-auto">
          <h2 className="slide-heading">Scroll Driven Animations</h2>
          <p>Undoubtedly one of the most exciting developments in CSS is that we now have the ability to <em>scroll</em> our way through CSS animations!</p>
          <p>There's a lot to this, so I'll just be scratching the surface.</p>
          <BaselineStatus featureId="scroll-driven-animations" classes="mt-3" />
        </div>
      </Slide>

      <div className="scroll-indicator h-12 bg-black dark:bg-white text-white dark:text-black text-center content-center fixed top-0 left-0 w-full z-50">
      </div>

      <Slide id={2} boxClasses="flex flex-col lg:flex-row justify-center ~gap-8/20" wrapperClasses="overflow-hidden">
        <div className="flex flex-col ~gap-4/8 lg:w-7/12 mr-auto">
          <h2 className="slide-heading">animation-timeline</h2>
          <p>The <code>animation-timeline</code> property is the first thing you need to understand. There are two main options you can use for its value.</p>
          <div>
            <h3 className="font-primary font-normal mb-2">scroll()</h3>
            <CodeBlock code={code1} language="css" />
            <p className="mt-4">This one is the easier to understand - it means the scrollbar is essentially the timeline for your animation. So by default the top of the page is 0% and the bottom of the page is 100%.</p>
          </div>
          <div>
            <h3 className="font-primary font-normal mb-2">view()</h3>
            <CodeBlock code={code2} language="css" />
            <p className="mt-4">With <code>view()</code>, the emergence of the element itself becomes the timeline for your animation. By default, this means your animation will be at 0% when the element starts to appear and 100% when it is scrolled out of view (like how you'd use <code>IntersectionObserver</code>).</p>
          </div>
        </div>
      </Slide>

      <Slide id={3} boxClasses="flex flex-col lg:flex-row justify-center ~gap-8/20" wrapperClasses="overflow-hidden">
        <div className="flex flex-col ~gap-4/8 lg:w-7/12 mr-auto">
          <h2 className="slide-heading">animation-timeline: scroll()</h2>
          <p>Let's dig more into <code>scroll()</code> since it's a bit more straightforward.</p>
          <p>Notice the bar moving across the screen at the top as you scroll? That's our first example, as it's a clear demonstration of how a this works.</p>
          <div>
            <h3 className="font-primary font-normal mb-2">scroll()</h3>
            <CodeBlock code={code1} language="css" />
            <p className="mt-4">This one is the easier to understand - it means the scrollbar is essentially the timeline for your animation. So by default the top of the page is 0% and the bottom of the page is 100%.</p>
          </div>
          <div>
            <h3 className="font-primary font-normal mb-2">view()</h3>
            <CodeBlock code={code2} language="css" />
            <p className="mt-4">With <code>view()</code>, the emergence of the element itself becomes the timeline for your animation. By default, this means your animation will be at 0% when the element starts to appear and 100% when it is scrolled out of view (like how you'd use <code>IntersectionObserver</code>).</p>
          </div>
        </div>
      </Slide>
    
    </DefaultTemplate>
  );
}

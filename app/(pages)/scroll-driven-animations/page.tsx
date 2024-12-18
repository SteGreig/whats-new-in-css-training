import DefaultTemplate from "../../components/DefaultTemplate"
import BaselineStatus from "@/app/components/BaselineStatus";
import CodeBlock from "@/app/components/CodeBlock";
import Slide from "@/app/components/Slide";

const code1 = `animation-timeline: scroll()`
const code2 = `animation-timeline: view()`

const code3 = `@keyframes scaleXFull {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}`

const code4 = `.scroll-indicator {
  animation: scaleXFull;
  animation-timeline: scroll();
  transform-origin: left;
}`

const code5 = `/* Longhand properties
animation-range-start: 0;
animation-range-end: 100%;
*/

animation-range: cover`

const code6 = `animation-range: 100px 500px;`

const code7 = `@keyframes scaleXFull {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes colorChange {
  from {
    background-color: red;
  }
  to {
    background-color: rebeccapurple;
  }
}

.element {
  animation: colorChange, scaleXFull;
  animation-timeline: view();
}`

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

      <div className="scroll-indicator h-10 bg-black dark:bg-white text-white dark:text-black text-center content-center fixed top-0 left-0 w-full z-50">
      </div>

      <Slide id={2} boxClasses="flex flex-col lg:flex-row justify-center ~gap-8/20" wrapperClasses="overflow-hidden">
        <div className="flex flex-col ~gap-4/8 lg:w-7/12 mr-auto">
          <h2 className="slide-heading">animation-timeline</h2>
          <p>The <code>animation-timeline</code> property is the first thing you need to understand. There are two main options you can use for its value.</p>
          <CodeBlock code={code1} language="css" />
          <CodeBlock code={code2} language="css" />
          <p>Let's dig more into <code>scroll()</code> since it's a bit more straightforward...</p>
        </div>
      </Slide>

      <Slide id={3} boxClasses="flex flex-col lg:flex-row justify-center ~gap-8/20" wrapperClasses="overflow-hidden">
        <div className="flex flex-col ~gap-4/8 lg:w-7/12 mr-auto">
          <h2 className="slide-heading">animation-timeline: scroll()</h2>
          <CodeBlock code={code1} language="css" />
          <p className="mt-4">The <code>scroll()</code> value means the scrollbar is essentially the timeline for your animation. So by default the top of the page is 0% and the bottom of the page is 100%.</p>
          <p>Notice the bar moving across the screen at the top as you scroll? That's our first example, as it's a clear demonstration of how this works.</p>
          <p>The actual animation keyframes are very simple:</p>
          <CodeBlock code={code3} language="css" />
          <p>The animation scales our div from 0 width to full width.</p>
          <p>Now we need to apply the animation to our element:</p>
          <CodeBlock code={code4} language="css" />
          <p>Notice that we don't specify a duration for the animation because that's completely redundant now. The duration is however quick we scroll! Instead we have the <code>animation-timeline: scroll()</code> rule.</p>
          <p>And that's it! Now we have a pure CSS scroll indicator.</p>
        </div>
      </Slide>

      <Slide id={4} boxClasses="flex flex-col lg:flex-row justify-center ~gap-8/20" wrapperClasses="overflow-hidden">
        <div className="flex flex-col ~gap-4/8 lg:w-7/12 mr-auto">
          <h2 className="slide-heading">animation-range</h2>
          <p>Before moving on, let's look at the <code>animation-range</code> property.</p>
          <CodeBlock code={code5} language="css" />
          <p>Obviously, a lot of the time you won't want your animation to play out over the <em>full</em> length of the page, and that's where the <code>animation-range</code> property comes in, allowing you to specify a portion of the overall page length where the animation should run.</p>
          <p>So if you wanted your animation to start when you've scrolled 100px and finish when you've scrolled 500px, you would do:</p>
          <CodeBlock code={code6} language="css" />
          <p>You can of course use % values too.</p>
        </div>
      </Slide>

      <Slide id={5} boxClasses="flex flex-col lg:flex-row justify-center ~gap-8/20" wrapperClasses="overflow-hidden">
        <div className="flex flex-col ~gap-4/8 lg:w-7/12 mr-auto">
          <h2 className="slide-heading">animation-timeline: view()</h2>
          <CodeBlock code={code2} language="css" />
          <p className="mt-4">With <code>view()</code>, the emergence of the element itself becomes the timeline for your animation. By default, this means your animation will be at 0% when the element starts to appear and 100% when it is scrolled out of view (like how you'd use <code>IntersectionObserver</code>).</p>
        </div>
      </Slide>

      <section id="slide6" className="w-full h-screen anim-view-demo bg-blue-300 content-center text-center after:bg-gradient-to-br after:from-black/20 after:z-[-1] after:absolute after:inset-0 relative text-black">
        <p className="m-auto w-full max-w-96 text-4xl mb-4">I start animating as soon as my first pixel is visible, and I don't finish until my last pixel has disappeared out of view!</p>
        (<code>animation-range: cover</code>)
      </section>

      <Slide id={7} boxClasses="flex flex-col lg:flex-row justify-center ~gap-8/20" wrapperClasses="overflow-hidden">
        <div className="flex flex-col ~gap-4/8 lg:w-7/12 mr-auto">
          <p className="mt-4">The above demo and the ones below all use the same keyframes and code, except for the <code>animation-range</code> setting.</p>
          <CodeBlock code={code7} language="css" />
          <p>They all have a default pale blue background color, and when the animation kicks in it animates from red to purple. So it will be pale blue before and after the animation takes place - this is to illustrate when the animation is happening.</p>
        </div>
      </Slide>

      <section id="slide8" className="w-full h-screen anim-view-demo2 bg-blue-300 content-center text-center after:bg-gradient-to-br after:from-black/20 after:z-[-1] after:absolute after:inset-0 relative text-black">
        <p className="m-auto w-full max-w-96 text-4xl mb-4">I start animating as soon as my first pixel is visible, and I finish as soon as I hit the top of the screen!</p>
        (<code>animation-range: 0 100vh</code>)
      </section>

      <section id="slide9" className="w-full h-screen anim-view-demo3 bg-blue-300 content-center text-center after:bg-gradient-to-br after:from-black/20 after:z-[-1] after:absolute after:inset-0 relative text-black">
        <p className="m-auto w-full max-w-96 text-4xl mb-4">I start animating when 200px of me is visible, and I finish when 800px of me is visible</p>
        (<code>animation-range: 200px 800px</code>)
      </section>

      <Slide id={10} isLast boxClasses="flex flex-col lg:flex-row justify-center ~gap-8/20" wrapperClasses="overflow-hidden">
        <div className="flex flex-col ~gap-4/8 lg:w-7/12 mr-auto">
          <h2 className="slide-heading">Tip of the iceberg</h2>
          <p className="mt-4">The <code>animation-range</code> values can get so much more complex than I've shown here.</p>
          <p>The best way to understand it all is to use these excellent visualiser tools built by Google's Bramus.</p>
          <p><a href="https://scroll-driven-animations.style/#tools">Scroll Driven Animation Visualiser Tools</a></p>
        </div>
      </Slide>

      {/* <div className="w-5 h-[600px] fixed bottom-0 left-0 bg-slate-400"></div> */}
    
    </DefaultTemplate>
  );
}

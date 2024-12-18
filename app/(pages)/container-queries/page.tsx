import DefaultTemplate from "../../components/DefaultTemplate"
import BaselineStatus from "@/app/components/BaselineStatus";
import CodeBlock from "@/app/components/CodeBlock";
import Slide from "@/app/components/Slide";

import Card from "./Card";

const codeCSS = `@container (min-width: 512px) {
  .card {
    padding: 20px;
  }
}`

const codeTW = `<div class="@container">
  <div class="card @lg:p-5">
  </div>
</div>`

const codeTW2 = `<div className="@container">
  <div className="card rounded-2xl bg-indigo-100">
    <img className="rounded-2xl" src="..." alt="..." />
    <div className="p-3 @xs:p-5 @lg:p-7">
      <p className="@xs:text-lg @lg:text-2xl">My Card Title</p>
      <p className="hidden @lg:block">A short blurb...</p>
    </div>
  </div>
</div>`

const codeCSS2 = `@container (min-width: 320px) {
  .card .text {
    padding: 1.25rem;
  }
  .card .title {
    font-size: 1.125rem;
  }
}

@container (min-width: 512px) {
  .card .text {
    padding: 1.75rem;
  }
  .card .title {
    font-size: 1.5rem;
  }
  .card .blurb {
    display: block;
  }
}`

export default function page() {
  return (
    <DefaultTemplate
      title="Container Queries"
      prevSlug="/has-pseudo-class"
      nextSlug="/transition-to-auto"
    >
    
      <Slide id={1} boxClasses="flex flex-col lg:flex-row justify-center ~gap-8/20">
        <div className="flex flex-col gap-5 lg:w-7/12 mx-auto">
          <h2 className="slide-heading">Container Queries</h2>
          <p>Container queries have a simple concept - they're just like normal <code>@media</code> queries, but based on an element's <em>container</em> size rather than the viewport size.</p>
          <p>The huge benefit of container queries is it means a component can be styled based on its own width, so it can be dropped into a sidebar, content section or anywhere else and it will <em>just work</em>.</p>
          <BaselineStatus featureId="container-queries" classes="mt-3" />
        </div>
        <div className="lg:w-5/12">
          <h3 className="text-base mb-1">Standard CSS</h3>
          <CodeBlock code={codeCSS} language="css" />
          <h3 className="text-base mb-1 mt-8">Tailwind (<a href="https://github.com/tailwindlabs/tailwindcss-container-queries">requires plugin</a>)</h3>
          <CodeBlock code={codeTW} language="markup" wrap={true} />
        </div>
      </Slide>

      <Slide id={2} isLast={true} boxClasses="content-start">
        <div className="flex flex-col lg:flex-row justify-center ~gap-8/20 mb-8">
          <div className="flex flex-col gap-5 lg:w-7/12 mr-auto">
            <h2 className="slide-heading">Cards Example</h2>
            <p>The below shows the exact same card component in an assortment of different grids, which is a common requirement. It doesn't even matter if we bring in a sidebar at a certain screen size - container queries ensure the card will always will use the appropriate styling!</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <Card /><Card />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <Card /><Card /><Card /><Card />
        </div>
        <div className="hidden sm:grid sm:grid-cols-3 gap-4 mb-4">
          <Card /><Card /><Card />
        </div>
        <div className="mt-8 w-full flex flex-col lg:flex-row ~gap-4/8">
          <div className="lg:w-7/12">
            <h3 className="text-base mb-1">Tailwind</h3>
            <CodeBlock code={codeTW2} language="markup" />
            <p className="mt-6">I do quite like the Tailwind implementation of container queries. You simply use <code>@container</code> to define your context, and then <code>@xs:</code>, <code>@sm:</code> etc. instead of the usual viewport prefixes. Bear in mind though that the sizes are different - the default sizes can be found in the <a href="https://github.com/tailwindlabs/tailwindcss-container-queries">repo readme</a>.</p>
          </div>
          <div className="lg:w-5/12">
            <h3 className="text-base mb-1">Standard CSS</h3>
            <CodeBlock code={codeCSS2} language="css" />
          </div>
        </div>
      </Slide>
    
    </DefaultTemplate>
  );
}

import DefaultTemplate from "../../components/DefaultTemplate"
import BaselineStatus from "@/app/components/BaselineStatus";
import CodeBlock from "@/app/components/CodeBlock";
import Slide from "@/app/components/Slide";

const codeCSS = `html {
  scroll-behavior: smooth;
}`;

const codeTW = `<html class="scroll-smooth">`;

export default function page() {
  return (
    <DefaultTemplate title="scroll-behaviour: smooth" prevSlug="/text-wrap-balance" nextSlug="/align-content-block-layouts">
    
      <Slide id={1} boxClasses="flex flex-col lg:flex-row justify-center ~gap-8/20">
        <div className="flex flex-col gap-5 lg:w-7/12 mx-auto">
          <h2 className="slide-heading">scroll-behavior: smooth</h2>
          <p>Another satisfying one-liner - this CSS rule allows your page to scroll smoothly when anchor links are clicked.</p>
          <p>You can apply this to any element that has scroll, but is most useful on your <code>html</code> element as the behavior will then be applied to the viewport.</p>
          <BaselineStatus featureId="scroll-behavior" classes="mt-3" />
        </div>
        <div className="lg:w-5/12">
          <h3 className="text-base mb-1">Standard CSS</h3>
          <CodeBlock code={codeCSS} language="css" />
          <h3 className="text-base mb-1 mt-8">Tailwind</h3>
          <CodeBlock code={codeTW} language="css" wrap={true} />
        </div>
      </Slide>

      <Slide id={2} isLast={true} boxClasses="flex flex-wrap gap-5 text-base mb-[100vh]">
        <ul className="w-full">
          <li><a href="#section1">Section One</a></li>
          <li><a href="#section2">Section Two</a></li>
          <li><a href="#section3">Section Three</a></li>
        </ul>
        
        <p id="section1" className="font-primary font-normal">Section One</p>

        <p>Sed nec dolor vestibulum, maximus odio non, dapibus tortor. Donec sagittis condimentum iaculis. Mauris consectetur hendrerit leo, et aliquet felis dictum vitae. Aenean dui ligula, condimentum eu ornare ac, posuere vel nulla. Praesent commodo maximus nibh at molestie. Pellentesque diam sem, laoreet nec sapien sit amet, tristique porttitor lectus. Nam placerat placerat nisi ac lacinia. Sed sed nulla non justo tempus mollis vitae ac felis. Morbi ultrices leo non lobortis sagittis.</p>

        <p id="section2" className="font-primary font-normal">Section Two</p>

        <p>Sed nec dolor vestibulum, maximus odio non, dapibus tortor. Donec sagittis condimentum iaculis. Mauris consectetur hendrerit leo, et aliquet felis dictum vitae. Aenean dui ligula, condimentum eu ornare ac, posuere vel nulla. Praesent commodo maximus nibh at molestie. Pellentesque diam sem, laoreet nec sapien sit amet, tristique porttitor lectus. Nam placerat placerat nisi ac lacinia. Sed sed nulla non justo tempus mollis vitae ac felis. Morbi ultrices leo non lobortis sagittis.</p>

        <p id="section3" className="font-primary font-normal">Section Three</p>

        <p>Sed nec dolor vestibulum, maximus odio non, dapibus tortor. Donec sagittis condimentum iaculis. Mauris consectetur hendrerit leo, et aliquet felis dictum vitae. Aenean dui ligula, condimentum eu ornare ac, posuere vel nulla. Praesent commodo maximus nibh at molestie. Pellentesque diam sem, laoreet nec sapien sit amet, tristique porttitor lectus. Nam placerat placerat nisi ac lacinia. Sed sed nulla non justo tempus mollis vitae ac felis. Morbi ultrices leo non lobortis sagittis.</p>
      </Slide>
    
    </DefaultTemplate>
  );
}

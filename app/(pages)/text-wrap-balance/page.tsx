import Image from "next/image";
import Slide from "../../components/Slide";
import Header from "../../components/Header";

export default function page() {
  return (
    <>

      <Header leftSubtitle="Text Wrap Balance">
      </Header>

      <Slide id={0} boxClasses="flex" isLast={false}>
        <div className="m-auto text-center">
          <h2 className="slide-heading">The current state of CSS and how it got here</h2>
          <p className="flex items-center mt-4 gap-4">
            <span className="h-px flex-1 bg-black"></span>
            <span className="~text-xs/lg font-mono uppercase tracking-widest">A Quick Overview</span>
            <span className="h-px flex-1 bg-black"></span>
          </p>
        </div>
      </Slide>

      <a className="m-40 fixed z-50 bottom-0 left-40" href="/">Prev Page</a>
    
    </>
  );
}

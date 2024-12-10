import Image from "next/image";
import Slide from "./components/Slide";

export default function Home() {
  return (
    <div className="flex flex-col snap-mandatory snap-y">

      <Slide classes="-mt-52">
        <div className="m-auto text-center">
          <h2 className=" ~text-3xl/4xl font-primary uppercase">The current state of CSS and how it got here</h2>
          <p className="flex items-center mt-4 gap-4">
            <span className="h-px flex-1 bg-black"></span>
            <span className="~text-xs/lg font-mono uppercase tracking-widest">A Quick Overview</span>
            <span className="h-px flex-1 bg-black"></span>
          </p>
        </div>
      </Slide>

      <Slide>
        <p>Slide Two</p>
      </Slide>
    
    </div>
  );
}

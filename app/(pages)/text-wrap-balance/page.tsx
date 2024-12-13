import Image from "next/image";
import Slide from "../../components/Slide";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import BaselineStatus from "@/app/components/BaselineStatus";

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
          <BaselineStatus featureId="text-wrap-balance" />

        </div>
      </Slide>

      <Navigation
        title="text-wrap: balance"
        prevLink="/"
        nextLink='/text-wrap-balance'
      />
    
    </>
  );
}


import SlidesList from "../../components/SlidesList";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";

import slides from "../../slides/scroll-behavior-smooth";

export default function page() {
  return (
    <>

      <Header leftSubtitle="scroll-behavior: smooth">
      </Header>

      <SlidesList slides={slides} />

      <Navigation
        title="scroll-behavior: smooth"
        prevLink="/"
        nextLink='/text-wrap-balance'
      />
    
    </>
  );
}


import DefaultTemplate from "../../components/DefaultTemplate"
import SlidesList from "../../components/SlidesList";

import slides from "../../slides/scroll-behavior-smooth";

export default function page() {
  return (
    <DefaultTemplate title="scroll-behaviour: smooth" prevSlug="/text-wrap-balance" nextSlug="/align-content-block-layouts">
    
      <SlidesList slides={slides} />
    
    </DefaultTemplate>
  );
}

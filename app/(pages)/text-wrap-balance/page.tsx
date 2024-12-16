import DefaultTemplate from "../../components/DefaultTemplate"
import SlidesList from "../../components/SlidesList";

import slides from "../../slides/text-wrap-balance";

export default function page() {
  return (
    <DefaultTemplate title="text-wrap: balance" prevSlug="/" nextSlug="/scroll-behavior-smooth">
    
      <SlidesList slides={slides} />
    
    </DefaultTemplate>
  );
}

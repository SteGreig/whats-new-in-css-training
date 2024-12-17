import DefaultTemplate from "../../components/DefaultTemplate"
import SlidesList from "../../components/SlidesList";

import slides from "../../slides/inset";

export default function page() {
  return (
    <DefaultTemplate
      title="inset"
      prevSlug="/isolate"
      nextSlug="/light-dark-function"
    >
    
      <SlidesList slides={slides} />
    
    </DefaultTemplate>
  );
}

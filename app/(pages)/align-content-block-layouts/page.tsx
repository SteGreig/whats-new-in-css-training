import DefaultTemplate from "../../components/DefaultTemplate"
import SlidesList from "../../components/SlidesList";

import slides from "../../slides/align-content-block-layouts";

export default function page() {
  return (
    <DefaultTemplate title="align-content in Block Layouts" prevSlug="/scroll-behavior-smooth" nextSlug="/align-content-block-layout">
    
      <SlidesList slides={slides} />
    
    </DefaultTemplate>
  );
}

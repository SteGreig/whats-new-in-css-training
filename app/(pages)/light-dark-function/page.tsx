import DefaultTemplate from "../../components/DefaultTemplate"
import SlidesList from "../../components/SlidesList";

import slides from "../../slides/light-dark-function";

export default function page() {
  return (
    <DefaultTemplate
      title="light-dark() Function"
      prevSlug="/inset"
      nextSlug="/has-psuedo-class"
    >
    
      <SlidesList slides={slides} />
    
    </DefaultTemplate>
  );
}

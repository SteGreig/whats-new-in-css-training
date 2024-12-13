import Slide from "./Slide";
import { SlideContent } from "../types/SlideContent";

const SlidesList = ({
  slides
} : {
  slides: SlideContent[]
}) => (

  <>
    {slides.map((slide: SlideContent, i: number) => (
      <Slide key={i} id={i} wrapperClasses={slide.wrapperClasses} boxClasses={slide.boxClasses} isLast={i === slides.length - 1}>
        {slide.content}
      </Slide>
    ))}
  </>

)

export default SlidesList
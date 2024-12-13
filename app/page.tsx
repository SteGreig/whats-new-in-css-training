
import Slide from "./components/Slide";
import Header from "./components/Header";

import slides from "./slides/home";
import { SlideContent } from "./types/SlideContent";

export default function Home() {
  return (
    <>

      <Header classes="h-screen" leftSubtitle="19.12.2024" rightSubtitle="Ste Greig">
        <a className="pulse flex m-auto w-60 h-60 rounded-full border-4 border-black content-center" href="#slide0">
          <svg className="w-24 h-24 m-auto translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M384 256L0 32V480L384 256z"/></svg>
        </a>
      </Header>

      {slides.map((slide: SlideContent, i: number) => (
        <Slide key={i} id={i} wrapperClasses={slide.wrapperClasses} boxClasses={slide.boxClasses} isLast={i === slides.length - 1}>
          {slide.content}
        </Slide>
      ))}

      <a className="m-40 fixed z-50 bottom-0 left-40" href="/text-wrap-balance">Next Page</a>
    
    </>
  );
}

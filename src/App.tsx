import { slidesData } from "./slides";
import { SlidePreview } from "./components/App/SlidePreviw";
import { SlideFrame } from "./components/molecules/SlideFrame";

function App() {
  const activeSlide = slidesData[0];
  return (
    <SlidePreview>
      <section
        className="flex w-full items-center justify-center"
        aria-label="Slide canvas preview"
      >
        <SlideFrame slide={activeSlide} />
      </section>
    </SlidePreview>
  );
}

export default App;

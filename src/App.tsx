import "./App.css";
import { slidesData } from "./slides";
// import { SlidePreview } from "./components/ui/SlidePreviw";
import { SlidePreview } from "@yogesharma2003/slide-preview";

function App() {
  return <SlidePreview items={slidesData} theme="light" />;
}

export default App;

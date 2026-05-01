import "./App.css";
import { slidesData } from "./slides";
import { SlidePreview } from "./components/ui/SlidePreviw";

function App() {
  return <SlidePreview items={slidesData} theme="light" />;
}

export default App;

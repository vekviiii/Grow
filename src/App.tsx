import Facade from "./components/facade";
import Details from "./components/details";
import Footer from "./components/footer";
import FloatingStuff from "./utils/card component/floating Stuff";

function App() {
  return (
    <>
      <div className="p-2">
        <Facade/>
        <Details/>
      </div>
      <Footer/>
      <FloatingStuff />
    </>
  );
}

export default App;
import Facade from "./components/facade";
import Details from "./components/details";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="p-2">
        <Facade/>
        <Details/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
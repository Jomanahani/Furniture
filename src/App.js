import Collection from "./Sections/Collection";
import Home from "./Sections/Home";
import NavBar from "./Sections/NavBar";
import Services from "./Sections/Services";
import Beautify from "./Sections/Beautify";
import Contact from "./Sections/Contact";
import Gallery from "./Sections/Gallery";
import Footer from "./Sections/Footer";
import Steps from "./Sections/Steps";

function App() {
  return (
    <div className="font-montserrat">
      <NavBar />
      <Home />
      <Services />
      <Collection />
      <Beautify />
      <Gallery />
      <Steps />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

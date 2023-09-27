import Clients from "./components/organisems/Clients";
import EasyFunding from "./components/organisems/EasyFunding";
import Footer from "./components/organisems/Footer";
import Hero from "./components/organisems/Hero";
import Ideas from "./components/organisems/Ideas";
import Projects from "./components/organisems/Projects";

function App() {
  return (
    <>
      <div className="landing-page">
        <Hero />
        <Ideas />
        <Projects />
        <Clients />
        <EasyFunding />
        <Footer />
      </div>
    </>
  );
}

export default App;

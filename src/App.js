
import About from "./components/About";
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import Fact from "./components/Fact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  return (
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Fact/>
        <Resume/>
        <Portfolio/>
        <Certification/>
        <Contact/>
        <Footer/>
      </div>
  );
}

export default App;

import Landing from "./components/Landing";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Landing />
      <Projects />
      <About />
      <Footer />
    </div>
  );
};

export default App;

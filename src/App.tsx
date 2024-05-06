import Landing from "./components/Landing";
import ProjectList from "./components/ProjectList";
import About from "./components/About";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { AppProvider } from "./components/context/appContext";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Landing />
      <AppProvider>
        <ProjectList />
      </AppProvider>
      <About />
      <Footer />
    </div>
  );
};

export default App;

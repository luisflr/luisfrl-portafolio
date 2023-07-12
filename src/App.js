import Header from './components/Header';
import Home from './views/Home';
import AboutMe from './views/AboutMe';
import Projects from './views/Projects';
import Experience from './views/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="bg-background">
        <Header />
        <Home />
        <AboutMe />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;

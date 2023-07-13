import Header from './components/Header';
import Home from './views/Home';
import AboutMe from './views/AboutMe';
import Projects from './views/Projects';
import Experience from './views/Experience';
import Footer from './components/Footer';
import PagesTimeline from './components/PagesTimeline';

function App() {
  return (
    <>
      <div className="relative bg-background">
        <Header />
        <PagesTimeline />
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

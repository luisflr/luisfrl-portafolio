import Navbar from './components/NavBar';
import Home from './views/Home';
import AboutMe from './views/AboutMe';
import Projects from './views/Projects';
import Experience from './views/Experience';
import Footer from './components/Footer';
import PagesTimeline from './components/PagesTimeline';

import useApp from './useApp';

function App() {
  const { activePage, setActivePage } = useApp();
  return (
    <>
      <div className="relative bg-background">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        <PagesTimeline activePage={activePage}/>
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

import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import { NotFoundPage } from './views/Pages';
import { Analytics } from '@vercel/analytics/react';
import AllPersonalProjects from './views/AllPersonalProjects';
import Footer from './components/Footer';
import useMain from './views/useMain';
import Navbar from './components/NavBar';


function App() {
  const { activePage, setActivePage } = useMain();
  return (
    <>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <Routes>
        <Route path='/' element={ <Main activePage={activePage}/> } />
        <Route path='*' element={ <NotFoundPage /> } />
        <Route path='/all-personal-projects' element={<AllPersonalProjects />} />
      </Routes>
      <Footer />
    </Suspense>
    <Analytics />
    </>
  );
}

export default App;

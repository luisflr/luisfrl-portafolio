import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import NotFound from './views/NotFound';
import { Analytics } from '@vercel/analytics/react';


function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={ <Main /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
      <Analytics />
    </>
  );
}

export default App;

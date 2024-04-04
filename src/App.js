import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import { NotFoundPage } from './views/Pages';
// import { Analytics } from '@vercel/analytics/react';


function App() {
  
  return (
    <>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path='/' element={ <Main /> } />
        <Route path='*' element={ <NotFoundPage /> } />
      </Routes>
    </Suspense>
    {/* <Analytics /> */}
    </>
  );
}

export default App;

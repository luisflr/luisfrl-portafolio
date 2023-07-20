import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import NotFound from './views/NotFound';


function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={ <Main /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </>
  );
}

export default App;

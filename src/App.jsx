import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Choose from './components/choose/choose';
import Marvel from './components/marvel/marvel';
import Dc from './components/dc/dc';
import Vote from './components/vote/vote';
import Error from './components/error/error';
import { AnimatePresence } from 'framer-motion';


const App = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Marvel & DC"
 }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Choose/>}/>
        <Route path="/marvel" element={<Marvel/>}/>
        <Route path="/dc" element={<Dc/>}/>
        <Route path="/vote" element={<Vote/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </AnimatePresence>
  );
}

export default App;

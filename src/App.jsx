import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Choose from './components/choose/choose';
import Marvel from './components/marvel/marvel';
import Dc from './components/dc/dc';
import Vote from './components/vote/vote';
import Error from './components/error/error';


function App() {

  useEffect(() => {
    document.title = "Marvel & DC"
 }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Choose/>}/>
        <Route path="/marvel" element={<Marvel/>}/>
        <Route path="/dc" element={<Dc/>}/>
        <Route path="/vote" element={<Vote/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;

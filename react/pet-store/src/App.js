import logo from './images/logo.png';
import './App.css';
import Home from './components/home';
import Dogs from './components/dogs';
import Cats from './components/cats';
import { BrowserRouter as Router, Link, Route,Routes} from 'react-router-dom';

function App() {
  
  return (
    
        <Router>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dogs" element={<Dogs/>}/>
          <Route path="/cats" element={<Cats/>}/>
          
          </Routes>
          
        </Router>
  );
}

export default App;

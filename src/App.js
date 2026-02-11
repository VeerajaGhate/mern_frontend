import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';
import Add from './components/Add';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/add/:id?" element={<Add />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;

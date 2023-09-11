import { BrowserRouter, Routes, Route} from 'react-router-dom';

//pages & components

import Home from './pages/Home';
import NavBar from './components/NavBar';
import PastTeams from './pages/pastTeams';
import Createteam from './pages/CreateTeam';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <div className = "pages">
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/pastTeams" element = {<PastTeams/>}/>
          <Route path = "/createTeam" element = {<Createteam/>}/>
        </Routes>

      </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

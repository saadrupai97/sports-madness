import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState, createContext} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import LeagueDetails from './components/LeagueDetails/LeagueDetails';


export const ContextLeague = createContext();

function App() {


  const [league, setLeague] = useState([])

  useEffect(() => {
    const url = "https://www.thesportsdb.com/api/v1/json/2/all_leagues.php";
    fetch(url)
    .then(res => res.json())
    .then(data => setLeague(data.leagues.slice(0,9)))
},[])

  return (
    <Router>
      <ContextLeague.Provider value={[league, setLeague]}>
      <Routes> 
        <Route exact path="/" element={<Home/>}/>
        <Route path="/league/:id" element={<LeagueDetails key={league.idLeague} />}/>
      </Routes>
      </ContextLeague.Provider>
    </Router>
  );
}

export default App;

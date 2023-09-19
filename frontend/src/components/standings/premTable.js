import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Team from './Team';

const options = {
  method: 'GET',
  url: 'https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/table',
  headers: {
    'X-RapidAPI-Key': 'edea6f4617msh589db1b0815635fp1d2ba6jsn4b4bfeaea57a',
    'X-RapidAPI-Host': 'heisenbug-premier-league-live-scores-v1.p.rapidapi.com'
  }
};


const Standings = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.request(options).then(function (response) {
      setData(response.data.records);
      console.log(response.data.records);
    }
    ).catch(function (error) {
      console.error(error);
    }
    ).finally(() =>{setLoading(false)});
  }, []);

  return (
    <div className = "standings-container"> Standings
      {loading ? <div>Loading...</div> : <div className = "standings">
          {data?.map((team)=> {
            return ( <Team
              key = {team.team}
              team = {team.team}
              played = {team.played}
              win = {team.win}
              draw = {team.draw}
              loss = {team.loss}
              goalsFor = {team.goalsFor}
              goalsAgainst = {team.goalsAgainst}
              points = {team.points}
            />
            );
          })}
          
      </div>}
    </div>
  )

};

export default Standings;
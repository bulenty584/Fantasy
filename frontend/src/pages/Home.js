import Standings from '../components/standings/premTable'
import Team from '../components/standings/Team'
import React, {useEffect, useState} from 'react';




const Home = () => {


    return (
        <div className = "home"> Welcome to Premier League Fantasy! 
            <Standings/>

        </div> 
    )
}

export default Home
import {useEffect} from 'react'
import {useTeamsContext} from '../hooks/useTeamsContext'

//components

import TeamDetails from '../components/TeamDetails'


const Past = () => {

    const {teams, dispatch} = useTeamsContext()
    
    useEffect(() => {
        const getTeams = async () => {
            const res = await fetch('http://localhost:4000/records')
            const data = await res.json()

            if (res.ok) {
               dispatch({type: 'SET_TEAMS', payload: data})
            }
        }
            
        getTeams()

    }, [])

    if (!teams) return null

    return (
        <div className = "past_teams">
            <div className = "teams">
                {teams && teams.map((team) => (
                    <TeamDetails key = {team._id} team = {team} />
                ))}
            </div>
        </div>
    )
}

export default Past
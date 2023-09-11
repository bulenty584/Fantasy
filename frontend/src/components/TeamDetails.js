import {useTeamsContext} from '../hooks/useTeamsContext'

const TeamDetails = ({ team }) => {

    const {dispatch} = useTeamsContext()

    const handleClick = async () => {
        const res = await fetch(`http://localhost:4000/records/` + team._id, {
            method: 'DELETE'
        })

        const json = await res.json()

        if (res.ok) {
            dispatch({type: 'DELETE_TEAM', payload: json})
        }
    }


    return(
        <div className = "team-details">
            <h4>{team.team_name}</h4>
            <p>{team.top_scorer}</p>
            <span className = "material-symbols-outlined" onClick = {handleClick}> delete</span>
        </div>
    )
}

export default TeamDetails
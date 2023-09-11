import { useState} from 'react'
import {useTeamsContext} from '../hooks/useTeamsContext'

const Form = () => {
    const{dispatch} = useTeamsContext()
    const [team_name, setTeamName] = useState('')
    const [top_scorer, setTopScorer] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    const[success, setSuccess] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault()

        const team = {team_name, top_scorer}

        const response = await fetch('http://localhost:4000/records', {
            method: 'POST',
            body: JSON.stringify(team),
            headers: {'Content-Type': 'application/json'}
        })

        const json = await response.json()

        if (!response.ok) {
            setSuccess(false)
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }

        if (response.ok){
            setTeamName('')
            setTopScorer('')
            setError(null)
            setSuccess(true)
            setEmptyFields([])
            console.log('Team Added', json)
            dispatch({type: 'CREATE_TEAM', payload: json})
        }


    }

    return(
        <form className = "create-team" onSubmit={handleSubmit}>
            <h3>Add a New Team</h3>

            <label>Team Name:</label>
            <input 
                type = "text"
                onChange={(e) => setTeamName(e.target.value)}
                value = {team_name}
                className = {emptyFields.includes('team_name') ? 'error': ''}
            />
            <label>Top Scorer:</label>
            <input 
                type = "text"
                onChange={(e) => setTopScorer(e.target.value)}
                value = {top_scorer}
                className = {emptyFields.includes('top_scorer') ? 'error': ''}
            />
            <button>Add Team</button>
            {error && <div className = "error">{error}</div>}
            {success && <div className = "success">Team Added!</div>}

        </form>
    )
}

export default Form
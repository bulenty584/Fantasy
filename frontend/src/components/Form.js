import { useState} from 'react'
import {useTeamsContext} from '../hooks/useTeamsContext'

const Form = () => {
    const{dispatch} = useTeamsContext()
    const [team_name, setTeamName] = useState('')
    const [top_scorer, setTopScorer] = useState('')
    const [formation, setFormation] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    const[success, setSuccess] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault()

        const team = {team_name, top_scorer, formation}

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
            setFormation('3-4-3')
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
            <label>Formation:</label>
            <select onChange={(e) => setFormation(e.target.value)} value= {formation} className = {emptyFields.includes('formation') ? 'error': ''}>
                <option value = {null}>Choose a Formation</option>
                <option value='4-4-2'>4-4-2</option>
                <option value='4-3-3'>4-3-3</option>
                <option value='3-4-3'>3-4-3</option>
                <option value='3-5-2'>3-5-2</option>
                <option value='4-5-1'>4-5-1</option>
                <option value='5-4-1'>5-4-1</option>
                <option value='5-3-2'>5-3-2</option>
                <option value='4-2-3-1'>4-2-3-1</option>
                <option value='4-1-4-1'>4-1-4-1</option>
                <option value='4-3-2-1'>4-3-2-1</option>
                <option value='4-2-2-2'>4-2-2-2</option>
                <option value='4-2-4'>4-2-4</option>
                <option value='4-1-2-1-2'>4-1-2-1-2</option>
                <option value='4-3-1-2'>4-3-1-2</option>
                <option value='4-1-3-2'>4-1-3-2</option>
                <option value='4-3-3-1'>4-3-3-1</option>
                <option value='4-1-2-3'>4-1-2-3</option>
                <option value='4-1-3-1-1'>4-1-3-1-1</option>
                <option value='4-3-2-1'>4-3-2-1</option>
                console.log(formation)
            </select>
            <button>Add Team</button>
            {error && <div className = "error">{error}</div>}
            {success && <div className = "success">Team Added!</div>}
        </form>
    )
}

export default Form
import {createContext, useReducer} from 'react'

export const TeamContext = createContext()

export const teamReducer = (state, action) => {

    switch(action.type) {
        case 'SET_TEAMS':
            return {
                teams: action.payload
            }
        case 'CREATE_TEAM':
            return {
                teams: [action.payload, ...state.teams]
            }

        case 'DELETE_TEAM':
            return {
                teams: state.teams.filter((t) => t._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const TeamContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(teamReducer, {
        teams: null
    })

    return (
        <TeamContext.Provider value = {{...state, dispatch}}>
            {children}
        </TeamContext.Provider>
    )
}
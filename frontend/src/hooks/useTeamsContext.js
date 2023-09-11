import {TeamContext} from '../context/TeamContext'
import {useContext} from 'react'

export const useTeamsContext = () => {
    const context = useContext(TeamContext)

    if(!context) {
        throw new Error('useTeamsContext must be used within a TeamContextProvider')
    }

    return context
}


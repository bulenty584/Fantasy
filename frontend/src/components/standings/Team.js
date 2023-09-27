import React from 'react';

function Team({key, team, played, win, draw, loss, goalsFor, goalsAgainst, points}){
    return (
        <div className = "team-container">
            <div className = "team">
                <div className = "team-header">
                    <table>
                        <th> Team:
                            <tr>{team}</tr>
                        </th>

                        <th> Played:
                            <tr>{played}</tr>
                        </th>

                        <th> Win:
                            <tr>{win}</tr>
                        </th>

                        <th> Draw:
                            <tr>{draw}</tr>
                        </th>

                        <th> Loss:
                            <tr>{loss}</tr>
                        </th>

                        <th> Goals For:
                            <tr>{goalsFor}</tr>
                        </th>

                        <th> Goals Against:
                            <tr>{goalsAgainst}</tr>
                        </th>

                        <th> Points:
                            <tr>{points}</tr>
                        </th>


                    </table>
                </div>
            </div>
        </div>

    )
}

export default Team;


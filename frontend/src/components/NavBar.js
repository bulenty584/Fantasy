import {Link} from 'react-router-dom';

const NavBar = () => {

    return (
       <header>
            <div className="container">
                <Link to = "/">
                    <img style = {{'width' : 25 + '%'}} src = "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png">
                    </img>
                </Link>

                <nav>
                    <ul>
                        <li>
                            <Link to = "/">Home</Link>
                        </li>
                        <li>
                            <Link to = "/pastTeams">Past Teams</Link>
                        </li>
                        <li>
                            <Link to = "/createTeam">Create Team</Link>
                        </li>
                    </ul>
                </nav>
            
            </div>

       </header> 
    )
}

export default NavBar
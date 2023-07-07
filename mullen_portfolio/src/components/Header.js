import { Link } from 'react-router-dom'

function Header () {
    return(
        <div className='header'>
            <nav className='navBar'>
                <Link to='/'>Home</Link>
                <Link to='/connect'>Lets Connect!</Link>
                <Link to='/projects'>My Projects</Link>
            </nav>
        </div>
    )
}



export default Header;
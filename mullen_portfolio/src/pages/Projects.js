import { Link } from "react-router-dom";

function Projects () {
    return (
        <div className="projectsPage">
        <h1>Check out some of my code!</h1>
        <Link to='https://armullen.github.io/ProjectOne---SimonGame/'>Simon Game</Link>
        <img className='simon' src='/assets/simon.png' alt='simon'></img>
        <h1>Hockey Collector</h1>
        <h1>ProStart Sports</h1>
        </div>
    )
}

export default Projects;
import { Link } from "react-router-dom";

function Connect () {
    return(
        <div className="connectPage">
        <h1>I'm happy you're here!  Let's connect!</h1>
        <Link to='https://www.linkedin.com/in/amber-mullen/'>
            <button>LinkedIn</button>
        </Link>
        <Link to='https://github.com/armullen'>
            <button>GitHub</button>
        </Link>
        </div>
    )
}

export default Connect;
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Projects () {
    return (
        <div className="projectsPage">
            <Container>
                <Row>
                <Col>
                     <h1>Check out some of my code!</h1>
                    <Link to='https://armullen.github.io/ProjectOne---SimonGame/'>Simon Game</Link>
                    <h5>A browser game of memory using JavaScript and CSS.  It was my first project in my Software Engineering Immersive.</h5>
                    <img className='simon' src='/assets/simon.png' alt='simon'></img>
                </Col>
                <Col>
                    <Link to='https://github.com/armullen/HockeyCollector_MiniProject'>Hockey Collector</Link>
                    <h5>A favorite hockey player collector app using Django and Python.</h5>
                    <h1>ProStart Sports</h1>
                    <h5>A site I am working on for a local sports training facility using React, Django, and PostgreSQL.</h5>
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Projects;
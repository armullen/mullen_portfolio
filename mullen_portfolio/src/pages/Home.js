import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home () {
    return(
        <>
        <Container>
            <Row>
                <Col>
                    <div className='homePage'>
                        <h1>Hello World</h1>
                    </div>
                </Col>
                <Col>
                    <img className="me" src="/assets/amber.png" alt="Me"></img>
                </Col>
            </Row>
            <Row>
                <h5>My story</h5>
            </Row>
        </Container>
        </>
    )
}

export default Home;
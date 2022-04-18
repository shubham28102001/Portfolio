import React from 'react';
import {Row, Container} from 'react-bootstrap';
import background from '../Assets/home-bg.jpg';
var spcolor = '#ff9e00';

function Projects() {
    return (
        <>
            <section style={{background: `url(${background})`}}>
            <Container>
                <Row>
                <h1 style={{'fontWeight': '600px', 'textAlign': 'center', 'paddingTop': '200px', 'paddingBottom': '800px'}}>Under Construction, <span style={{'color': spcolor}}>will be available soon!</span></h1> 
                </Row>
            </Container>    
            </section>
        </>
    );
}

export default Projects;
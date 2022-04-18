import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutImg from '../Assets/about.png';
import background from '../Assets/home-bg.jpg';
import { ImPointRight } from "react-icons/im";
import '../About/About.css';
import TechStack from './TechStack';
import ToolsStack from './ToolsStack';
var spcolor = '#ff9e00';

function About(props) {
    return (
        <>
            <section style={{background: `url(${background})`}}>
                <Container>
                    <Row>
                        <Col md={7} className='about-bio'>
                        <h1>Know Who <span style={{color: spcolor}}>I'M</span></h1>
                        <p>Hi Everyone, I am <span style={{color: spcolor}}>Shubham Patel</span> from <span style={{color: spcolor}}>Gujarat, India.</span></p>
                        <p>I am a junior pursuing Bachelor in Techology in Computer Science and Engineering at Ahmedabad University.</p>
                        <br />
                        <p>Apart from coding, some other activities that I love to do!</p>
                        <ul>
                            <li style={{display: 'block'}}>
                            <ImPointRight /> Travelling
                            </li>
                            <li style={{display: 'block'}}>
                            <ImPointRight /> Playing Games
                            </li>
                        </ul>
                        <p style={{ color: "rgb(255, 187, 77)" }}>
                            "IF YOUR GOALS DON'T SCARE YOU, THEY ARE'T BIG" - Jens Casten
                        </p>
                        </Col>
                        <Col md={5} className='img-class'>
                            <img src={aboutImg} alt='about-img'></img>
                        </Col>
                    </Row>
                </Container>
                <TechStack />
                <ToolsStack />
            </section> 
        </>
    );
}

export default About;
import React from 'react';
import homeBg from '../Assets/home-bg.jpg';
import homeLogo from '../Assets/home-main.svg'
import {Container, Row, Col} from 'react-bootstrap';
import './Home.css';
import background from '../Assets/home-bg.jpg';
import avatar from '../Assets/avatar.svg';
import Type from './Type';
//var spcolor = `#c770f0`;
var spcolor = '#ff9e00';

function Home(props) {
    return (
        <section style={{background: `url(${background})`}}>
        {/* <section> */}
            {/* <Particle /> */}
            {/* <img src={homeLogo} alt='home-bg' className="img-fluid"></img> */}
            {/* <img src={homeBg} className='home-bg'></img> */}
            <Container>
                <Row className='top-row'>
                    <Col md={7} className='name-greeting'>
                        <h1 style={{'padding-top': '100px'}} className='greeting'>Hi There! <span>👋🏻</span></h1>
                        <h1 className='greeting'>I'M <span style={{color: spcolor}} className='greeting'>SHUBHAM PATEL</span></h1>
                        <Type className='type'/>
                    </Col>
                    <Col md={5} className='home-logo'>
                        <img src={homeLogo} alt='home-logo'></img>
                    </Col>
                </Row>
                <Row >
                    <Col md={7} className='home-bio'>
                        <h1>LET ME <span style={{color: spcolor}}>INTRODUCE</span> MYSELF</h1>
                        <p>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
                        <p>I am fluent in classics like <span style={{color: spcolor}}>C++, Javascript and Python.</span></p>
                        <p>My field of Interest's are building new  <span style={{color: spcolor}}>Web Technologies and Products</span> and also in areas related to <span style={{color: spcolor}}>Machine Learning.</span></p>
                        <p>Whenever possible, I also apply my passion for developing products with <span style={{color: spcolor}}>Node.js and Modern Javascript Library and Frameworks</span>  like <span style={{color: spcolor}}>React.js and Next.js.</span></p>
                    </Col>
                    <Col md={5}>
                        <img src={avatar} alt='avatar' className='img-class'></img>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Home;
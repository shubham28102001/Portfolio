import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import '../Footer/Footer.css';

function Footer(props) {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className='footer-bg'>
      <Row>
        <Col md="5">
          <h3 style={{'font-size': props.fontSize, 'textAlign': 'center', 'marginTop': '13px', 'fontWeight': '200px'}}>Designed and Developed by Shubham Patel</h3>
        </Col>
        <Col md="3">
          <h3 style={{'font-size': props.fontSize, 'textAlign': 'center', 'marginTop': '13px', 'fontWeight': '200px'}}>Copyright © {year} SP</h3>
        </Col>
        <Col md="4">
          <ul style={{'marginTop': '6px', 'justify-content': 'center', 'display': 'flex'}}>
            <li>
              <a href="https://github.com/shubham28102001" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/shubham-patel-3b87141a7/" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/patelshubham696/" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
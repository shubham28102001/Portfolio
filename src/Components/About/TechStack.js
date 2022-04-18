import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiMongodb,
  DiGit,
  DiPhp,
  DiMysql
} from "react-icons/di";
import {
  SiPytorch,
} from "react-icons/si";
import '../About/TechStack.css';
var spcolor = '#ff9e00';

function TechStack(){
    return(
        <>
        <h1 style={{'textAlign': 'center'}}>Professional <span style={{'color': spcolor, 'fontWeight': '600px'}}>Skillset</span></h1>
        <Row style={{'justifyContent': "center", 'color': 'white'}}>
            <Col md={2} xs={4} className="tech-stack" ><CgCPlusPlus style={{'paddingBottom': '13px'}}/></Col>
            <Col md={2} xs={4} className="tech-stack"><DiJavascript1 style={{'paddingBottom': '13px'}}/></Col>
            <Col md={2} xs={4} className="tech-stack"><DiReact style={{'paddingBottom': '13px'}}/></Col>
            <Col md={2} xs={4} className="tech-stack"><DiNodejs style={{'paddingBottom': '13px'}}/></Col>
            <Col md={2} xs={4} className="tech-stack"><DiPython style={{'paddingBottom': '13px'}}/></Col>
            <Col md={2} xs={4} className="tech-stack"><DiMongodb style={{'paddingBottom': '13px'}}/></Col>
            <Col md={2} xs={4} className="tech-stack"><DiGit style={{'paddingBottom': '13px'}}/></Col>
            <Col md={2} xs={4} className="tech-stack"><DiPhp style={{'paddingBottom': '13px'}}/></Col>
            <Col md={2} xs={4} className="tech-stack"><DiMysql style={{'paddingBottom': '13px'}}/></Col>
            <Col md={2} xs={4} className="tech-stack"><SiPytorch style={{'paddingBottom': '13px'}}/></Col>
        </Row>
        </>
    );
}

export default TechStack;
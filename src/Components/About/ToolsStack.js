import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {
    SiLinux,
    SiVisualstudiocode,
    SiHeroku,
    SiNotion,
    SiXampp
} from "react-icons/si";
import '../About/ToolsStack.css'
var spcolor = '#ff9e00';

function ToolsStack() {
    return (
        <>
           <h1 style={{'textAlign': 'center'}}><span style={{'color': spcolor, 'fontWeight': '600px'}}>Tools</span> I use</h1> 
           <Row style={{'justifyContent': "center", 'color': 'white'}}>
                <Col md={2} xs={4} className="tools-stack" ><SiLinux style={{'paddingBottom': '13px'}}/></Col>
                <Col md={2} xs={4} className="tools-stack"><SiVisualstudiocode style={{'paddingBottom': '13px'}}/></Col>
                <Col md={2} xs={4} className="tools-stack"><SiHeroku style={{'paddingBottom': '13px'}}/></Col>
                <Col md={2} xs={4} className="tools-stack"><SiNotion style={{'paddingBottom': '13px'}}/></Col>
                <Col md={2} xs={4} className="tools-stack"><SiXampp style={{'paddingBottom': '13px'}}/></Col>
           </Row>
        </>
    );
}

export default ToolsStack;
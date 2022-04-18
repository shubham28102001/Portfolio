import React, { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from '../Assets/ShubhamPatel_Resume_latest.pdf';
import { Document, Page, pdfjs } from "react-pdf";
import background from '../Assets/home-bg.jpg';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import '../Resume/Resume.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resumeLink = "https://raw.githubusercontent.com/shubham28102001/shubham28102001/main/Resources/ShubhamPatel_Resume_latest.pdf";

function Resume(props) {
    const [width, setWidth] = useState(1200);
    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <>
            <section style={{background: `url(${background})`}}>
            <Container fluid className="resume-section">
                <Row style={{ justifyContent: "center", position: "relative" }}>
                <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
                    <AiOutlineDownload />
                    &nbsp;Download Resume
                </Button>
                </Row>
                <Row className="resume">
                <Document file={resumeLink} className="d-flex justify-content-center">
                    <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                </Document>
                </Row>
            </Container>
            </section>
        </>
    );
}

export default Resume;
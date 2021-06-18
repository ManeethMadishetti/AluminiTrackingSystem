import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';
import { Box } from '@material-ui/core';
function About() {
    return (
        <div id="container">
            <Container id="About_container">
            <Box id="About">
               <h4>This a project about alumni connect</h4>
               <p>Developed by</p>
               <p>Mahendra,Maneeth,Samson,Irfan</p>
            </Box>
            </Container>
      </div>
    )
}

export default About
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './../Memories/Images/i1.jpg';
import image2 from './../Memories/Images/i2.jpg';
import image3 from './../Memories/Images/i3.jpg';
import './memory.css'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

function AddMemory() {
    return (
        <div>
            <Container>
                
                <Card border="primary" >
                <Card.Header>Header</Card.Header>
                <Card.Body>
            <div>
                <Carousel className="coursle d-flex">
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-50 makemiddle"
                    src={image1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-50 makemiddle"
                    src={image2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-50 makemiddle"
                    src={image3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
            </Card.Body>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card>
            </Container>
        </div>
    )
}

export default AddMemory

import { Container } from '@material-ui/core';
import React from 'react';
import './QueryAlumni.css';
import { Button, Form } from 'react-bootstrap';
import emailjs from 'emailjs-com';

function QueryAlumni() {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_lc9uqwf', 'template_r0vhd1n', e.target, 'user_1FgJyILR58b6sUweHupcH')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          console.log("Mail Send ");
          e.target.reset();
    }
    return (
        <div>
            <Container className="QueryContainer" maxWidth="sm">
            <Form onSubmit={sendEmail}>
                <Form.Group controlId="formGroupName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" required name="name" />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required name="email"/>
                </Form.Group>
                <Form.Group controlId="formGroupSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Enter Subject" required name="subject"/>
                </Form.Group>
                <Form.Group controlId="formGroupMessage" >
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" type="text"  placeholder="Enter Message" required rows={5} name="message"/>
                </Form.Group>
                 <Button variant="secondary" type="submit" value="Send Message">
                        Submit
                </Button>
            </Form>
            </Container>
        </div>
    )
}

export default QueryAlumni

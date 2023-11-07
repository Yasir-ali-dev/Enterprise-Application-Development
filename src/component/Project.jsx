import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const links =["/Track.webp","/eco.jfif","/lib.png","/cal.jpg"];
const projects=["Tracking App","Ecommerce","Notebook App","Calender"];
const Project = () => {
  return (
    <Container className='py-5'>   
        <Row xs={1} md={2} className="g-4">
            {projects.map((_, idx) => (
                <Col key={idx}>
                <Card>
                    <Card.Img variant="top" src={links[idx]} width={"100%"} />
                    <Card.Body>
                    <Card.Title>{_}</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))}
        </Row>
    </Container>
  )
}

export default Project

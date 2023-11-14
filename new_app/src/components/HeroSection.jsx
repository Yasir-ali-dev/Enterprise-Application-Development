import React from 'react'
import { Button, ButtonGroup, Col, Container, Image, Row } from 'react-bootstrap'

const HeroSection = () => {
  return (
    <Container className='py-5'>
      <Row className='d-xs-flex flex-xs-row-reverse '>
        <Col xs={12} sm={6} md={6} lg={6} 
              className='d-flex flex-column justify-content-center align-items-center'>
          <h2>Hello there! Yasir Ali</h2>
          <h1>Full Stack Developer</h1>
          <ButtonGroup className='gap-2'>
            <Button className=''>Contact Me</Button>
            <Button>Hire Me</Button>
          </ButtonGroup>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6}>
          <Image src="/profile.webp" width={"100%"} rounded />
        </Col>
      </Row>
    </Container>

  )
}

export default HeroSection

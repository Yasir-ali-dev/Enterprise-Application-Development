import { Avatar } from '@mui/material'
import React from 'react'
import { Button, ButtonGroup, Card, Col, Container, Image, Row, Stack } from 'react-bootstrap'

const Welcome = () => {
  return (
    <Container className='py-5'>
    <Row className='d-xs-flex flex-xs-row-reverse  '>
      <Col xs={12} sm={6} md={6} lg={6} 
            className='d-flex flex-column justify-content-center align-items-center'>
        <h1>Discover, collect,  and charity in extraordinary NFT marketplace</h1>
        <h4>In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus vestibulum nibh mi venenatis</h4>
        <Stack direction='horizental'>
        <Button variant="outline-success">CREATE</Button>            
        <Button variant="outline-success">SIGN IN</Button>
        </Stack>
      </Col>
      <Col xs={12} sm={6} md={6} lg={6}>
      <Card style={{ width: '22rem' }}>
        <Card.Img variant="top" src="/img.png" width={"350px"} rounded />
        <Card.Body>
            <Row>
                <Col>
                    <Avatar  sx={{ width: 56, height: 56 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

                </Col>
                <Col>
                    <h5>Laura</h5>
                    <p>0.21 Weth</p>
                </Col>
                <Col>
                    <h5>We are here</h5>
                    <h6>5</h6>
                </Col>
            </Row>
        </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  )
}

export default Welcome

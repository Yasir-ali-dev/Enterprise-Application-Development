import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'

const arr = [1,2,4];
const Auctions = () => {
  return (
    <Container className='p-4'>
        <div className='d-flex justify-content-between p-2'>
            <h3>HOT AUCTIONS</h3>
            <h6>VIEW ALL</h6>
        </div>
        <div className='d-flex justify-content-center align-items-center flex-wrap gap-3'>
        {
        arr.map((_,index)=>{
            return( <Card key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/img.png" />
            <Card.Body>
            <div className='d-flex justify-content-between align-items-center'>
                <Card.Text>
                Lorem Ipsum 
              </Card.Text>
              <Card.Text >1.20 Weth</Card.Text>
            </div>      
            <hr/>
            <div className='d-flex justify-content-between align-items-center'>
                <Card.Text>
                Ends in 0.8323
              </Card.Text>
              <Button variant="outline-dark">Bid</Button>
            </div>
            </Card.Body>
          </Card>)
        })
        }   
        </div>
    </Container>
  )
}

export default Auctions

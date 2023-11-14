import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'

const arr = [1,2,4,32,34,2,1,2];
export const Discover = () => {
  return (
    <Container className='p-4'>
        <div className='d-flex justify-content-between p-2'>
            <h3>Discover</h3>
            <div className='d-flex justify-content-center gap-3 p-2 align-items-center '>
                <h6>Category</h6>
                <h6>Cheapest</h6>
                <h6>Newest</h6>
                <Button>Filter</Button>
            </div>
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
        <div className= 'd-flex justify-content-center align-items-center'>
            <Button className='mt-3' variant="outline-dark">Load More</Button> 
        </div>
    </Container>
  )
}



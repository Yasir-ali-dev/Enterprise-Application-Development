import React from 'react'
import { Button, Card, Container, Row, Stack } from 'react-bootstrap'

export const Reviews = () => {
  return (
    <div>
        
      
    </div>
  )
}

const reviews=["5/5","4.5/5","4.7/5"];
const buyers=["John Doe","Zulfiqar","Khalid"];

export const BuyerReview =()=>{
    return(
        <Container>
            <h1 >Buyer Reviews</h1>
            <Stack gap={3} direction='horizontal' className='justify-content-center' >
                {
                    reviews.map((_,index)=>{
                        return(
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/profile.webp" />
                                <Card.Body>
                                    <Card.Title>{buyers[index]}</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">{_}</Button>
                                </Card.Body>
                            </Card>
                        )

                    })
                }
            </Stack>
           
        </Container>
    )
}

const sellerReviews=["I recently made a purchase from this ecommerce seller, and I couldn't be happier with my experience. The product I ordered arrived on time and in perfect condition. The quality of the item exceeded my expectations, and the pricing was very competitive. ","I was a bit apprehensive about ordering from this seller as it was my first time buying from them. However, I was pleasantly surprised. The order process was straightforward, and I received my item within the estimated delivery time.","I've been a loyal customer of this ecommerce seller for quite some time, and they have consistently delivered top-notch service. Their product range is vast, and I've made multiple purchases, each of which has been a satisfying experience"];

const sellerTitle=["Excellent Service & Quality Products","Great First-Time Experience!","Consistently Impressive & Good Quality"];

export const SellerReview =()=>{
    return(
       <Container className='mt-4 mb-4 '>
       <h1 >Seller Reviews</h1>
       <Stack gap={3} direction='horizontal' className='justify-content-center' >
           {
               sellerReviews.map((_,index)=>{
                   return(
                    <Card border="primary" style={{ width: '18rem' }}>
                    <Card.Header>{buyers[index]}</Card.Header>
                    <Card.Body>
                    <Card.Title>{sellerTitle[index]}</Card.Title>
                      <Card.Text>
                        {_}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                   )

               })
           }
       </Stack>
      
   </Container>

    )
}




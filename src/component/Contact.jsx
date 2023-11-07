import { Container, Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <Container className='d-flex justify-content-center align-items-center flex-wrap p-3'>
     <Stack className='m-xs-3 flex-fill d-flex justify-content-start align-items-center'>
      <img src={"/contact.png"} alt="" width={"250px"}/>
     </Stack> 
    <Form className='flex-fill'>

     <Form.Group className="mb-3" controlId="formBasicName">
       
        <Form.Control className='form-control-lg' type="text" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" className='form-control-lg' placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMessage">
      <Form.Control
          as="textarea"
          placeholder="Leave a mesaage here"
          style={{ height: '100px' }}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </Container>
  );
}

export default Contact;